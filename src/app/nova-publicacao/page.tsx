'use client';

import {
   Button,
   Card,
   CardBody,
   CardHeader,
   Input,
   Select,
   SelectItem,
   Textarea,
} from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, Upload, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type React from 'react';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { AuthGuard } from '@/components/auth-guard';

const publicacaoSchema = z.object({
   nome: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
   especie: z.string().min(1, 'Selecione a espécie'),
   porte: z.string().min(1, 'Selecione o porte'),
   cor: z.string().min(2, 'Cor deve ter no mínimo 2 caracteres'),
   dataDesaparecimento: z.string().min(1, 'Data é obrigatória'),
   localizacao: z
      .string()
      .min(5, 'Localização deve ter no mínimo 5 caracteres'),
   descricao: z.string().min(10, 'Descrição deve ter no mínimo 10 caracteres'),
});

type PublicacaoForm = z.infer<typeof publicacaoSchema>;

const especies = ['Cachorro', 'Gato', 'Pássaro', 'Outro'];
const portes = ['Pequeno', 'Médio', 'Grande'];

function NovaPublicacaoContent() {
   const router = useRouter();
   const [images, setImages] = useState<string[]>([]);

   const {
      register,
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<PublicacaoForm>({
      resolver: zodResolver(publicacaoSchema),
      defaultValues: {
         nome: '',
         especie: '',
         porte: '',
         cor: '',
         dataDesaparecimento: '',
         localizacao: '',
         descricao: '',
      },
   });

   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files) return;

      const newImages: string[] = [];
      Array.from(files).forEach((file) => {
         if (images.length + newImages.length < 3) {
            const reader = new FileReader();
            reader.onloadend = () => {
               newImages.push(reader.result as string);
               if (
                  newImages.length === files.length ||
                  images.length + newImages.length === 3
               ) {
                  setImages([...images, ...newImages]);
               }
            };
            reader.readAsDataURL(file);
         }
      });
   };

   const removeImage = (index: number) => {
      setImages(images.filter((_, i) => i !== index));
   };

   const onSubmit = (data: PublicacaoForm) => {
      console.log('[v0] New post data:', { ...data, images });
      router.push('/feed');
   };

   return (
      <div className="min-h-screen bg-default-50 py-8">
         <div className="container mx-auto max-w-2xl px-4">
            <Button
               as={Link}
               href="/feed"
               variant="light"
               startContent={<ArrowLeft className="h-4 w-4" />}
               className="mb-6"
            >
               Voltar ao Feed
            </Button>

            <Card className="shadow-lg">
               <CardHeader className="flex flex-col items-start gap-2 px-8 pt-8 pb-4">
                  <h1 className="font-bold text-3xl">Nova Publicação</h1>
                  <p className="text-default-500">
                     Preencha as informações sobre o pet perdido
                  </p>
               </CardHeader>
               <CardBody className="px-8 pb-8">
                  <form
                     onSubmit={handleSubmit(onSubmit)}
                     className="flex flex-col gap-6"
                  >
                     {/* Upload de Fotos */}
                     <div>
                        <p className="mb-2 block font-medium text-sm">
                           Fotos do Pet (até 3)
                        </p>
                        <div className="mb-4 grid grid-cols-3 gap-4">
                           {images.map((image, index) => (
                              <div
                                 key={index}
                                 className="relative aspect-square"
                              >
                                 <Image
                                    src={image || '/placeholder.svg'}
                                    alt={`Preview ${index + 1}`}
                                    className="h-full w-full rounded-lg object-cover"
                                    width={400}
                                    height={400}
                                 />
                                 <button
                                    type="button"
                                    onClick={() => removeImage(index)}
                                    className="-top-2 -right-2 absolute rounded-full bg-danger p-1 text-white shadow-lg"
                                 >
                                    <X className="h-4 w-4" />
                                 </button>
                              </div>
                           ))}
                        </div>
                        {images.length < 3 && (
                           <label className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-default-300 border-dashed transition-colors hover:border-primary">
                              <Upload className="mb-2 h-8 w-8 text-default-400" />
                              <span className="text-default-500 text-sm">
                                 Clique para adicionar fotos
                              </span>
                              <input
                                 type="file"
                                 accept="image/*"
                                 multiple
                                 onChange={handleImageUpload}
                                 className="hidden"
                              />
                           </label>
                        )}
                     </div>

                     <Input
                        type="text"
                        label="Nome do Pet"
                        placeholder="Ex: Rex, Mimi, Thor..."
                        {...register('nome')}
                        isInvalid={!!errors.nome}
                        errorMessage={errors.nome?.message}
                        isRequired
                     />

                     <Controller
                        name="especie"
                        control={control}
                        render={({ field }) => (
                           <Select
                              label="Espécie"
                              placeholder="Selecione a espécie"
                              selectedKeys={field.value ? [field.value] : []}
                              onSelectionChange={(keys) =>
                                 field.onChange(Array.from(keys)[0])
                              }
                              isInvalid={!!errors.especie}
                              errorMessage={errors.especie?.message}
                              isRequired
                           >
                              {especies.map((especie) => (
                                 <SelectItem key={especie} value={especie}>
                                    {especie}
                                 </SelectItem>
                              ))}
                           </Select>
                        )}
                     />

                     <Controller
                        name="porte"
                        control={control}
                        render={({ field }) => (
                           <Select
                              label="Porte"
                              placeholder="Selecione o porte"
                              selectedKeys={field.value ? [field.value] : []}
                              onSelectionChange={(keys) =>
                                 field.onChange(Array.from(keys)[0])
                              }
                              isInvalid={!!errors.porte}
                              errorMessage={errors.porte?.message}
                              isRequired
                           >
                              {portes.map((porte) => (
                                 <SelectItem key={porte} value={porte}>
                                    {porte}
                                 </SelectItem>
                              ))}
                           </Select>
                        )}
                     />

                     <Input
                        type="text"
                        label="Cor"
                        placeholder="Ex: Marrom, Branco e Preto..."
                        {...register('cor')}
                        isInvalid={!!errors.cor}
                        errorMessage={errors.cor?.message}
                        isRequired
                     />

                     <Input
                        type="date"
                        label="Data de Desaparecimento"
                        {...register('dataDesaparecimento')}
                        isInvalid={!!errors.dataDesaparecimento}
                        errorMessage={errors.dataDesaparecimento?.message}
                        isRequired
                     />

                     <Input
                        type="text"
                        label="Localização"
                        placeholder="Ex: Bairro Monte Castelo, Campo Grande - MS"
                        {...register('localizacao')}
                        isInvalid={!!errors.localizacao}
                        errorMessage={errors.localizacao?.message}
                        isRequired
                     />

                     <Textarea
                        label="Descrição"
                        placeholder="Descreva características, comportamento, circunstâncias do desaparecimento..."
                        minRows={4}
                        {...register('descricao')}
                        isInvalid={!!errors.descricao}
                        errorMessage={errors.descricao?.message}
                        isRequired
                     />

                     <div className="flex gap-4 pt-4">
                        <Button
                           type="button"
                           variant="bordered"
                           fullWidth
                           onPress={() => router.back()}
                        >
                           Cancelar
                        </Button>
                        <Button
                           type="submit"
                           color="primary"
                           fullWidth
                           className="font-semibold"
                        >
                           Publicar
                        </Button>
                     </div>
                  </form>
               </CardBody>
            </Card>
         </div>
      </div>
   );
}

export default function NovaPublicacaoPage() {
   return (
      <AuthGuard>
         <NovaPublicacaoContent />
      </AuthGuard>
   );
}

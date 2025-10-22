'use client';

import {
   Button,
   Card,
   CardBody,
   CardHeader,
   Divider,
   Input,
} from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Eye, EyeOff, Lock, Mail, Phone, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { login } from '@/lib/auth';

const registroSchema = z
   .object({
      fullName: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
      phone: z.string().min(10, 'Celular inválido'),
      email: z.email('Email inválido'),
      birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
      password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
      confirmPassword: z.string().min(8, 'Confirme sua senha'),
   })
   .refine((data) => data.password === data.confirmPassword, {
      message: 'As senhas não coincidem',
      path: ['confirmPassword'],
   });

type RegistroForm = z.infer<typeof registroSchema>;

export default function RegistroPage() {
   const router = useRouter();
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<RegistroForm>({
      resolver: zodResolver(registroSchema),
      defaultValues: {
         fullName: '',
         phone: '',
         email: '',
         birthDate: '',
         password: '',
         confirmPassword: '',
      },
   });

   const onSubmit = (data: RegistroForm) => {
      console.log('[v0] Registration data:', data);
      login();
      router.push('/feed');
   };

   return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 p-4 py-12">
         <Card className="w-full max-w-md shadow-xl">
            <CardHeader className="flex flex-col items-center gap-3 pt-8 pb-4">
               <h1 className="text-center font-bold text-3xl">Criar Conta</h1>
               <p className="text-center text-default-500">
                  Junte-se a nós e ajude pets perdidos
               </p>
            </CardHeader>
            <CardBody className="gap-6 px-8 pb-8">
               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
               >
                  <Input
                     type="text"
                     label="Nome Completo"
                     placeholder="João Silva"
                     startContent={
                        <User className="h-4 w-4 text-default-400" />
                     }
                     {...register('fullName')}
                     isInvalid={!!errors.fullName}
                     errorMessage={errors.fullName?.message}
                     isRequired
                  />

                  <Input
                     type="tel"
                     label="Celular"
                     placeholder="(67) 99999-9999"
                     startContent={
                        <Phone className="h-4 w-4 text-default-400" />
                     }
                     {...register('phone')}
                     isInvalid={!!errors.phone}
                     errorMessage={errors.phone?.message}
                     isRequired
                  />

                  <Input
                     type="email"
                     label="Email"
                     placeholder="seu@email.com"
                     startContent={
                        <Mail className="h-4 w-4 text-default-400" />
                     }
                     {...register('email')}
                     isInvalid={!!errors.email}
                     errorMessage={errors.email?.message}
                     isRequired
                  />

                  <Input
                     type="date"
                     label="Data de Nascimento"
                     startContent={
                        <Calendar className="h-4 w-4 text-default-400" />
                     }
                     {...register('birthDate')}
                     isInvalid={!!errors.birthDate}
                     errorMessage={errors.birthDate?.message}
                     isRequired
                  />

                  <Input
                     type={showPassword ? 'text' : 'password'}
                     label="Senha"
                     placeholder="Mínimo 8 caracteres"
                     startContent={
                        <Lock className="h-4 w-4 text-default-400" />
                     }
                     endContent={
                        <Button
                           isIconOnly
                           type="button"
                           size={'sm'}
                           variant={'light'}
                           onPress={() => setShowPassword(!showPassword)}
                           className="focus:outline-none"
                        >
                           {showPassword ? (
                              <EyeOff className="h-4 w-4 text-default-400" />
                           ) : (
                              <Eye className="h-4 w-4 text-default-400" />
                           )}
                        </Button>
                     }
                     {...register('password')}
                     isInvalid={!!errors.password}
                     errorMessage={errors.password?.message}
                     isRequired
                  />

                  <Input
                     type={showConfirmPassword ? 'text' : 'password'}
                     label="Confirme a Senha"
                     placeholder="Digite a senha novamente"
                     startContent={
                        <Lock className="h-4 w-4 text-default-400" />
                     }
                     endContent={
                        <Button
                           isIconOnly
                           type="button"
                           size={'sm'}
                           variant={'light'}
                           onPress={() => setShowPassword(!showPassword)}
                           className="focus:outline-none"
                        >
                           {showPassword ? (
                              <EyeOff className="h-4 w-4 text-default-400" />
                           ) : (
                              <Eye className="h-4 w-4 text-default-400" />
                           )}
                        </Button>
                     }
                     {...register('confirmPassword')}
                     isInvalid={!!errors.confirmPassword}
                     errorMessage={errors.confirmPassword?.message}
                     isRequired
                  />

                  <Button
                     type="submit"
                     color="primary"
                     size="lg"
                     className="mt-2 font-semibold"
                  >
                     Criar Conta
                  </Button>
               </form>

               <Divider />

               <p className="text-center text-default-500 text-sm">
                  Já tem uma conta?{' '}
                  <Link
                     href="/login"
                     className="font-semibold text-primary hover:underline"
                  >
                     Entrar
                  </Link>
               </p>
            </CardBody>
         </Card>
      </div>
   );
}

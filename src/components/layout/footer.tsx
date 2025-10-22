import Link from 'next/link';
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
   return (
      <footer className="bg-muted/30 border-t border-border">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
               {/* Brand */}
               <div>
                  <Link href="/" className="flex items-center gap-2 mb-4">
                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                        <Heart className="h-6 w-6 text-primary-foreground fill-current" />
                     </div>
                     <span className="text-xl font-bold text-foreground font-heading">
                        EncontraPet
                     </span>
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                     Plataforma solidária para reunir pets perdidos com suas
                     famílias.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                     <MapPin className="h-4 w-4" />
                     <span>Campo Grande, MS</span>
                  </div>
               </div>

               {/* Links */}
               <div>
                  <h3 className="font-semibold text-foreground mb-4">
                     Plataforma
                  </h3>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/cadastrar-perdido"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Cadastrar Pet Perdido
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/cadastrar-encontrado"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Cadastrar Pet Encontrado
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/buscar"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Buscar Pets
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/dicas"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Dicas e Orientações
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* About */}
               <div>
                  <h3 className="font-semibold text-foreground mb-4">Sobre</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link
                           href="/sobre"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Quem Somos
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/como-funciona"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Como Funciona
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/parceiros"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Parceiros
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="/contato"
                           className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                           Contato
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact */}
               <div>
                  <h3 className="font-semibold text-foreground mb-4">
                     Contato
                  </h3>
                  <ul className="space-y-3">
                     <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a
                           href="mailto:contato@encontrapet.com.br"
                           className="hover:text-foreground transition-colors"
                        >
                           contato@encontrapet.com.br
                        </a>
                     </li>
                     <li className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a
                           href="tel:+5567999999999"
                           className="hover:text-foreground transition-colors"
                        >
                           (67) 99999-9999
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Bottom */}
            <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
               <p className="text-sm text-muted-foreground">
                  © 2025 EncontraPet. Todos os direitos reservados.
               </p>
               <div className="flex gap-6">
                  <Link
                     href="/privacidade"
                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                     Privacidade
                  </Link>
                  <Link
                     href="/termos"
                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                     Termos de Uso
                  </Link>
                  <Link
                     href="/lgpd"
                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                     LGPD
                  </Link>
               </div>
            </div>
         </div>
      </footer>
   );
}

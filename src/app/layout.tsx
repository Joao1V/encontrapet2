import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import type React from 'react';
import '@/styles/globals.css';
import { Providers } from '@/components/layout/providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400', '500', '600', '700'],
   variable: '--font-poppins',
});

export const metadata: Metadata = {
   title: 'EncontraPet - Plataforma Solidária para Animais Perdidos',
   description:
      'Conectando quem perdeu com quem encontrou. Ajude a reunir pets com suas famílias.',
   generator: 'v0.app',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR" className={'light'}>
         <body
            className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
         >
            <Providers>{children}</Providers>
            <Analytics />
         </body>
      </html>
   );
}

import { HeroUIProvider } from '@heroui/react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';

type ProvidersProps = {
   children: React.ReactNode;
};

export function Providers(props: ProvidersProps) {
   const { children } = props;

   return (
      <HeroUIProvider>
         <Header />
         {children}
         <Footer />
      </HeroUIProvider>
   );
}

'use client';

import {
   Button,
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
} from '@heroui/react';
import Link from 'next/link';
import { useState } from 'react';
import { AppLogo } from '@/components/app-logo';

export function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const menuItems = [
      { label: 'Como Funciona', href: '#como-funciona' },
      { label: 'Recursos', href: '#recursos' },
      { label: 'Sobre', href: '#sobre' },
   ];

   return (
      <Navbar
         isMenuOpen={isMenuOpen}
         onMenuOpenChange={setIsMenuOpen}
         maxWidth="xl"
         isBordered
      >
         <NavbarContent>
            <NavbarMenuToggle
               aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
               className="sm:hidden"
            />
            <NavbarBrand>
               <Link href="/">
                  <AppLogo />
               </Link>
            </NavbarBrand>
         </NavbarContent>

         <NavbarContent className="hidden gap-8 sm:flex" justify="center">
            {menuItems.map((item) => (
               <NavbarItem key={item.href}>
                  <Link
                     href={item.href}
                     className="font-medium text-muted-foreground text-sm transition-colors hover:text-foreground"
                  >
                     {item.label}
                  </Link>
               </NavbarItem>
            ))}
         </NavbarContent>

         <NavbarContent justify="end">
            <NavbarItem className="hidden sm:flex">
               <Button
                  as={Link}
                  href="/cadastrar"
                  color="primary"
                  variant="solid"
                  className="font-semibold"
               >
                  Começar Agora
               </Button>
            </NavbarItem>
         </NavbarContent>

         <NavbarMenu>
            {menuItems.map((item, index) => (
               <NavbarMenuItem key={`${item.href}-${index}`}>
                  <Link
                     href={item.href}
                     className="w-full text-foreground"
                     onClick={() => setIsMenuOpen(false)}
                  >
                     {item.label}
                  </Link>
               </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
               <Button
                  as={Link}
                  href="/cadastrar"
                  color="primary"
                  variant="solid"
                  className="w-full font-semibold"
                  onPress={() => setIsMenuOpen(false)}
               >
                  Começar Agora
               </Button>
            </NavbarMenuItem>
         </NavbarMenu>
      </Navbar>
   );
}

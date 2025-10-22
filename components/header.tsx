"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Recursos", href: "#recursos" },
    { label: "Sobre", href: "#sobre" },
  ]

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} maxWidth="xl" className="border-b border-divider">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Heart className="h-6 w-6 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold font-heading">EncontraPet</span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className="text-sm font-medium text-default-600 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} href="/cadastrar" color="primary" variant="solid" className="font-semibold">
            Começar Agora
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link href={item.href} className="w-full text-foreground" onClick={() => setIsMenuOpen(false)}>
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
            onClick={() => setIsMenuOpen(false)}
          >
            Começar Agora
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

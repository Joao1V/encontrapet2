import Link from "next/link"
import { Search, MapPin } from "lucide-react"
import { Button, Card, CardBody, Chip } from "@heroui/react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-content1 py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            <Chip startContent={<MapPin className="h-4 w-4" />} variant="flat" color="secondary" className="w-fit">
              Conectando pets com suas famílias
            </Chip>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Ajudamos você a <span className="text-primary">encontrar</span> seu pet perdido
            </h1>

            <p className="text-lg sm:text-xl text-default-600 leading-relaxed">
              Uma plataforma solidária que conecta quem perdeu com quem encontrou. Centralize informações, agilize
              buscas e fortaleça a rede de apoio aos animais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as={Link}
                href="/cadastrar-perdido"
                color="primary"
                size="lg"
                startContent={<Search className="h-5 w-5" />}
                className="font-semibold shadow-lg"
              >
                Cadastrar Pet Perdido
              </Button>
              <Button
                as={Link}
                href="/cadastrar-encontrado"
                color="secondary"
                size="lg"
                variant="solid"
                className="font-semibold"
              >
                Encontrei um Pet
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-default-500">Pets cadastrados</div>
              </div>
              <div className="h-12 w-px bg-divider" />
              <div>
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-default-500">Reencontros realizados</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] h-[400px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/happy-dog-reunited-with-owner-emotional-moment.jpg"
                alt="Pet feliz reencontrado com seu tutor"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <Card className="absolute bottom-8 left-8 right-8 shadow-2xl">
              <CardBody className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Search className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Busca Inteligente</div>
                    <div className="text-sm text-default-500">Encontre pets por localização e características</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

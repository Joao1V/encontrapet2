import { MapPin, Bell, Share2, Shield, Heart, Search } from "lucide-react"
import { Card, CardBody } from "@heroui/react"

const features = [
  {
    icon: Search,
    title: "Busca Avançada",
    description: "Encontre pets usando filtros detalhados: localização, espécie, porte, cor e características físicas.",
  },
  {
    icon: MapPin,
    title: "Geolocalização",
    description: "Visualize pets perdidos e encontrados em um mapa interativo próximo à sua região.",
  },
  {
    icon: Bell,
    title: "Notificações em Tempo Real",
    description: "Receba alertas instantâneos sobre novos registros na sua área de interesse.",
  },
  {
    icon: Share2,
    title: "Compartilhamento Fácil",
    description: "Divulgue anúncios diretamente nas redes sociais com um clique para ampliar o alcance.",
  },
  {
    icon: Shield,
    title: "Seguro e Confiável",
    description: "Sistema de autenticação garante a veracidade das publicações e proteção dos dados.",
  },
  {
    icon: Heart,
    title: "Rede Solidária",
    description: "Conecte-se com ONGs, clínicas veterinárias e protetores independentes.",
  },
]

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">Por que usar o EncontraPet?</h2>
          <p className="text-lg text-default-600 leading-relaxed">
            Recursos pensados para facilitar o reencontro e fortalecer a comunidade de proteção animal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="group hover:border-primary/50 transition-all hover:shadow-lg" isPressable>
                <CardBody className="p-8">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-default-600 leading-relaxed">{feature.description}</p>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

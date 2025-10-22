import { UserPlus, Camera, Search, MessageCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua conta",
    description: "Cadastre-se gratuitamente em menos de 1 minuto. É rápido, fácil e seguro.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Cadastre o pet",
    description: "Adicione fotos, características, localização e informações de contato do animal.",
  },
  {
    number: "03",
    icon: Search,
    title: "Busque ou aguarde",
    description: "Procure por pets encontrados ou aguarde alguém encontrar o seu pet perdido.",
  },
  {
    number: "04",
    icon: MessageCircle,
    title: "Conecte-se",
    description: "Entre em contato direto com quem encontrou ou perdeu o pet para o reencontro.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Como funciona?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Em apenas 4 passos simples, você pode ajudar a reunir um pet com sua família
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-border" />
                )}

                <div className="relative bg-card rounded-2xl p-8 border border-border text-center">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>

                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground mb-3">{step.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

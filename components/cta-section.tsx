import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Pronto para ajudar um pet a voltar para casa?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 leading-relaxed">
            Junte-se à nossa comunidade solidária e faça parte dessa rede de apoio aos animais. Cada cadastro pode ser o
            início de um reencontro emocionante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastrar"
              className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-4 text-base font-semibold text-foreground hover:bg-background/90 transition-colors shadow-xl"
            >
              Começar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/20 bg-primary-foreground/10 px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

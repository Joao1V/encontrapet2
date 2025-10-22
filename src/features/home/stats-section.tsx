import { Users, MapPin, Heart, TrendingUp } from 'lucide-react';

const stats = [
   {
      icon: Heart,
      value: '200+',
      label: 'Reencontros realizados',
      description: 'Pets felizes de volta para casa',
   },
   {
      icon: Users,
      value: '1.500+',
      label: 'Usuários ativos',
      description: 'Comunidade crescendo diariamente',
   },
   {
      icon: MapPin,
      value: '50+',
      label: 'Cidades atendidas',
      description: 'Expandindo por todo Brasil',
   },
   {
      icon: TrendingUp,
      value: '85%',
      label: 'Taxa de sucesso',
      description: 'Pets encontrados em até 7 dias',
   },
];

export function StatsSection() {
   return (
      <section className="py-20 sm:py-28 bg-gradient-to-b from-primary/5 to-background">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Nosso impacto na comunidade
               </h2>
               <p className="text-lg text-muted-foreground leading-relaxed">
                  Números que mostram a força da solidariedade e do trabalho em
                  rede
               </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                     <div
                        key={index}
                        className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
                     >
                        <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                           <Icon className="h-7 w-7" />
                        </div>
                        <div className="text-4xl font-bold text-foreground mb-2">
                           {stat.value}
                        </div>
                        <div className="text-base font-semibold text-card-foreground mb-2">
                           {stat.label}
                        </div>
                        <div className="text-sm text-muted-foreground">
                           {stat.description}
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}

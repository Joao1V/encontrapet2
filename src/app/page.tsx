import { CTASection } from '@/features/home/components/cta-section';
import { FeaturesSection } from '@/features/home/components/features-section';
import { HeroSection } from '@/features/home/components/hero-section';
import { HowItWorksSection } from '@/features/home/components/how-it-works-section';
import { StatsSection } from '@/features/home/components/stats-section';

export default function HomePage() {
   return (
      <main className="min-h-screen">
         <HeroSection />
         <FeaturesSection />
         <HowItWorksSection />
         <StatsSection />
         <CTASection />
      </main>
   );
}

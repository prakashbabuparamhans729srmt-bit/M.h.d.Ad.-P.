// Future changes can be requested here. Just tell the AI what you want to change!

import { PublicLayout } from '@/components/layout/public-layout';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { CtaSection } from '@/components/landing/cta-section';

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
    </PublicLayout>
  );
}

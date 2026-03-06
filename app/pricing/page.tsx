import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { PricingSection } from '@/src/sections/pricing/version-2';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moshate Consulting | Pricing',
  description: 'Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Team"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Team',
          },
        ]}
      />
      <PricingSection />
      <CtaSection className="section-padding-primary" />
      <Footer />
    </>
  );
}

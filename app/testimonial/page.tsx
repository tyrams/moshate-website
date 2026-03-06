import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { TestimonialSection } from '@/src/sections/testimonial/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moshate Consulting | Testimonial',
  description: 'Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Testimonial"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Testimonial',
          },
        ]}
      />
      <TestimonialSection />
      <CtaSection className="section-padding-primary !pt-0" />
      <Footer />
    </>
  );
}

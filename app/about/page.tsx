import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { OurStorySection } from "@/src/sections/about/our-story";
import { CompanyIntroSection } from "@/src/sections/about/company-intro";
import { ValuesSection } from "@/src/sections/about/values";
import { CapabilitiesSection } from "@/src/sections/about/capabilities";
import { CtaSection } from "@/src/sections/cta/v1";
import { HeroSection } from "@/src/sections/hero/v3";
import { WorkprocessSection } from "@/src/sections/work-process/v1";

import { Metadata } from "next";
import { SectionHeading } from "@/src/components/section-heading";
import { Container } from "@/src/components/container";

export const metadata: Metadata = {
  title: "Moshate Consulting | About Us",
  description:
    "Moshate Consulting Services is a leading IT consulting firm specialising in delivering innovative ICT and management solutions.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection title="About Us" breadcrumbItems={[]} />
      <CompanyIntroSection />
      <OurStorySection />
      <ValuesSection />
      <CapabilitiesSection />
      <section className="bg-white pb-8 pt-20 dark:bg-accent-950">
        <Container>
          <div className="text-center">
            <SectionHeading
              subtitle="How We Work"
              title="Our Delivery Approach"
              description="Our delivery model is grounded in four core principles that guide every engagement"
            />
          </div>
        </Container>
      </section>
      <WorkprocessSection />
      <CtaSection />
      <Footer />
    </>
  );
}

import { serviceSectionData } from "@/data/service-section/v1/service-list-page";
import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { HeroSection } from "@/src/sections/hero/v3";
import { ServiceIntroSection } from "@/src/sections/service/intro";
import { ServiceSection } from "@/src/sections/service/v1";
import { CtaSection } from "@/src/sections/cta/v1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Services",
  description:
    "Our Services are designed for small and large organisations. We understand the trends, leading practices and the industries in which we operate.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection title="Services" breadcrumbItems={[]} />
      <ServiceIntroSection className="mt-12 py-12 md:mt-16 md:py-16 xl:mt-20 xl:py-20" />
      <ServiceSection
        {...serviceSectionData}
        className="py-12 md:py-16 xl:py-20"
        contentClassName="justify-start"
      />
      <CtaSection
        className="mt-16 mb-12 md:mt-20 md:mb-16 lg:mt-24 lg:mb-20"
        contentClassName="py-8 md:py-10"
      />
      <Footer />
    </>
  );
}

import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { AboutSection } from "@/src/sections/about/v2";
import { CtaSection } from "@/src/sections/cta/v1";
import { HeroSection } from "@/src/sections/hero/v3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | About Us",
  description:
    "Moshate Consulting Services is a leading IT consulting firm specialising in delivering innovative ICT and management solutions.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection
        title="About Us"
        breadcrumbItems={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "About",
          },
        ]}
      />
      <AboutSection />
      <CtaSection />
      <Footer />
    </>
  );
}

import { serviceSectionData } from "@/data/service-section/v1/home-page";
import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { AboutSection } from "@/src/sections/about/v1";
import { Hero } from "@/src/sections/hero/v1";
import { ServiceSection } from "@/src/sections/service/v1";
import { ContactSection } from "@/src/sections/contact/v1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Home",
  description:
    "Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <Hero />
      <div className="!bg-white dark:!bg-accent-950">
        <ServiceSection
          className="py-16 md:py-20 xl:py-24"
          {...serviceSectionData}
        />
      </div>
      <div className="!bg-white dark:!bg-accent-950">
        <AboutSection className="py-16 md:py-20 xl:py-24" />
      </div>
      <ContactSection title="Lets Partner Together" />
      <Footer />
    </>
  );
}

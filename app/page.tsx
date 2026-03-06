import { serviceSectionData } from "@/data/service-section/v1/home-page";
import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { AboutSection } from "@/src/sections/about/v1";
import { Hero } from "@/src/sections/hero/v1";
import { ServiceSection } from "@/src/sections/service/v1";
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
      <ServiceSection className="!pb-0" {...serviceSectionData} />
      <AboutSection />
      <Footer />
    </>
  );
}

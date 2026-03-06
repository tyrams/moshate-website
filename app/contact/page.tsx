import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { ContactSection } from "@/src/sections/contact/v2";
import { HeroSection } from "@/src/sections/hero/v3";
import { MapSection } from "@/src/sections/map-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Contact Us",
  description:
    "Get in touch with Moshate Consulting. Send us a message or email us at admin@moshateconsulting.co.za.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection
        title="Contact Us"
        breadcrumbItems={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Contact Us",
          },
        ]}
      />
      <ContactSection />
      <MapSection />
      <Footer />
    </>
  );
}

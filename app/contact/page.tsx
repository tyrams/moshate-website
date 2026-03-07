import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { ContactSection } from "@/src/sections/contact/v2";
import { HeroSection } from "@/src/sections/hero/v3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Contact Us",
  description:
    "Get in touch with Moshate Consulting. Send us a message or email us at info@moshateconsulting.co.za.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection title="Contact Us" breadcrumbItems={[]} />
      <ContactSection />
      <Footer />
    </>
  );
}

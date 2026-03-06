import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { BlogDetilsSection } from "@/src/sections/blog-details/v1";
import { HeroSection } from "@/src/sections/hero/v3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Blog Details",
  description:
    "Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection
        title="Blog Details"
        breadcrumbItems={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Blog Details",
          },
        ]}
      />
      <BlogDetilsSection />
      <Footer />
    </>
  );
}

import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { HeroSection } from "@/src/sections/hero/v3";
import { ProjectDetailsSection } from "@/src/sections/project-details/v1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Project Details",
  description:
    "Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection
        title="Project Details"
        breadcrumbItems={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Project Details",
          },
        ]}
      />
      <ProjectDetailsSection />
      <Footer />
    </>
  );
}

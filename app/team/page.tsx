import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { HeroSection } from "@/src/sections/hero/v3";
import { TeamSection } from "@/src/sections/team/grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Team",
  description:
    "Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.",
};

export default function Page() {
  return (
    <>
      <MainHeader />
      <HeroSection
        title="Team"
        breadcrumbItems={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Team",
          },
        ]}
      />
      <TeamSection />
      <Footer />
    </>
  );
}

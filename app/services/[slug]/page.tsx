import { Footer } from "@/src/layout/footer/v2";
import { MainHeader } from "@/src/layout/header";
import { HeroSection } from "@/src/sections/hero/v3";
import { ServiceDetailsSection } from "@/src/sections/service-details/v1";
import { getServiceBySlug } from "@/data/service-section/v1/service-list-page/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moshate Consulting | Service Details",
  description:
    "Moshate Consulting - ICT and Management Consulting firm focused on innovative business management and digital solution services.",
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const serviceData = getServiceBySlug(slug);
  const serviceTitle = serviceData?.title || "Service Details";

  return (
    <>
      <MainHeader />
      <HeroSection title={serviceTitle} breadcrumbItems={[]} />
      <ServiceDetailsSection
        serviceTitle={serviceTitle}
        serviceDescription={serviceData?.description}
        serviceIcon={serviceData?.icon}
      />
      <Footer />
    </>
  );
}

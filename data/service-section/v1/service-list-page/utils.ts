import { serviceSectionData } from "./index";

export function getServiceBySlug(slug: string) {
  return serviceSectionData.services.find(
    (service) => service.slug === `/services/${slug}`,
  );
}

export function getServiceByTitle(title: string) {
  return serviceSectionData.services.find((service) => service.title === title);
}

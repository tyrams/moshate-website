import { serviceSectionData } from "./index";
import { getServiceDetailBySlug } from "../service-detail-page";

export function getServiceBySlug(slug: string) {
  const detailService = getServiceDetailBySlug(slug);

  if (detailService) {
    return detailService;
  }

  return serviceSectionData.services.find(
    (service) => service.slug === `/services/${slug}`,
  );
}

export function getServiceByTitle(title: string) {
  return serviceSectionData.services.find((service) => service.title === title);
}

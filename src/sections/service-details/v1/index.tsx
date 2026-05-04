import { Container } from "@/src/components/container";
import type { ServiceContentProps } from "@/src/components/cards/service/v1";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export function ServiceDetailsSection({
  service,
}: {
  service?: ServiceContentProps;
}) {
  const title = service?.title || "Service Details";
  const sidebarDescription =
    service?.sidebarDescription || service?.description;
  const introTitle = service?.introTitle;
  const introParagraphs =
    service?.introParagraphs?.filter((paragraph): paragraph is string =>
      Boolean(paragraph),
    ) || (service?.description ? [service.description] : []);
  const keyOfferings = service?.keyOfferings || [];
  const deliveryFocus = service?.deliveryFocus || [];
  const imageSrc =
    service?.imageSrc || "/assets/images/Strategy in Action - pictures.jpg";
  const imageAlt = service?.imageAlt || `${title} service image`;

  return (
    <section className="section-padding-primary">
      <Container>
        <div className="grid items-start gap-10 md:grid-cols-[390px_1fr] 2xl:gap-[50px]">
          <aside className="grid gap-10 md:sticky md:top-[76px] lg:top-[133px] 2xl:gap-[60px]">
            <div className="grid gap-5 rounded-5 bg-accent-100 px-8 py-8 dark:bg-accent-700 md:px-10">
              <div className="space-y-2">
                <span className="block font-secondary text-sm font-bold uppercase tracking-[0.2em] text-secondary">
                  Service overview
                </span>
                <h3 className="h3 text-accent-700 dark:text-white">{title}</h3>
              </div>

              {service?.icon && (
                <div className="text-[3rem] text-primary md:text-[4rem]">
                  {service.icon}
                </div>
              )}

              {sidebarDescription && (
                <p
                  dangerouslySetInnerHTML={{ __html: sidebarDescription }}
                />
              )}
            </div>

            {keyOfferings.length > 0 && (
              <div className="rounded-5 border border-accent-200 bg-white p-6 shadow-3 dark:border-accent-700 dark:bg-accent-800">
                <h4 className="mb-5 text-md font-bold text-accent-700 dark:text-white">
                  Delivery focus
                </h4>
                <ul className="grid gap-4">
                  {keyOfferings.map((offering) => (
                    <li
                      key={offering}
                      className="flex items-start gap-3 text-accent-800 dark:text-body"
                    >
                      <span className="mt-1 flex-none text-base/[1] text-primary">
                        <FaCircleCheck />
                      </span>
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>

          <div className="grid gap-8 md:gap-10">
            <div className="relative overflow-hidden rounded-5 bg-accent-100 dark:bg-accent-800">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={850}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>

            {(introTitle || introParagraphs.length > 0) && (
              <div className="grid gap-4">
                {introTitle && (
                  <h2 className="h3 text-accent-700 dark:text-white">
                    {introTitle}
                  </h2>
                )}
                {introParagraphs.map((paragraph, index) => (
                  <p key={`${title}-intro-${index}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {deliveryFocus.length > 0 && (
              <div className="grid gap-4 rounded-5 bg-accent-50 p-6 dark:bg-accent-700/40 md:p-8">
                <h4 className="text-md font-bold text-accent-700 dark:text-white">
                  Key offerings
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {deliveryFocus.map((offering) => (
                    <div
                      key={`${title}-focus-${offering}`}
                      className="flex items-start gap-3 rounded-5 bg-white p-4 shadow-3 dark:bg-accent-800"
                    >
                      <span className="mt-1 flex-none text-base/[1] text-primary">
                        <FaCircleCheck />
                      </span>
                      <span className="text-accent-800 dark:text-body">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { contactSectionData } from "@/data/contact-section/v1";
import { ImageProps, blurDataUrl } from "@/src/common-types";
import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";
import { SectionHeadingWithoutStylingProps } from "@/src/components/section-heading/interface";
import { BREAKPOINTS } from "@/src/themes/interface";
import Image from "next/image";
import { Form } from "./form";

export interface ContactSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  image: Omit<ImageProps, "width" | "height">;
}

export function ContactSection({ title }: { title?: string } = {}) {
  const { sectionHeading, image } = contactSectionData;
  const resolvedHeading = title ? { ...sectionHeading, title } : sectionHeading;
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="relative py-[60px] pr-4">
          {/* Image area */}
          <div className="absolute left-0 top-0 z-1 h-full w-full overflow-hidden rounded-5 md:w-[56%]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes={`(min-width: ${BREAKPOINTS.md}) 60vw, 100vw`}
              placeholder="blur"
              blurDataURL={blurDataUrl}
            />
          </div>

          <div className="ml-auto md:w-1/2">
            <div className="relative z-[2] rounded-5 bg-white p-10 [box-shadow:0_4px_15px_rgba(0,0,0,0.06),8px_0_20px_rgba(0,0,0,0.07)] dark:bg-accent-700 lg:p-[60px]">
              <div className="mb-30px">
                <SectionHeading {...resolvedHeading} />
              </div>
              <Form />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

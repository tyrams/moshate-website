import { ImageProps } from "@/src/common-types";
import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";
import { SectionHeadingWithoutStylingProps } from "@/src/components/section-heading/interface";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

export interface AboutSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  aboutUsPoints: string[];
  image: Omit<ImageProps, "width" | "height">;
}

export function AboutSection() {
  return (
    <section className="section-padding-primary overflow-hidden">
      <Container>
        <div className="flex flex-col items-center justify-between gap-x-16 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
          <div className="lg:w-[45%]">
            <div
              className="group relative mx-auto pb-[20px] pr-[20px]"
              data-aos="fade-up-left"
              data-aos-delay="400"
            >
              {/* Offset border frame */}
              <div className="absolute left-[20px] top-[20px] h-[calc(100%-20px)] w-[calc(100%-20px)] border border-primary transition-all duration-500 group-hover:left-[10px] group-hover:top-[10px]" />

              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src="/assets/images/entrepreneurs-shaking-hands-solar-panel-manufacturing-plant-after-reaching-agreement.jpg"
                  alt="about image five"
                  width={640}
                  height={678}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                {/* Overlay that lifts on hover */}
                <div className="absolute inset-0 bg-accent-900/20 transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
          </div>
          <div
            className="lg:w-1/2"
            data-aos="fade-up-right"
            data-aos-delay="400"
          >
            <SectionHeading
              subtitle="Our Mission"
              title="Empowering Businesses in the Digital Landscape"
              description="Our mission is to empower businesses with the tools and strategies needed to thrive in today's fast-paced digital landscape. By combining technical expertise with industry insights, we help organizations harness the power of technology to achieve their objectives and stay ahead of the competition."
            />
            <ul
              aria-label="about us point"
              className="mt-10 grid max-w-[560px] gap-1 gap-x-20 sm:grid-cols-2 md:gap-2"
            >
              <li className="flex items-center gap-3 lg:gap-4">
                <span className="text-lg text-primary">
                  <FaCircleCheck />
                </span>
                <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                  Honesty, Excellence and Respect
                </span>
              </li>
              <li className="flex items-center gap-3 lg:gap-4">
                <span className="text-lg text-primary">
                  <FaCircleCheck />
                </span>
                <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                  Ubuntu-driven Company Culture
                </span>
              </li>
              <li className="flex items-center gap-3 lg:gap-4">
                <span className="text-lg text-primary">
                  <FaCircleCheck />
                </span>
                <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                  Highly Skilled Teams
                </span>
              </li>
              <li className="flex items-center gap-3 lg:gap-4">
                <span className="text-lg text-primary">
                  <FaCircleCheck />
                </span>
                <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                  Public & Private Sector Experience
                </span>
              </li>
              <li className="flex items-center gap-3 lg:gap-4">
                <span className="text-lg text-primary">
                  <FaCircleCheck />
                </span>
                <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                  Revenue Management & Public Safety
                </span>
              </li>
              <li className="flex items-center gap-3 lg:gap-4">
                <span className="text-lg text-primary">
                  <FaCircleCheck />
                </span>
                <span className="block font-secondary text-md font-bold leading-[1.5] text-accent-900 dark:text-white">
                  IT, Mining, Banking & Telecoms
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";
import Image from "next/image";

export function OurStorySection() {
  return (
    <section className="section-padding-primary overflow-hidden bg-accent-100 dark:bg-accent-900/50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-x-20 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
          {/* Image — left - Portrait style */}
          <div className="lg:w-[45%]">
            <div
              className="group relative"
              data-aos="fade-up-right"
              data-aos-delay="300"
            >
              {/* Main image container with creative shape */}
              <div className="relative">
                {/* Decorative background shape */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent blur-3xl" />

                {/* Image with mask and blend effect */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 95%, 85% 100%, 0 100%)",
                  }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/assets/images/Resource augmation.jpg"
                      alt="Moshate Consulting partnership and collaboration"
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-[1.08]"
                    />
                    {/* Gradient overlay for blend effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent-100 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                  </div>
                </div>

                {/* Accent border element */}
                <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b-4 border-r-4 border-primary/40" />
                <div className="absolute -left-3 -top-3 h-20 w-20 border-l-4 border-t-4 border-primary/40" />

                {/* Floating decorative elements */}
                <div className="absolute right-0 top-1/4 -z-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />
                <div className="absolute bottom-1/4 left-0 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
              </div>
            </div>
          </div>

          {/* Content — right */}
          <div
            className="lg:w-[52%]"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <SectionHeading subtitle="Our Journey" title="Our Story" />

            <div className="mt-6 space-y-6">
              <p className="font-secondary text-md leading-[1.8] text-accent-700 dark:text-accent-200">
                In an increasingly complex and fast-moving digital world,
                organisations need more than technology—they need trusted
                partners who understand both business realities and future
                possibilities.
              </p>

              <div className="rounded-lg border-l-4 border-primary bg-white/50 p-6 dark:bg-accent-800/30">
                <h4 className="font-secondary text-lg font-semibold text-accent-900 dark:text-white">
                  Our Mission
                </h4>
                <p className="mt-3 font-secondary text-md leading-[1.8] text-accent-700 dark:text-accent-200">
                  Our mission is to empower organisations with the strategies,
                  capabilities, and tools required to thrive in the digital
                  economy. By integrating technology expertise with industry
                  knowledge, we help clients modernise operations, improve
                  service delivery, and unlock new opportunities for innovation
                  and impact.
                </p>
              </div>

              <p className="font-secondary text-md leading-[1.8] text-accent-700 dark:text-accent-200">
                As a proudly South African,{" "}
                <span className="font-semibold text-primary">
                  women-owned business
                </span>
                , we are driven by a purpose to contribute meaningfully to
                economic development, transformation and inclusive growth across
                the country.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";
import Image from "next/image";

export function CompanyIntroSection() {
  return (
    <section className="section-padding-primary overflow-hidden bg-white dark:bg-accent-950">
      <Container>
        <div className="flex flex-col items-center gap-x-20 gap-y-[60px] lg:flex-row xl:gap-x-[120px]">
          {/* Text — left */}
          <div
            className="w-full lg:w-[52%]"
            data-aos="fade-up-right"
            data-aos-delay="200"
          >
            <SectionHeading subtitle="About the Company" title="Who We Are" />
            <p className="mt-6 font-secondary text-md leading-[1.75] text-accent-700 dark:text-accent-200">
              Moshate Consulting Services is a women-owned technology and
              management consulting firm delivering innovative ICT and business
              solutions that enable organisations to perform, transform and
              grow. We partner with clients to create long-term value through
              strategic digital services, sound management practices, and deep
              industry expertise.
            </p>
            <p className="mt-5 font-secondary text-md leading-[1.75] text-accent-700 dark:text-accent-200">
              Our team combines technical excellence with practical business
              insight to design solutions tailored to each client&apos;s unique
              context, challenges, and ambitions. We are committed to delivering
              measurable outcomes that drive sustainable growth, operational
              efficiency, and competitive advantage.
            </p>
          </div>

          {/* Image — right, larger and more prominent */}
          <div
            className="w-full lg:w-[48%]"
            data-aos="fade-up-left"
            data-aos-delay="300"
          >
            <div className="group relative">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/assets/images/serious-diverse-business-colleagues-discussing-project - Partnership.jpg"
                  alt="Moshate Consulting partnership"
                  width={640}
                  height={480}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-32 w-32 rounded-lg bg-primary/10" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

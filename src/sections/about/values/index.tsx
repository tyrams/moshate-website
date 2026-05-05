import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";
import Image from "next/image";

export function ValuesSection() {
  return (
    <section className="section-padding-primary overflow-hidden bg-white dark:bg-accent-950">
      <Container>
        {/* Our Values Section */}
        <div className="flex flex-col items-center gap-x-20 gap-y-[60px] lg:flex-row-reverse xl:gap-x-[120px]">
          {/* Image — right with unique styling */}
          <div
            className="w-full lg:w-[45%]"
            data-aos="fade-up-left"
            data-aos-delay="200"
          >
            <div className="group relative">
              <div className="relative overflow-hidden rounded-tr-[60px] rounded-bl-[60px] shadow-2xl">
                <Image
                  src="/assets/images/entrepreneurs-shaking-hands-solar-panel-manufacturing-plant-after-reaching-agreement.jpg"
                  alt="Moshate Consulting team values"
                  width={600}
                  height={500}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-primary/30 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              </div>
              {/* Decorative corner accents */}
              <div className="absolute -left-4 -top-4 h-20 w-20 border-l-4 border-t-4 border-primary/30" />
              <div className="absolute -bottom-4 -right-4 h-20 w-20 border-b-4 border-r-4 border-primary/30" />
            </div>
          </div>

          {/* Text — left */}
          <div
            className="w-full lg:w-[55%]"
            data-aos="fade-up-right"
            data-aos-delay="200"
          >
            <SectionHeading subtitle="Our Foundation" title="Our Values" />
            <p className="mt-6">
              Our work is guided by a strong foundation of integrity, excellence
              and respect.
            </p>
            <p className="mt-5">
              At the heart of our culture is the principle of{" "}
              <span className="font-semibold text-primary">Ubuntu</span> — "I am
              because we are." We believe our success is intrinsically linked to
              the success of our clients and communities. This philosophy shapes
              how we collaborate, communicate, and deliver value.
            </p>
            <div className="mt-7">
              <p className="text-md font-semibold text-accent-900 dark:text-white">
                We prioritise:
              </p>
              <ul className="mt-4 space-y-3 text-accent-800 dark:text-body">
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Honesty and integrity in every engagement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Excellence and quality in our deliverables</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>Respect and partnership in our relationships</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-primary" />
                  <span>
                    High performance through skilled, accountable teams
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

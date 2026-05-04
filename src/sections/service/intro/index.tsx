import { Container } from "@/src/components/container";
import { cn } from "@/src/utils/shadcn";
import Image from "next/image";

export function ServiceIntroSection({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "section-padding-primary overflow-hidden bg-white dark:bg-accent-950",
        className,
      )}
    >
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div
            className="w-full lg:w-[56%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-left">
              <span className="mb-[.625rem] block font-secondary text-base font-bold uppercase leading-[1.5] tracking-widest text-secondary md:text-md">
                Services
              </span>
              <h2 className="max-w-2xl font-secondary text-xl font-bold leading-[1.25] text-primary dark:text-white md:text-2xl lg:text-2xl">
                Enabling Strategy. <br />
                Delivering Transformation. <br />
                Creating Lasting Value.
              </h2>
            </div>

            <div className="mt-6 space-y-5 text-left">
              <p>
                Moshate Consulting Services delivers forward-thinking ICT and
                management solutions designed to optimise operations, accelerate
                transformation, and unlock sustainable growth. Our strategic
                digital capabilities, combined with strong business management
                expertise, enable organisations to solve complex challenges,
                improve performance, and realise measurable value.
              </p>
              <p>
                Moshate Consulting Services partners with organisations to solve
                complex challenges, modernise operations, and deliver measurable
                outcomes. Our integrated approach combines strategic insight,
                digital capability, disciplined execution, and operational
                improvement to ensure initiatives move from concept to
                sustainable impact.
              </p>
              <p>
                We focus on areas where organisations most often struggle:
                strategy execution, digital transformation and adoption,
                delivery capability and operational performance.
              </p>
            </div>
          </div>

          <div
            className="w-full lg:w-[44%]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="rounded-[18px] border border-secondary/20 bg-gradient-to-br from-secondary/10 via-white to-primary/10 p-2 shadow-lg dark:border-white/10 dark:from-secondary/10 dark:via-accent-950 dark:to-primary/10">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-[12px] border border-white/60 shadow-xl dark:border-white/10">
                <Image
                  src="/assets/images/hand-with-support-gears-isolated - Operational Excellence.jpg"
                  alt="Operational Excellence - Moshate Consulting Services"
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/25 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

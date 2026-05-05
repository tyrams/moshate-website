import { Container } from "@/src/components/container";
import { SectionHeading } from "@/src/components/section-heading";

export function CapabilitiesSection() {
  return (
    <section className="section-padding-primary overflow-hidden bg-accent-100 dark:bg-accent-900/50">
      <Container>
        {/* What We Do Section - Redesigned */}
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="text-center">
            <SectionHeading subtitle="Our Capabilities" title="What We Do" />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Strategic Solutions Card */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-accent-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-accent-800 dark:bg-accent-900/30"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="h5 mb-4 text-accent-900 dark:text-white">
                Strategic Digital Solutions
              </h3>
              <p>
                Leveraging cutting-edge digital technologies to transform
                business operations and unlock new growth opportunities.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>

            {/* Management Practices Card */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-accent-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-accent-800 dark:bg-accent-900/30"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="h5 mb-4 text-accent-900 dark:text-white">
                Modern Management Practices
              </h3>
              <p>
                Implementing proven methodologies and best practices to drive
                operational excellence and sustainable performance.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>

            {/* Co-creation Card */}
            <div
              className="group relative overflow-hidden rounded-2xl border border-accent-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-accent-800 dark:bg-accent-900/30"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <h3 className="h5 mb-4 text-accent-900 dark:text-white">
                Collaborative Co-creation
              </h3>
              <p>
                Partnering with organisations to design fit-for-purpose
                solutions that address real business challenges and deliver
                measurable value.
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          </div>

          {/* Bottom text */}
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p>
              We collaborate with organisations of all sizes, from emerging
              enterprises to large institutions, generating value for all
              stakeholders through practical, innovative solutions.
            </p>
          </div>
        </div>

        {/* Sector Expertise Section - Simple Layout */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {/* Public Sector */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="h3 mb-4 font-bold text-primary">
              Public Sector Expertise
            </h3>
            <p>
              We are deeply committed to strengthening public service delivery
              and have experience across multiple government domains, including:
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Revenue Management",
                "Public Safety",
                "Education",
                "Public Finance",
                "Health",
                "Public Service Operations",
                "Parastatals",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-accent-800 dark:text-body"
                >
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Private Sector */}
          <div data-aos="fade-up" data-aos-delay="500">
            <h3 className="h3 mb-4 font-bold text-primary">
              Private Sector Experience
            </h3>
            <p>
              Our team brings cross-industry experience from the private sector,
              including:
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "Information Technology",
                "Mining",
                "Banking and Insurance",
                "Telecommunications",
                "Healthcare",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-accent-800 dark:text-body"
                >
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

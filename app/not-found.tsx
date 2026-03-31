import { Button } from "@/src/components/button";
import { Container } from "@/src/components/container";
import { CustomLink } from "@/src/components/custom-link";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100vh-(60px+72px))] items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-[3.75rem]">
      <Container>
        <div className="mx-auto max-w-[900px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Visual Element */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                <div className="relative flex items-center justify-center w-64 h-64 lg:w-80 lg:h-80">
                  <div className="text-[12rem] lg:text-[16rem] font-bold text-primary/10 leading-none">
                    404
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-primary/20 flex items-center justify-center">
                      <svg
                        className="w-16 h-16 lg:w-20 lg:h-20 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">
                  Error 404
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black mb-6">
                Page Not Found
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed text-black/70 mb-8 max-w-md mx-auto lg:mx-0">
                The page you&apos;re looking for seems to have wandered off.
                Let&apos;s get you back on track.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild>
                  <CustomLink href="/">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Back to Home
                  </CustomLink>
                </Button>
                <Button
                  asChild
                  className="bg-white text-primary border-2 border-primary hover:bg-primary/5"
                >
                  <CustomLink href="/contact">Contact Support</CustomLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

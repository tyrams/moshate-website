import { Container } from "@/src/components/container";
import { CustomLink } from "@/src/components/custom-link";
import { cn } from "@/src/utils/shadcn";
import Image from "next/image";
import React from "react";
import { Shapes } from "../v1/shapes";

interface BreadcrumbItem {
  href?: string;
  label: string;
}

export interface HeroSectionProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
}

export function HeroSection({ title, breadcrumbItems }: HeroSectionProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-[9.375rem] min-h-[450px]">
      {/* Background image — z-0 so it sits at the base of this stacking context */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/hero/banner-top.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Shapes — above the image */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shapes />
      </div>

      <Container>
        <div className="relative z-20 mx-auto max-w-[800px] text-center text-white lg:mt-[60px]">
          <div className="space-y-6 md:space-y-8 flex flex-col items-center">
            <h1 className="font-secondary text-2xl font-semibold uppercase leading-[1.1] md:text-3xl lg:text-4xl">
              {title}
            </h1>
            {breadcrumbItems && breadcrumbItems.length > 0 && (
              <Breadcrumb breadcrumbItems={breadcrumbItems} />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

const breadcrumbItemClasses = cn("h3 font-secondary flex items-center");

function Breadcrumb({
  breadcrumbItems,
}: Pick<HeroSectionProps, "breadcrumbItems">) {
  if (breadcrumbItems && breadcrumbItems.length > 0) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="inline-flex items-center gap-3 md:gap-5">
          {breadcrumbItems.map((menuItem, index) => (
            <React.Fragment key={index}>
              {menuItem.href ? (
                <li className={breadcrumbItemClasses}>
                  <CustomLink
                    href={menuItem.href}
                    className="transition-colors hover:text-primary"
                  >
                    {menuItem.label}
                  </CustomLink>
                  <span className="ml-3 md:ml-5">/</span>
                </li>
              ) : (
                <li className={breadcrumbItemClasses} aria-current="page">
                  {menuItem.label}
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
  return <></>;
}

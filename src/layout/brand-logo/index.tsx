import { CustomLink } from "@/src/components/custom-link";
import Image from "next/image";

import logoLight from "public/assets/images/brand/logo-light.png";
import logoDark from "public/assets/images/brand/logo-dark.png";
import { cn } from "@/src/utils/shadcn";

export interface BrandLogoProps {
  className?: string;
  imageClassName?: string;
}

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  const baseImageClass = "h-auto w-auto object-contain";
  const defaultSizeClass = "max-h-[54px] md:max-h-[66px]";

  return (
    <CustomLink href="/" className={cn("inline-block", className)}>
      <Image
        className={cn(
          "logo-light dark:hidden",
          baseImageClass,
          defaultSizeClass,
          imageClassName,
        )}
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
      <Image
        className={cn(
          "logo-dark hidden dark:block",
          baseImageClass,
          defaultSizeClass,
          imageClassName,
        )}
        src={logoDark.src}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
    </CustomLink>
  );
}

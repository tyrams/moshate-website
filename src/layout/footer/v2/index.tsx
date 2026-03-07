import { footerSectionData } from "@/data/layout/footer/v2";
import { LinkProps, SectionProps } from "@/src/common-types";
import { Container } from "@/src/components/container";
import { CustomLink } from "@/src/components/custom-link";
import { cn } from "@/src/utils/shadcn";
import { BrandLogo } from "src/layout/brand-logo";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { ClassValue } from "clsx";

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

export interface FooterSectionProps {
  socialLinks: SocialLinkProps[];
  quickLinks: {
    title: string;
    links: LinkProps[];
  };
  services: {
    title: string;
    links: LinkProps[];
  };
  contact: {
    title: string;
    email: string;
  };
  footerBottom: {
    copyrightText: string;
  };
}

const socialIconClasses = cn(
  "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-accent-800",
);

const titleClasses = cn(
  "text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4",
);

const linkClasses = cn(
  "text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300",
);

interface Props extends SectionProps {
  footerTopClassName?: ClassValue;
}

export function Footer({ className, footerTopClassName }: Props) {
  const { socialLinks, quickLinks, services, contact, footerBottom } =
    footerSectionData;

  return (
    <footer
      className={cn(
        "border-t border-gray-200 bg-white text-gray-600 dark:border-accent-800 dark:bg-accent-900 dark:text-gray-300",
        className,
      )}
    >
      <Container>
        <div
          className={cn(
            "grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-4",
            footerTopClassName,
          )}
        >
          <div className="space-y-4">
            <BrandLogo />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Streamline. Simplify. Sustain.
            </p>
          </div>

          <div>
            <h3 className={titleClasses}>{quickLinks.title}</h3>
            {quickLinks.links && quickLinks.links.length > 0 && (
              <nav aria-label="footer links navigation">
                <ul className="space-y-2">
                  {quickLinks.links.map((link) => (
                    <li key={link.label}>
                      <CustomLink
                        href={link.href}
                        openNewTab={link.openNewTab}
                        className={linkClasses}
                      >
                        {link.label}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div>
            <h3 className={titleClasses}>{services.title}</h3>
            {services.links && services.links.length > 0 && (
              <nav aria-label="footer services navigation">
                <ul className="space-y-2">
                  {services.links.map((link) => (
                    <li key={link.label}>
                      <CustomLink
                        href={link.href}
                        openNewTab={link.openNewTab}
                        className={linkClasses}
                      >
                        {link.label}
                      </CustomLink>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>

          <div>
            <h3 className={titleClasses}>{contact.title}</h3>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <FaEnvelope className="text-primary" />
              <span>{contact.email}</span>
            </a>
            <a
              href={`https://www.linkedin.com/company/moshate/`}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
            >
              <FaLinkedin className="text-primary size-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 text-center text-xs text-gray-500 dark:border-accent-800 dark:text-gray-500">
          <p>{footerBottom.copyrightText}</p>
        </div>
      </Container>
    </footer>
  );
}

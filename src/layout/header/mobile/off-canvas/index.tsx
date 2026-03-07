import { ScrollArea } from "@/src/components/ui/scroll-area";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/src/components/ui/sheet";
import { cn } from "@/src/utils/shadcn";
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";
import { X } from "lucide-react";
import { HeaderProps } from "../../desktop/v1";
import { Navigation } from "../navigation";
import { MdMenu } from "react-icons/md";
import { BrandLogo } from "@/src/layout/brand-logo";

const mainTitleClasses = cn(
  "relative mb-30px pb-[0px] font-secondary text-[1.25rem] font-bold uppercase text-accent-700 dark:text-white",
  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-[32px] after:bg-accent-700 dark:after:bg-white",
);

const socialIconClasses = cn(
  "text-base/[1] transition-all duration-350 hover:-translate-y-1 w-[36px] h-[36px] rounded-full grid place-items-center bg-accent-700 hover:bg-primary text-white",
);

const addressIconParentClasses = cn(
  " text-primary flex-none leading-none self-start relative top-2",
);
const addressItemClasses = cn("flex gap-5");
const textColor = cn(
  "transition-colors text-accent-700 dark:text-white duration-300 hover:text-primary dark:hover:text-primary-light",
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

interface IOffCanvas {
  contactInfo: {
    location: string;
    phoneNumber: string;
    mail: string;
  };
  socialLinks: SocialLinkProps[];
}

const offCanvasProps: IOffCanvas = {
  contactInfo: {
    location: " ",
    phoneNumber: "",
    mail: "info@moshateconsulting.co.za",
  },
  socialLinks: [],
};

export function OffCanvas({ menuItems }: Pick<HeaderProps, "menuItems">) {
  const { contactInfo, socialLinks } = offCanvasProps;
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Mobile hamburger menu"
        aria-controls="mobile-hamburger-menu"
        className={cn(
          "group text-[2rem]/[1] text-primary transition-colors duration-300 hover:text-primary-light",
        )}
      >
        <MdMenu className="icon-menu" id="mobile-hamburger-menu" />
      </SheetTrigger>
      <SheetContent
        side={"left"}
        className="z-444 !max-w-[300px] border-none bg-white p-0 dark:bg-black"
      >
        <ScrollArea
          viewportClassName={cn("h-[100vh]")}
          scrollBarClassName="w-0"
        >
          <div className="grid gap-8">
            {/* Logo area  */}
            <div className="sticky top-0 z-10 flex items-center justify-between bg-white/90 px-5 py-3 shadow-sm backdrop-blur-sm dark:bg-black/90">
              <BrandLogo />
              <SheetClose className="data-[state=open]:bg-secondary rounded-sm text-accent-900 ring-offset-0 transition-colors hover:text-primary focus:outline-none  focus:ring-0 focus:ring-offset-0 disabled:pointer-events-none  dark:text-white dark:hover:text-primary">
                <X className="h-8 w-8" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </div>

            <Navigation menuItems={menuItems} />

            {/* Contact info  */}
            <div className="px-5">
              <h3 className={mainTitleClasses}>CONTACT INFO</h3>
              <ul aria-label="addresses" className="grid gap-2">
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaEnvelope />
                  </span>
                  <a href={`mailto:${contactInfo.mail}`} className={textColor}>
                    {contactInfo.mail}
                  </a>
                </li>
                <li className={addressItemClasses}>
                  <span className={addressIconParentClasses}>
                    <FaLinkedinIn />
                  </span>
                  <a
                    href="https://www.linkedin.com/in/moshate-consulting-68155118b/"
                    className={textColor}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

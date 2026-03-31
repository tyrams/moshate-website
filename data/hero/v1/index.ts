import { HeroProps } from "@/src/sections/hero/v1";

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: "/assets/images/hero/hero-1.jpg",
        alt: "hero 1",
      },
      title: "Innovative Business Management and Digital Solutions",
      button: {
        label: "Discover More",
        href: "/about",
      },
    },
    {
      image: {
        src: "/assets/images/black-businesswoman-shaking-hands-with-male-partner.jpg",
        alt: "hero 2",
      },
      title: "Your Partner in Sustainable Growth",
      button: {
        label: "Our Services",
        href: "/services",
      },
    },
    {
      image: {
        src: "/assets/images/three-serious-partners-watching-presentation-digital-tablet.jpg",
        alt: "hero 3",
      },
      title: "Streamline. Simplify. Sustain.",
      button: {
        label: "Get In Touch",
        href: "/contact",
      },
    },
  ],
};

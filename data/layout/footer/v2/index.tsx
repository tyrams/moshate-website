import { FooterSectionProps } from "@/src/layout/footer/v2";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export const footerSectionData: FooterSectionProps = {
  socialLinks: [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/moshate-consulting-68155118b/",
      label: "LinkedIn",
    },
  ],
  quickLinks: {
    title: "Quick Links",
    links: [
      {
        label: "About Us",
        href: "/about",
        openNewTab: false,
      },
      {
        label: "Services",
        href: "/services",
        openNewTab: false,
      },
      {
        label: "Contact",
        href: "/contact",
        openNewTab: false,
      },
    ],
  },
  services: {
    title: "Services",
    links: [
      {
        label: "Strategy Design",
        href: "/services/strategy-design",
        openNewTab: false,
      },
      {
        label: "Digital Transformation",
        href: "/services/digital-transformation",
        openNewTab: false,
      },
      {
        label: "Project Management & Delivery",
        href: "/services/project-management",
        openNewTab: false,
      },
    ],
  },
  contact: {
    title: "Contact",
    email: "info@moshateconsulting.co.za",
  },
  footerBottom: {
    copyrightText: `© Moshate Consulting (Pty) Ltd - ${currentYear} | All Rights Reserved`,
  },
};

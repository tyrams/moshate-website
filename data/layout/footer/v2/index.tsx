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
        label: "Strategy & Operating Model Design",
        href: "/services/strategy-operating-model-design",
        openNewTab: false,
      },
      {
        label: "Digital Transformation & Enterprise Enablement",
        href: "/services/digital-transformation-enterprise-enablement",
        openNewTab: false,
      },
      {
        label: "Project, Programme & PMO Services",
        href: "/services/project-programme-pmo-services",
        openNewTab: false,
      },
    ],
  },
  contact: {
    title: "Contact",
    email: "admin@moshateconsulting.co.za",
  },
  footerBottom: {
    copyrightText: `© Moshate Consulting (Pty) Ltd - ${currentYear} | All Rights Reserved`,
  },
};

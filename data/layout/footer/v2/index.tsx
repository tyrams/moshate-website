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
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/",
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
        href: "/services",
        openNewTab: false,
      },
      {
        label: "Digital Transformation",
        href: "/services",
        openNewTab: false,
      },
      {
        label: "Project Management & Delivery",
        href: "/services",
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

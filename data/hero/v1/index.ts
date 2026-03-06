import { HeroProps } from '@/src/sections/hero/v1';

export const heroData: HeroProps = {
  items: [
    {
      image: {
        src: '/assets/images/hero/hero-1.jpg',
        alt: 'hero 1',
      },
      title: 'Innovative Business Management and Digital Solutions',
      button: {
        label: 'Discover More',
        href: '/about',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-11.jpeg',
        alt: 'hero 2',
      },
      title: 'Your Partner in Sustainable Growth',
      button: {
        label: 'Our Services',
        href: '/services',
      },
    },
    {
      image: {
        src: '/assets/images/hero/hero-12.jpeg',
        alt: 'hero 3',
      },
      title: 'Streamline. Simplify. Sustain.',
      button: {
        label: 'Get In Touch',
        href: '/contact',
      },
    },
  ],
};

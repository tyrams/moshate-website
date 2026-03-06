import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import { BlogListSection } from '@/src/sections/blog-list';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Moshate Consulting | Blog',
  description: 'Insights and articles from Moshate Consulting executives on ICT, management consulting and digital transformation.',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Blog Classic"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Blog Classic',
          },
        ]}
      />
      <BlogListSection />
      <Footer />
    </>
  );
}

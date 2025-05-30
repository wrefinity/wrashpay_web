import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import TestimonialSection from '@/components/TestimonialSection';
import BusinessSection from '@/components/BusinessSection';
import DownloadSection from '@/components/DownloadSection';
import BlogSection from '@/components/BlogSection';
import PartnersSection from '@/components/PartnersSection';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <PartnersSection />
      <TestimonialSection />
      <BusinessSection />
      <DownloadSection />
      <BlogSection />
    </div>
  );
}
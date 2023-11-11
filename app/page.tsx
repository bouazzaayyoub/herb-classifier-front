import CTA from '@/components/CTA';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <GradientWrapper></GradientWrapper> */}
      <Testimonials />
      <CTA />
    </>
  );
}

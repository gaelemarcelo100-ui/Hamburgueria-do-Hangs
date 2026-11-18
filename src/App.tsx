/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Suspense, lazy } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const AboutSection = lazy(() =>
  import('./components/AboutSection').then((m) => ({ default: m.AboutSection }))
);
const ServicesSection = lazy(() =>
  import('./components/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);
const PortfolioSection = lazy(() =>
  import('./components/PortfolioSection').then((m) => ({ default: m.PortfolioSection }))
);
const TestimonialsSection = lazy(() =>
  import('./components/TestimonialsSection').then((m) => ({ default: m.TestimonialsSection }))
);
const ContactSection = lazy(() =>
  import('./components/ContactSection').then((m) => ({ default: m.ContactSection }))
);
const Footer = lazy(() =>
  import('./components/Footer').then((m) => ({ default: m.Footer }))
);

function SectionPlaceholder() {
  return <div className="min-h-[280px] bg-[#08080A]" aria-hidden="true" />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#08080A] text-[#F5F2EB]">
        <Navbar />
        <main>
          <HeroSection />
          <div className="section-defer">
            <Suspense fallback={<SectionPlaceholder />}>
              <AboutSection />
            </Suspense>
          </div>
          <div className="section-defer">
            <Suspense fallback={<SectionPlaceholder />}>
              <ServicesSection />
            </Suspense>
          </div>
          <div className="section-defer">
            <Suspense fallback={<SectionPlaceholder />}>
              <PortfolioSection />
            </Suspense>
          </div>
          <div className="section-defer">
            <Suspense fallback={<SectionPlaceholder />}>
              <TestimonialsSection />
            </Suspense>
          </div>
          <div className="section-defer">
            <Suspense fallback={<SectionPlaceholder />}>
              <ContactSection />
            </Suspense>
          </div>
        </main>
        <div className="section-defer">
          <Suspense fallback={<div className="min-h-[160px] bg-[#070709]" aria-hidden="true" />}>
            <Footer />
          </Suspense>
        </div>
        <FloatingWhatsApp />
      </div>
    </MotionConfig>
  );
}

import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Methodologies from './components/Methodologies';
import CaseStudies from './components/CaseStudies';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const sections = [
  { id: 'services', label: 'Послуги' },
  { id: 'methodologies', label: 'Методології' },
  { id: 'cases', label: 'Кейс-стаді' },
  { id: 'certifications', label: 'Сертифікати' },
  { id: 'testimonials', label: 'Відгуки' },
  { id: 'contact', label: 'Контакти' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('services');
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <div className="min-h-screen bg-primary-900 bg-[radial-gradient(circle_at_top,_rgba(177,18,38,0.12),_transparent_50%)]">
      <Header activeSection={activeSection} sections={sections} />
      <main className="pt-4">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern bg-[length:120px_120px] opacity-40" />
        <Hero />
        <Services />
        <Methodologies />
        <CaseStudies />
        <Certifications />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

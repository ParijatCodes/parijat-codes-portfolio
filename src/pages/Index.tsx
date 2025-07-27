
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();
  
  // Page load animation sequence
  useEffect(() => {
    // Add a staggered entry animation to main sections
    const sections = document.querySelectorAll('main > section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('loaded');
      }, 200 + (index * 100));
    });
    
    // Create parallax effect on scroll
    const handleParallax = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = 0.15;
        const yPos = -(scrolled * speed);
        // @ts-ignore - ignore the unknown element background position warning
        element.style.backgroundPosition = `50% ${yPos}px`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

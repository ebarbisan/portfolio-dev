import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <About />
      <Technologies />
      <Projects />
      <Contact />

      <footer className="py-12 bg-secondary-bg border-t border-border-subtle text-center px-6">
        <div className="container mx-auto">
          <div className="text-xl font-bold text-foreground mb-4">
            Estevan Barbisan
          </div>
          <p className="text-text-secondary text-sm mb-6">
            &copy; {new Date().getFullYear()} — Construindo o futuro com código e lógica.
          </p>
          <div className="flex justify-center gap-6 text-text-secondary">
            <a href="https://github.com/ebarbisan" target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors text-xs">GitHub</a>
            <a href="https://www.linkedin.com/in/estevanbarbisan-a96881140" target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors text-xs">LinkedIn</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

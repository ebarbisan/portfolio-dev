"use client";

import React, { useState } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre mim', href: '#sobre' },
    { name: 'Tecnologias', href: '#tecnologias' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="fixed w-full bg-secondary-bg/80 backdrop-blur-md z-50 border-b border-border-subtle">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-2xl font-bold text-accent-green flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-foreground">{siteConfig.name}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-text-secondary">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent-cyan transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-surface border border-border-subtle hover:text-accent-green hover:border-accent-green transition-all duration-300 flex items-center justify-center w-9 h-9"
            title="GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-text-secondary">
          <button
            className="p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary-bg border-b border-border-subtle animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 space-y-4 font-medium text-text-secondary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-accent-cyan transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent-green py-2 hover:text-accent-cyan transition-colors"
            >
              <FaGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

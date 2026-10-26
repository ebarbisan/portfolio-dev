"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { HiArrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 px-6 flex items-center overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-green/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-surface border border-border-subtle text-accent-green text-sm font-mono mb-6">
            {siteConfig.role}
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Construindo soluções com <br />
            <span className="text-gradient">código, lógica e propósito.</span>
          </h1>

          <div className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {siteConfig.name}
          </div>

          <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl">
            {siteConfig.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#sobre"
              className="flex items-center justify-center gap-2 bg-accent-green text-background px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-accent-green/20 group"
            >
              Conheça minha trajetória
              <HiArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projetos"
              className="flex items-center justify-center gap-2 bg-surface text-foreground border border-border-subtle px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-bg transition-all"
            >
              Explorar projetos
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-text-secondary">
            <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-green transition-colors">
              <FaGithub size={24} />
            </a>
            <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan transition-colors">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          {/* Tech Visual Composition */}
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Code Block Simulation */}
            <div className="absolute top-10 left-10 w-64 h-40 glass-card rounded-lg p-4 font-mono text-xs shadow-2xl z-20 border-accent-green/30">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <div className="text-accent-green">public class <span className="text-foreground">Developer</span> {'{'}</div>
              <div className="pl-4 text-text-secondary">String status = <span className="text-accent-cyan">"Learning"</span>;</div>
              <div className="pl-4 text-text-secondary">void evolve() {'{'}</div>
              <div className="pl-8 text-text-secondary">study(JAVA_SPRING);</div>
              <div className="pl-8 text-text-secondary">build(PROJECTS);</div>
              <div className="pl-4 text-text-secondary">{'}'}</div>
              <div className="text-accent-green">{'}'}</div>
            </div>

            {/* Geometric shapes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-border-subtle rounded-full animate-[spin_20s_linear_infinite] opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-accent-cyan/20 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-30" />

            {/* Connectivity Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="var(--accent-green)" strokeWidth="1" />
              <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="var(--accent-cyan)" strokeWidth="1" />
              <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="var(--accent-green)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import {
  RiExternalLinkLine,
  RiLayoutLine,
  RiServerLine,
  RiShieldCheckLine
} from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';

export default function Projects() {
  return (
    <section id="projetos" className="relative py-24 px-6 bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Projetos que transformam <span className="text-gradient">aprendizado em prática</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-green to-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {siteConfig.projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-1 rounded-3xl bg-gradient-to-br from-border-subtle to-transparent hover:from-accent-green/50 hover:to-accent-cyan/50 transition-all duration-500"
            >
              <div className="bg-surface rounded-[22px] p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-secondary-bg border border-border-subtle text-accent-green">
                    {project.tech.includes('Java') ? <RiServerLine size={24} /> : <RiLayoutLine size={24} />}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-secondary-bg border border-border-subtle text-text-secondary hover:text-accent-green transition-colors"
                      title="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-secondary-bg border border-border-subtle text-text-secondary hover:text-accent-cyan transition-colors"
                        title="Demo"
                      >
                        <RiExternalLinkLine size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-green transition-colors">
                  {project.title}
                </h3>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <RiShieldCheckLine size={16} className="text-accent-green" />
                    Desafios Técnicos
                  </h4>
                  <p className="text-sm text-text-secondary italic pl-6 border-l-2 border-accent-green/30">
                    {project.challenges}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-full bg-secondary-bg border border-border-subtle text-xs font-medium text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-secondary-bg/50 border border-border-subtle">
                      <span className="block text-[10px] uppercase text-text-secondary mb-1">Objetivo</span>
                      <span className="text-xs text-foreground font-medium">{project.goal}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-secondary-bg/50 border border-border-subtle">
                      <span className="block text-[10px] uppercase text-text-secondary mb-1">Funcionalidades</span>
                      <span className="text-xs text-foreground font-medium">{project.features.join(', ')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="https://github.com/ebarbisan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-border-subtle px-8 py-4 rounded-2xl font-bold text-foreground hover:border-accent-green transition-all hover:shadow-[0_0_20px_rgba(57,245,165,0.1)]"
          >
            Ver todos os projetos no GitHub
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

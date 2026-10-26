"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import {
  RiCodeSlashesLine,
  RiDatabase2Line,
  RiGlobalLine,
  RiSettings4Line
} from 'react-icons/ri';

export default function Technologies() {
  const categories = [
    {
      title: "Back-end",
      icon: <RiCodeSlashesLine className="text-accent-green" />,
      items: siteConfig.technologies.backend,
      color: "border-accent-green/30"
    },
    {
      title: "Bancos de Dados",
      icon: <RiDatabase2Line className="text-accent-cyan" />,
      items: siteConfig.technologies.databases,
      color: "border-accent-cyan/30"
    },
    {
      title: "Desenvolvimento Web",
      icon: <RiGlobalLine className="text-accent-green" />,
      items: siteConfig.technologies.web,
      color: "border-accent-green/30"
    },
    {
      title: "Ferramentas & Infra",
      icon: <RiSettings4Line className="text-accent-cyan" />,
      items: siteConfig.technologies.tools,
      color: "border-accent-cyan/30"
    },
  ];

  return (
    <section id="tecnologias" className="relative py-24 px-6 bg-secondary-bg/30">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-border-subtle rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ferramentas que fazem parte da minha <span className="text-gradient">evolução</span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-green to-accent-cyan mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-6 rounded-2xl bg-surface border ${cat.color} hover:border-accent-green/60 transition-all duration-300 group`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary-bg group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{cat.title}</h3>
              </div>

              <ul className="space-y-4">
                {cat.items.map((tech) => (
                  <li key={tech.name} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                      <span className="font-semibold text-foreground">{tech.name}</span>
                    </div>
                    <p className="text-text-secondary text-xs pl-3.5 leading-relaxed">
                      {tech.description}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

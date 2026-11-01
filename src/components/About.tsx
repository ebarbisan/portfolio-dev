"use client";

import React from 'react';
import { motion } from 'framer-motion';

import { siteConfig } from '@/data/siteConfig';
import {
  RiDoubleQuotesL,
  RiArrowRightUpLine,
  RiCodeSSlashLine,
  RiTerminalBoxLine,
  RiCpuLine
} from 'react-icons/ri';

export default function About() {
  return (
    <section id="sobre" className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent-green/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {siteConfig.about.title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-green to-accent-cyan rounded-full mb-8" />
            </div>

            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
              <p>
                {siteConfig.about.introduction}
              </p>
              <p>
                {siteConfig.about.philosophy}
              </p>
            </div>

            {/* Highlight Card */}
            <div className="relative p-6 rounded-2xl bg-surface border border-border-subtle group hover:border-accent-green/50 transition-colors duration-300">
              <RiDoubleQuotesL className="absolute -top-4 -left-2 text-accent-green/30 w-12 h-12" />
              <p className="text-xl font-medium text-foreground italic relative z-10">
                "{siteConfig.about.highlight}"
              </p>
            </div>
          </motion.div>

          {/* Right Side: Visual Editorial Components */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <AboutCard
                icon={<RiTerminalBoxLine className="text-accent-green" />}
                title="Foco Técnico"
                description="Especialização em back-end com Java e ecossistema Spring."
              />
              <AboutCard
                icon={<RiCpuLine className="text-accent-cyan" />}
                title="Mentalidade"
                description="Busca constante por entender a arquitetura e o 'porquê' das soluções."
              />
              <AboutCard
                icon={<RiCodeSSlashLine className="text-accent-green" />}
                title="Prática"
                description="Transformação de conceitos teóricos em projetos funcionais."
              />
              <AboutCard
                icon={<RiArrowRightUpLine className="text-accent-cyan" />}
                title="Objetivo"
                description="Contribuir em projetos reais e evoluir como engenheiro de software."
              />
            </div>

            {/* Decorative Tech Element */}
            <div className="p-6 rounded-2xl bg-secondary-bg border border-border-subtle font-mono text-xs text-text-secondary space-y-2 opacity-80">
              <div className="flex items-center gap-2">
                <span className="text-accent-green">const</span> profile = {'{'}
              </div>
              <div className="pl-4">
                passion: <span className="text-accent-cyan">'Back-end Development'</span>,
              </div>
              <div className="pl-4">
                learningRate: <span className="text-accent-cyan">'Exponential'</span>,
                <br />
                currentFocus: <span className="text-accent-cyan">'API Architecture'</span>,
              </div>
              <div className="flex items-center gap-2">
                {'}'};
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl bg-surface border border-border-subtle hover:border-accent-green/30 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-secondary-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

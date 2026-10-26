"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import {
  RiMailLine,
  RiSendPlaneFill
} from 'react-icons/ri';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contato" className="relative py-24 px-6 bg-secondary-bg/50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-10">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-green rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Vamos construir algo <span className="text-gradient">interessante?</span>
          </motion.h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Estou aberto a conhecer novas oportunidades, trocar experiências e participar de projetos nos quais eu possa contribuir, aprender e evoluir como desenvolvedor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <motion.a
            href={siteConfig.links.email}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-8 rounded-2xl bg-surface border border-border-subtle hover:border-accent-green transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary-bg flex items-center justify-center mx-auto mb-4 text-accent-green group-hover:scale-110 transition-transform">
              <RiMailLine size={24} />
            </div>
            <h3 className="text-foreground font-bold mb-2">E-mail</h3>
            <p className="text-text-secondary text-sm break-all">
              {siteConfig.links.email.replace('mailto:', '')}
            </p>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-8 rounded-2xl bg-surface border border-border-subtle hover:border-accent-cyan transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary-bg flex items-center justify-center mx-auto mb-4 text-accent-cyan group-hover:scale-110 transition-transform">
              <FaLinkedinIn size={24} />
            </div>
            <h3 className="text-foreground font-bold mb-2">LinkedIn</h3>
            <p className="text-text-secondary text-sm">Conecte-se comigo</p>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group p-8 rounded-2xl bg-surface border border-border-subtle hover:border-accent-green transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-secondary-bg flex items-center justify-center mx-auto mb-4 text-accent-green group-hover:scale-110 transition-transform">
              <FaGithub size={24} />
            </div>
            <h3 className="text-foreground font-bold mb-2">GitHub</h3>
            <p className="text-text-secondary text-sm">Veja meus códigos</p>
          </motion.a>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors text-sm"
          >
            Voltar ao topo
            <RiSendPlaneFill size={14} className="-rotate-45" />
          </button>
        </div>
      </div>
    </section>
  );
}

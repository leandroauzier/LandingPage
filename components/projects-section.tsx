"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import SectionTitle from "./section-title";

export default function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle
            tag="Portfólio"
            title="Projetos que inspiram"
            subtitle="Alguns trabalhos que demonstram nosso cuidado com o detalhe e nossa capacidade de criar experiências digitais marcantes."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group relative rounded-2xl bg-slate-900 border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-950/70 border border-white/10 text-slate-300 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-slate-800 text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1">
                  Ver mais detalhes →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5596981114744"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-violet-500/30 text-violet-300 font-semibold text-sm hover:bg-violet-500/10 hover:border-violet-500/50 transition-all duration-200"
          >
            Quero um projeto assim →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

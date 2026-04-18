"use client";

import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Award } from "lucide-react";
import SectionTitle from "./section-title";

const pillars = [
  {
    icon: Target,
    title: "Estratégia visual",
    description: "Design com propósito, alinhado aos objetivos do seu negócio.",
  },
  {
    icon: Eye,
    title: "Comunicação clara",
    description: "Mensagens que convertem visitantes em clientes reais.",
  },
  {
    icon: Sparkles,
    title: "Design com foco em conversão",
    description: "Cada elemento pensado para gerar resultado mensurável.",
  },
  {
    icon: Award,
    title: "Experiência premium",
    description: "Padrão de qualidade visual que posiciona sua marca acima da concorrência.",
  },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <SectionTitle
              tag="Sobre a Lumina"
              title="Design que comunica, converte e posiciona"
              subtitle="A Lumina Creative Studio nasceu para unir estratégia, design e presença digital em projetos que realmente comunicam valor."
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-slate-400 leading-relaxed"
            >
              Trabalhamos com foco em estética, clareza e conversão, criando experiências
              digitais que fortalecem a imagem da marca e aproximam empresas de seus
              clientes. Cada projeto é uma oportunidade de contar uma história visual única.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex gap-8"
            >
              {[
                { value: "4+", label: "Anos de experiência" },
                { value: "50+", label: "Projetos entregues" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-violet-500/50 pl-4">
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="text-sm text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-violet-500/30 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-all">
                  <pillar.icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

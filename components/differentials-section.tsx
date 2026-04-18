"use client";

import { motion } from "framer-motion";
import { Sparkles, Smartphone, Users, Globe, Code2, Star } from "lucide-react";
import SectionTitle from "./section-title";

const differentials = [
  {
    icon: Sparkles,
    title: "Visual sofisticado e atual",
    description: "Design moderno que transmite qualidade e posiciona sua marca acima da concorrência.",
  },
  {
    icon: Smartphone,
    title: "100% responsivo",
    description: "Projeto adaptado para todos os dispositivos: desktop, tablet e mobile.",
  },
  {
    icon: Users,
    title: "Foco em experiência do usuário",
    description: "Interfaces intuitivas, claras e pensadas para facilitar a jornada do visitante.",
  },
  {
    icon: Globe,
    title: "Pronto para hospedagem",
    description: "Estrutura otimizada para publicar facilmente em Vercel, Netlify ou hosting próprio.",
  },
  {
    icon: Code2,
    title: "Código organizado",
    description: "Desenvolvimento limpo, escalável e seguindo as melhores práticas do mercado.",
  },
  {
    icon: Star,
    title: "Alto padrão visual",
    description: "Cada detalhe cuidado para garantir uma entrega que supera expectativas.",
  },
];

export default function DifferentialsSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-900/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-900/10 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle
            tag="Nossos Diferenciais"
            title="Por que escolher a Lumina?"
            subtitle="Mais do que entregamos um site — entregamos uma experiência que representa a identidade da sua empresa."
            center
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex gap-4 p-6 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-violet-500/20 hover:bg-slate-900/70 transition-all duration-300"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/10 border border-violet-500/20 flex items-center justify-center group-hover:from-violet-500/30 group-hover:border-violet-500/40 transition-all">
                <item.icon className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

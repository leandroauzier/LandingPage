"use client";

import { motion } from "framer-motion";
import { Layout, Palette, Monitor, TrendingUp } from "lucide-react";
import { services } from "@/data/services";
import SectionTitle from "./section-title";

const iconMap: Record<string, React.ElementType> = {
  Layout,
  Palette,
  Monitor,
  TrendingUp,
};

const gradients = [
  "from-violet-500 to-indigo-500",
  "from-pink-500 to-rose-500",
  "from-blue-500 to-cyan-500",
  "from-amber-500 to-orange-500",
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle
            tag="O que fazemos"
            title="Serviços que elevam sua marca"
            subtitle="Soluções criativas e estratégicas para empresas que querem se destacar no digital com qualidade e elegância."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${gradients[i]}`}
                />

                <div
                  className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${gradients[i]} shadow-lg`}
                >
                  {Icon && <Icon className="w-6 h-6 text-white" />}
                </div>

                <h3 className="text-base font-bold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <a
                    href="https://wa.me/5596981114744"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                  >
                    Saiba mais →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

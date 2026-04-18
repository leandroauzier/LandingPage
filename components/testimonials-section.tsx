"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionTitle from "./section-title";

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionTitle
            tag="Depoimentos"
            title="O que nossos clientes dizem"
            subtitle="Resultados reais de quem confiou no nosso trabalho para elevar a presença digital da sua empresa."
            center
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-violet-500/20 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-violet-500/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star
                    key={si}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-300 leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

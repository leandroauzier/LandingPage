"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-slate-900/50">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-900/20 via-pink-900/20 to-rose-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-300 border border-violet-500/30">
            Vamos trabalhar juntos
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Sua empresa também pode ter uma{" "}
            <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              presença digital marcante.
            </span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Vamos transformar sua ideia em uma landing page moderna, estratégica e pronta
            para impressionar. Entre em contato agora mesmo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5596981114744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold text-sm hover:from-green-400 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              Falar no WhatsApp
            </a>
            <a
              href="mailto:leandroauzier02@gmail.com"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-pink-500 transition-all duration-200 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Enviar E-mail
            </a>
          </div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600"
          >
            {[
              "Resposta em até 24h",
              "Orçamento sem compromisso",
              "Projeto sob medida",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <ArrowRight className="w-3 h-3 text-violet-500" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

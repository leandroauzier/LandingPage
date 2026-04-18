"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-300 border border-violet-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                Agência Criativa & Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Transformamos{" "}
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                ideias
              </span>{" "}
              em experiências digitais{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                memoráveis
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg"
            >
              Criamos landing pages, identidades visuais e experiências digitais
              modernas para empresas que querem se destacar com{" "}
              <span className="text-slate-200 font-medium">elegância e resultado.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5596981114744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-pink-500 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => scrollTo("#projetos")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                <Play className="w-4 h-4 text-violet-400" />
                Ver Projetos
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex gap-8"
            >
              {[
                { value: "50+", label: "Projetos entregues" },
                { value: "98%", label: "Clientes satisfeitos" },
                { value: "5★", label: "Avaliação média" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main card mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-3xl blur-2xl transform scale-105" />
              <div className="relative bg-slate-900/80 border border-white/10 rounded-3xl p-6 backdrop-blur-sm overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 ml-2 bg-slate-800/80 rounded-md px-3 py-1 text-xs text-slate-500">
                    luminacreative.com
                  </div>
                </div>

                {/* Mockup content */}
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-gradient-to-r from-violet-500/30 to-transparent rounded-full" />
                  <div className="h-3 w-full bg-slate-800/60 rounded-full" />
                  <div className="h-3 w-5/6 bg-slate-800/60 rounded-full" />
                  <div className="h-3 w-2/3 bg-slate-800/60 rounded-full" />
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      "from-violet-500 to-indigo-500",
                      "from-pink-500 to-rose-500",
                      "from-blue-500 to-cyan-500",
                    ].map((gradient, i) => (
                      <div
                        key={i}
                        className={`h-20 rounded-xl bg-gradient-to-br ${gradient} opacity-70`}
                      />
                    ))}
                  </div>
                  <div className="mt-3 flex gap-2">
                    <div className="h-8 w-28 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 opacity-80" />
                    <div className="h-8 w-24 rounded-full border border-white/10 opacity-60" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Projeto entregue</div>
                  <div className="text-xs text-slate-500">Aurora Tech</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-violet-500", "bg-pink-500", "bg-blue-500"].map((c, i) => (
                    <div key={i} className={`w-6 h-6 rounded-full ${c} border border-slate-900`} />
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">+50 clientes</div>
                  <div className="text-xs text-slate-500">satisfeitos</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}

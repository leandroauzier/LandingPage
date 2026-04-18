"use client";

import { motion } from "framer-motion";
import { clients } from "@/data/clients";

export default function ClientsSection() {
  return (
    <section className="py-14 bg-slate-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-widest uppercase text-slate-600 mb-8"
        >
          Empresas que confiam no nosso trabalho
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {clients.map((client, i) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <span className="text-slate-600 hover:text-slate-400 transition-colors duration-300 text-lg font-bold tracking-tight select-none cursor-default">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

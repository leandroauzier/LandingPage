"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  tag,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center" : ""}
    >
      {tag && (
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase rounded-full bg-gradient-to-r from-violet-500/20 to-pink-500/20 text-violet-300 border border-violet-500/30">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-white" : "text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-slate-400"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

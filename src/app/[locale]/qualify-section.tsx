"use client";
import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";
import { ArrowRight } from "lucide-react";

export default function QualifySection() {
  const t = useTranslations("QualifySection");

  const signals = [
    t("signal1"),
    t("signal2"),
    t("signal3"),
    t("signal4"),
    t("signal5"),
    t("signal6"),
  ];

  return (
    <section className="relative w-full py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      {/* Subtle radial background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-500/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 mb-5">
            <span className="text-xs font-semibold text-brand-300 uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-base text-[#94a3b8] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Signals grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {signals.map((signal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-white/6 bg-[#0d0d1a]/60 hover:border-brand-500/20 hover:bg-brand-500/3 transition-all duration-300"
            >
              {/* Number badge */}
              <div className="mt-0.5 w-6 h-6 rounded-full border border-brand-500/30 bg-brand-500/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[11px] font-bold text-brand-400">{i + 1}</span>
              </div>
              <p className="text-sm text-[#94a3b8] leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {signal}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-linear-to-r from-brand-500 to-brand-800 shadow-lg shadow-brand-500/15 hover:shadow-brand-500/35 hover:scale-105 transition-all duration-300"
          >
            {t("cta")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

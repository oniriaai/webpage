"use client";

import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { BookOpen, ArrowRight, Clock, Cpu, FileText, Users } from "lucide-react";
import { Link } from "../../../i18n/navigation";

export default function Education() {
  const t = useTranslations("Education");

  const features = [
    { icon: <Cpu className="w-4 h-4" />, text: t("comingSoon.feature1") },
    { icon: <Users className="w-4 h-4" />, text: t("comingSoon.feature2") },
    { icon: <FileText className="w-4 h-4" />, text: t("comingSoon.feature3") },
    { icon: <BookOpen className="w-4 h-4" />, text: t("comingSoon.feature4") },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-brand-500/30 selection:text-brand-200">
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-500/8 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/8 mb-8">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              <span className="text-xs font-medium text-brand-300 uppercase tracking-wider">
                {t("comingSoon.badge")}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
              {t("comingSoon.title")}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed mb-10 max-w-2xl mx-auto">
              {t("comingSoon.description")}
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-3 mb-12 text-left max-w-xl mx-auto">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-[#12121f]/40"
                >
                  <span className="mt-0.5 text-brand-400 flex-shrink-0">{f.icon}</span>
                  <span className="text-sm text-[#94a3b8] leading-snug">{f.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-linear-to-r from-brand-500 to-brand-800 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
            >
              {t("comingSoon.cta")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
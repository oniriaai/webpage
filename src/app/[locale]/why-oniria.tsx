"use client";
import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Code2, Users, Building2, Zap } from "lucide-react";

const pillarIcons = [
  <Code2 key="code" className="w-6 h-6" />,
  <Users key="users" className="w-6 h-6" />,
  <Building2 key="building" className="w-6 h-6" />,
  <Zap key="zap" className="w-6 h-6" />,
];

const pillarColors = ["#7c3aed", "#3b82f6", "#06b6d4", "#10b981"];

export default function WhyOniria() {
  const t = useTranslations("WhyOniria");

  const pillars = [
    { title: t("pillar1.title"), description: t("pillar1.description") },
    { title: t("pillar2.title"), description: t("pillar2.description") },
    { title: t("pillar3.title"), description: t("pillar3.description") },
    { title: t("pillar4.title"), description: t("pillar4.description") },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Divider lines */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/20 bg-brand-500/5 mb-6">
            <span className="text-xs font-medium text-brand-300 uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative p-6 rounded-2xl border border-white/6 bg-[#12121f]/40 backdrop-blur-xl transition-all duration-500 hover:border-white/12"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${pillarColors[i]}15`,
                  color: pillarColors[i],
                  border: `1px solid ${pillarColors[i]}30`,
                }}
              >
                {pillarIcons[i]}
              </div>

              {/* Subtle accent line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${pillarColors[i]}60, transparent)`,
                }}
              />

              <h4 className="text-base font-bold text-white mb-2 tracking-tight">
                {pillar.title}
              </h4>
              <p className="text-sm text-[#94a3b8] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

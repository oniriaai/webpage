"use client";
import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { TrendingUp, BarChart3, Repeat, Shield } from "lucide-react";
import { ProcessPageLayout } from "../_components/process-page-layout";

function GrowthTimeline({ t }: { t: ReturnType<typeof useTranslations> }) {
  const milestones = [
    {
      label: t("month1Label"),
      desc: t("month1Desc"),
      month: "1",
      color: "#7c3aed",
    },
    {
      label: t("month3Label"),
      desc: t("month3Desc"),
      month: "3",
      color: "#3b82f6",
    },
    {
      label: t("month6Label"),
      desc: t("month6Desc"),
      month: "6",
      color: "#10b981",
    },
  ];

  return (
    <div className="rounded-2xl border border-white/8 bg-[#0d0d1a] p-6">
      <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-8">
        Growth trajectory
      </p>

      <div className="relative flex flex-col gap-0">
        {/* Vertical spine */}
        <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/8 z-0" />

        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="relative z-10 flex items-start gap-5 pb-8 last:pb-0"
          >
            {/* Circle indicator */}
            <div
              className="w-10 h-10 rounded-full flex flex-col items-center justify-center flex-shrink-0 text-[10px] font-extrabold"
              style={{
                backgroundColor: `${m.color}20`,
                border: `2px solid ${m.color}60`,
                color: m.color,
              }}
            >
              <span className="leading-none">M</span>
              <span className="leading-none">{m.month}</span>
            </div>

            {/* Content */}
            <div className="pt-1">
              <p className="text-sm font-bold text-white mb-1">{m.label}</p>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "Ongoing" tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="mt-2 flex items-center gap-2 pl-[52px]"
      >
        <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
        <span className="text-xs text-[#94a3b8]">Continuous improvement & support</span>
      </motion.div>
    </div>
  );
}

export default function ScalePage() {
  const t = useTranslations("Process.scale");

  const whatItems = [t("what1"), t("what2"), t("what3"), t("what4")];

  const results = [
    { icon: <TrendingUp className="w-5 h-5" />, title: t("result1Title"), desc: t("result1Desc"), color: "#10b981" },
    { icon: <BarChart3 className="w-5 h-5" />, title: t("result2Title"), desc: t("result2Desc"), color: "#3b82f6" },
    { icon: <Repeat className="w-5 h-5" />, title: t("result3Title"), desc: t("result3Desc"), color: "#7c3aed" },
    { icon: <Shield className="w-5 h-5" />, title: t("result4Title"), desc: t("result4Desc"), color: "#06b6d4" },
  ];

  return (
    <ProcessPageLayout stepNumber={4}>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/8 mb-5">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-7xl font-extrabold tracking-tight select-none bg-linear-to-r from-blue-400/50 to-cyan-400/60 bg-clip-text text-transparent">
              {t("step")}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              {t("title")}
            </h1>
          </div>
          <p className="text-lg text-[#94a3b8] max-w-2xl leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Two columns: what we do + timeline */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-bold text-white mb-5">{t("whatTitle")}</h2>
            <ul className="space-y-4">
              {whatItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-emerald-400">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GrowthTimeline t={t} />
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold text-white mb-5">{t("resultsTitle")}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {results.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-white/6 bg-[#12121f]/40 hover:border-white/12 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${r.color}15`, color: r.color, border: `1px solid ${r.color}30` }}
                >
                  {r.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{r.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ProcessPageLayout>
  );
}

"use client";
import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Bot, UserCheck, FileSearch, PenLine } from "lucide-react";
import { ProcessPageLayout } from "../_components/process-page-layout";

function AIFlowchart() {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0d0d1a] p-6 overflow-hidden">
      <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-6">
        Agent decision flow
      </p>

      <div className="flex flex-col items-center gap-0">
        {/* Input */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[220px] px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 text-center text-sm text-white font-medium"
        >
          📥 New event / trigger
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="w-px h-6 bg-white/15 origin-top"
        />

        {/* AI Agent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full max-w-[220px] px-4 py-3 rounded-xl border border-brand-500/40 bg-brand-500/10 text-center"
        >
          <p className="text-sm font-bold text-brand-300 mb-0.5">🧠 AI Agent</p>
          <p className="text-[11px] text-[#94a3b8]">Analyzes context & decides</p>
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-px h-6 bg-white/15 origin-top"
        />

        {/* Decision fork */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="w-full max-w-[260px] flex items-center gap-2"
        >
          <div className="flex-1 h-px bg-white/10" />
          <div className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[11px] text-[#94a3b8] font-medium whitespace-nowrap">
            Route decision
          </div>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* Branches */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="w-full flex justify-center gap-4 mt-1"
        >
          {[
            { label: "Auto-resolve", color: "#10b981", bg: "#10b98112" },
            { label: "Escalate →", color: "#3b82f6", bg: "#3b82f612" },
            { label: "Request data", color: "#06b6d4", bg: "#06b6d412" },
          ].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75 + i * 0.08, duration: 0.3 }}
              className="px-3 py-2 rounded-lg text-[11px] font-semibold text-center"
              style={{ backgroundColor: b.bg, color: b.color, border: `1px solid ${b.color}35` }}
            >
              {b.label}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.95 }}
          className="w-px h-5 bg-white/15 origin-top mt-1"
        />

        {/* Logged */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 1.0 }}
          className="w-full max-w-[220px] px-4 py-2.5 rounded-xl border border-white/8 bg-white/3 text-center text-[11px] text-[#94a3b8]"
        >
          ✅ Action logged & reported
        </motion.div>
      </div>
    </div>
  );
}

export default function ImplementPage() {
  const t = useTranslations("Process.implement");

  const whatItems = [t("what1"), t("what2"), t("what3"), t("what4")];

  const useCases = [
    { icon: <UserCheck className="w-5 h-5" />, title: t("usecase1Title"), desc: t("usecase1Desc"), color: "#7c3aed" },
    { icon: <Bot className="w-5 h-5" />, title: t("usecase2Title"), desc: t("usecase2Desc"), color: "#3b82f6" },
    { icon: <FileSearch className="w-5 h-5" />, title: t("usecase3Title"), desc: t("usecase3Desc"), color: "#06b6d4" },
    { icon: <PenLine className="w-5 h-5" />, title: t("usecase4Title"), desc: t("usecase4Desc"), color: "#10b981" },
  ];

  return (
    <ProcessPageLayout stepNumber={3}>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/25 bg-cyan-500/8 mb-5">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
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

        {/* Two columns: what we do + flowchart */}
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
                  <div className="mt-1 w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-cyan-400">{i + 1}</span>
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
            <AIFlowchart />
          </motion.div>
        </div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold text-white mb-5">{t("usecasesTitle")}</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {useCases.map((uc, i) => (
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
                  style={{ backgroundColor: `${uc.color}15`, color: uc.color, border: `1px solid ${uc.color}30` }}
                >
                  {uc.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{uc.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{uc.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ProcessPageLayout>
  );
}

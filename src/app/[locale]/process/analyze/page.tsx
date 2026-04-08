"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { CheckCircle2, XCircle, FileText, Map, TrendingUp, ListOrdered } from "lucide-react";
import { ProcessPageLayout } from "../_components/process-page-layout";

function BeforeAfterDiagram() {
  const [view, setView] = useState<"before" | "after">("before");
  const t = useTranslations("Process.analyze");

  const before = [
    t("before1"),
    t("before2"),
    t("before3"),
    t("before4"),
  ];

  const after = [
    t("after1"),
    t("after2"),
    t("after3"),
    t("after4"),
  ];

  const items = view === "before" ? before : after;

  return (
    <div className="rounded-2xl border border-white/8 bg-[#0d0d1a] overflow-hidden">
      {/* Toggle */}
      <div className="flex border-b border-white/8">
        <button
          onClick={() => setView("before")}
          className={`flex-1 py-3.5 text-sm font-semibold transition-all duration-300 ${
            view === "before"
              ? "bg-red-500/10 text-red-400 border-b-2 border-red-500/60"
              : "text-[#94a3b8] hover:text-white"
          }`}
        >
          {t("beforeTitle")}
        </button>
        <button
          onClick={() => setView("after")}
          className={`flex-1 py-3.5 text-sm font-semibold transition-all duration-300 ${
            view === "after"
              ? "bg-emerald-500/10 text-emerald-400 border-b-2 border-emerald-500/60"
              : "text-[#94a3b8] hover:text-white"
          }`}
        >
          {t("afterTitle")}
        </button>
      </div>

      {/* Content */}
      <div className="p-6 min-h-[220px]">
        <AnimatePresence mode="wait">
          <motion.ul
            key={view}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-3"
          >
            {items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
                className="flex items-start gap-3 text-sm text-[#94a3b8]"
              >
                {view === "before" ? (
                  <XCircle className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                )}
                <span className={view === "after" ? "text-white/80" : ""}>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AnalyzePage() {
  const t = useTranslations("Process.analyze");

  const whatItems = [t("what1"), t("what2"), t("what3"), t("what4")];
  const deliverables = [
    { icon: <FileText className="w-4 h-4" />, text: t("deliverable1") },
    { icon: <Map className="w-4 h-4" />, text: t("deliverable2") },
    { icon: <TrendingUp className="w-4 h-4" />, text: t("deliverable3") },
    { icon: <ListOrdered className="w-4 h-4" />, text: t("deliverable4") },
  ];

  return (
    <ProcessPageLayout stepNumber={1}>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/25 bg-brand-500/8 mb-5">
            <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider">
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

        {/* Two columns: what we do + before/after */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* What we do */}
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
                  <div className="mt-1 w-5 h-5 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-brand-400">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Before / After interactive diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BeforeAfterDiagram />
          </motion.div>
        </div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-5">{t("deliverablesTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/6 bg-[#12121f]/40"
              >
                <span className="text-brand-400 flex-shrink-0 mt-0.5">{d.icon}</span>
                <span className="text-sm text-[#94a3b8] leading-snug">{d.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ProcessPageLayout>
  );
}

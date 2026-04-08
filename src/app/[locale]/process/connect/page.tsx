"use client";
import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { ProcessPageLayout } from "../_components/process-page-layout";

/* Tool definitions — real tools the team works with */
const TOOLS = [
  { name: "WhatsApp", color: "#25D366", abbr: "WA" },
  { name: "Gmail", color: "#EA4335", abbr: "GM" },
  { name: "Google Sheets", color: "#34A853", abbr: "GS" },
  { name: "Google Drive", color: "#4285F4", abbr: "GD" },
  { name: "HubSpot", color: "#FF7A59", abbr: "HS" },
  { name: "Notion", color: "#e2e8f0", abbr: "NT" },
  { name: "Telegram", color: "#0088CC", abbr: "TG" },
  { name: "Slack", color: "#E01E5A", abbr: "SL" },
  { name: "Supabase", color: "#3ECF8E", abbr: "SB" },
  { name: "PostgreSQL", color: "#336791", abbr: "PG" },
  { name: "OpenAI", color: "#74aa9c", abbr: "AI" },
  { name: "Calendly", color: "#006BFF", abbr: "CL" },
];

function ToolsGrid({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0d0d1a] p-6">
      <p className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-5">{title}</p>
      <div className="grid grid-cols-4 gap-3">
        {TOOLS.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.3, type: "spring", stiffness: 300 }}
            whileHover={{ scale: 1.12, y: -2 }}
            className="relative group flex flex-col items-center gap-1.5 cursor-default"
            title={tool.name}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold text-white transition-all duration-300 group-hover:shadow-lg"
              style={{
                backgroundColor: `${tool.color}22`,
                border: `1px solid ${tool.color}40`,
                color: tool.color,
                boxShadow: `0 0 0 0 ${tool.color}00`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px 2px ${tool.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${tool.color}00`;
              }}
            >
              {tool.abbr}
            </div>
            <span className="text-[10px] text-[#94a3b8]/60 text-center leading-tight max-w-[52px] truncate">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Central hub indicator */}
      <div className="mt-6 flex items-center gap-3 p-3 rounded-xl border border-brand-500/20 bg-brand-500/5">
        <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/40 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-brand-400">n8n</span>
        </div>
        <span className="text-xs text-[#94a3b8]">Central hub — everything connects here</span>
      </div>
    </div>
  );
}

export default function ConnectPage() {
  const t = useTranslations("Process.connect");

  const whatItems = [t("what1"), t("what2"), t("what3"), t("what4")];

  return (
    <ProcessPageLayout stepNumber={2}>
      <div className="max-w-5xl mx-auto px-6 pb-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/25 bg-blue-500/8 mb-5">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
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

        {/* Two columns: what we do + tools grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* What we do */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-lg font-bold text-white mb-5">{t("whatTitle")}</h2>
            <ul className="space-y-4 mb-8">
              {whatItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[10px] font-bold text-blue-400">{i + 1}</span>
                  </div>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{item}</p>
                </motion.li>
              ))}
            </ul>

            {/* Why n8n callout */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-xl border border-brand-500/20 bg-brand-500/5"
            >
              <h3 className="text-sm font-bold text-brand-300 mb-2">{t("whyN8nTitle")}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{t("whyN8n")}</p>
            </motion.div>
          </motion.div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ToolsGrid title={t("toolsTitle")} />
          </motion.div>
        </div>
      </div>
    </ProcessPageLayout>
  );
}

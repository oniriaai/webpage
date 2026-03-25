"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";
import { ArrowRight, Play } from "lucide-react";
import { useRouter } from "next/navigation";

/* ───────── animated particles on the SVG flow ───────── */
function FlowParticle({
  pathId,
  delay,
  dur,
  color,
}: {
  pathId: string;
  delay: number;
  dur: number;
  color: string;
}) {
  return (
    <>
      <circle r="4" fill={color} filter="url(#glow)">
        <animateMotion
          dur={`${dur}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
      <circle r="8" fill={color} opacity="0.3" filter="url(#glow)">
        <animateMotion
          dur={`${dur}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      </circle>
    </>
  );
}

/* ───────── animated workflow SVG ───────── */
function WorkflowAnimation() {
  return (
    <div className="relative w-full max-w-[700px] mx-auto aspect-[16/10]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 rounded-3xl blur-3xl" />

      <svg
        viewBox="0 0 700 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="lineGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="lineGrad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>

        {/* ───── Connection Lines ───── */}
        {/* WhatsApp → Hub */}
        <path
          id="p1"
          d="M130,110 C200,110 230,220 300,220"
          stroke="url(#lineGrad1)"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Email → Hub */}
        <path
          id="p2"
          d="M130,330 C200,330 230,220 300,220"
          stroke="url(#lineGrad2)"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Webhook → Hub */}
        <path
          id="p3"
          d="M130,220 L300,220"
          stroke="url(#lineGrad1)"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Hub → CRM */}
        <path
          id="p4"
          d="M400,220 C470,220 500,110 570,110"
          stroke="url(#lineGrad3)"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Hub → Analytics */}
        <path
          id="p5"
          d="M400,220 C470,220 500,330 570,330"
          stroke="url(#lineGrad2)"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />
        {/* Hub → AI */}
        <path
          id="p6"
          d="M400,220 L570,220"
          stroke="url(#lineGrad1)"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* ───── Animated particles ───── */}
        <FlowParticle pathId="p1" delay={0} dur={2.5} color="#a855f7" />
        <FlowParticle pathId="p2" delay={0.5} dur={2.8} color="#06b6d4" />
        <FlowParticle pathId="p3" delay={0.3} dur={2} color="#7c3aed" />
        <FlowParticle pathId="p4" delay={1.2} dur={2.5} color="#10b981" />
        <FlowParticle pathId="p5" delay={1.5} dur={2.8} color="#3b82f6" />
        <FlowParticle pathId="p6" delay={1} dur={2} color="#a855f7" />

        {/* ───── Source Nodes (left) ───── */}
        {/* WhatsApp */}
        <g>
          <rect
            x="60"
            y="78"
            width="80"
            height="64"
            rx="16"
            fill="#1a1a2e"
            stroke="#25D366"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text
            x="100"
            y="100"
            textAnchor="middle"
            fill="#25D366"
            fontSize="20"
          >
            💬
          </text>
          <text
            x="100"
            y="130"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            WhatsApp
          </text>
        </g>

        {/* Webhook / API */}
        <g>
          <rect
            x="60"
            y="188"
            width="80"
            height="64"
            rx="16"
            fill="#1a1a2e"
            stroke="#ec4899"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text
            x="100"
            y="210"
            textAnchor="middle"
            fill="#ec4899"
            fontSize="20"
          >
            🔗
          </text>
          <text
            x="100"
            y="240"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            Webhook
          </text>
        </g>

        {/* Email */}
        <g>
          <rect
            x="60"
            y="298"
            width="80"
            height="64"
            rx="16"
            fill="#1a1a2e"
            stroke="#3b82f6"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text
            x="100"
            y="320"
            textAnchor="middle"
            fill="#3b82f6"
            fontSize="20"
          >
            ✉️
          </text>
          <text
            x="100"
            y="350"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            Email
          </text>
        </g>

        {/* ───── Central Hub (ONIRIA AI) ───── */}
        <g>
          <rect
            x="290"
            y="178"
            width="120"
            height="84"
            rx="20"
            fill="#1a1a2e"
            stroke="#7c3aed"
            strokeWidth="2"
            strokeOpacity="0.7"
          />
          {/* Glow effect */}
          <rect
            x="290"
            y="178"
            width="120"
            height="84"
            rx="20"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="4"
            strokeOpacity="0.15"
            filter="url(#glow)"
          />
          <text
            x="350"
            y="210"
            textAnchor="middle"
            fill="#a855f7"
            fontSize="22"
          >
            🧠
          </text>
          <text
            x="350"
            y="235"
            textAnchor="middle"
            fill="#e2e8f0"
            fontSize="11"
            fontWeight="600"
            fontFamily="Inter, sans-serif"
          >
            ONIRIA AI
          </text>
          <text
            x="350"
            y="252"
            textAnchor="middle"
            fill="#7c3aed"
            fontSize="8"
            fontFamily="Inter, sans-serif"
          >
            Processing...
          </text>
          {/* Spinning indicator */}
          <circle
            cx="350"
            cy="252"
            r="0"
            fill="none"
            stroke="#7c3aed"
            strokeWidth="1"
          >
            <animate
              attributeName="r"
              values="0;12;0"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0;0.6"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* ───── Output Nodes (right) ───── */}
        {/* CRM */}
        <g>
          <rect
            x="560"
            y="78"
            width="80"
            height="64"
            rx="16"
            fill="#1a1a2e"
            stroke="#10b981"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text
            x="600"
            y="100"
            textAnchor="middle"
            fill="#10b981"
            fontSize="20"
          >
            🗄️
          </text>
          <text
            x="600"
            y="130"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            CRM
          </text>
        </g>

        {/* AI Agent */}
        <g>
          <rect
            x="560"
            y="188"
            width="80"
            height="64"
            rx="16"
            fill="#1a1a2e"
            stroke="#a855f7"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text
            x="600"
            y="210"
            textAnchor="middle"
            fill="#a855f7"
            fontSize="20"
          >
            🤖
          </text>
          <text
            x="600"
            y="240"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            AI Agent
          </text>
        </g>

        {/* Analytics */}
        <g>
          <rect
            x="560"
            y="298"
            width="80"
            height="64"
            rx="16"
            fill="#1a1a2e"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <text
            x="600"
            y="320"
            textAnchor="middle"
            fill="#f59e0b"
            fontSize="20"
          >
            📊
          </text>
          <text
            x="600"
            y="350"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="10"
            fontFamily="Inter, sans-serif"
          >
            Analytics
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ───────────── HERO SECTION ───────────── */
export default function HeroSection() {
  const t = useTranslations("AnimatedCard");
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring" as const, bounce: 0.3 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* ─── Background Effects ─── */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-violet-500/5 rounded-full blur-[80px] animate-pulse" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── Content ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        {/* Pill badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
        >
          <span className="text-sm">✨</span>
          <span className="text-sm font-medium text-purple-300">
            {t("badge") ?? "AI-Powered Automation"}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-purple-300">
            {t("title")}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-[#94a3b8] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t("description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <Button
            size="lg"
            className="rounded-full h-14 px-10 text-base font-semibold bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white shadow-[0_0_40px_-8px_rgba(124,58,237,0.5)] hover:shadow-[0_0_60px_-8px_rgba(124,58,237,0.7)] transition-all duration-300 hover:scale-105 group"
            onClick={() => router.push("/contact")}
          >
            <span className="flex items-center gap-2">
              {t("button1")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full h-14 px-10 text-base font-semibold border-white/20 text-white/90 hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Play className="w-4 h-4" />
              {t("button2")}
            </span>
          </Button>
        </motion.div>

        {/* ─── Animated Workflow Diagram ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.2 }}
          className="relative"
        >
          {/* Frame glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-3xl blur-xl" />

          {/* Glassmorphic container */}
          <div className="relative rounded-3xl border border-white/10 bg-[#0d0d1a]/80 backdrop-blur-xl p-6 md:p-10 shadow-2xl">
            {/* Top gradient line */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            {/* Window controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs font-mono text-[#94a3b8]/50 tracking-wider uppercase">
                Automation Flow
              </span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-green-400/80 font-mono">
                  Live
                </span>
              </div>
            </div>

            <WorkflowAnimation />
          </div>
        </motion.div>

        {/* ─── Trust Bar ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#94a3b8]/40 mb-6 font-medium">
            Herramientas que conectamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {["n8n", "Make", "Zapier", "HubSpot", "Slack"].map((tool) => (
              <span
                key={tool}
                className="text-sm md:text-base font-semibold text-white/60 tracking-wider"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

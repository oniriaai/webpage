"use client";
import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "../../../../i18n/navigation";

interface ProcessStep {
  label: string;
  href: string;
}

interface ProcessPageLayoutProps {
  stepNumber: number;
  children: React.ReactNode;
}

const STEPS: ProcessStep[] = [
  { label: "01", href: "/process/analyze" },
  { label: "02", href: "/process/connect" },
  { label: "03", href: "/process/implement" },
  { label: "04", href: "/process/scale" },
];

export function ProcessPageLayout({ stepNumber, children }: ProcessPageLayoutProps) {
  const t = useTranslations("Process");
  const currentIndex = stepNumber - 1;
  const prevStep = STEPS[currentIndex - 1];
  const nextStep = STEPS[currentIndex + 1];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-brand-500/30 selection:text-blue-200">
      {/* Background */}
      <div className="fixed inset-0 bg-[#0a0a0f] pointer-events-none" />
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Back + Step indicator bar */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-28 pb-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Back to home */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#94a3b8] hover:text-white transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            {t("nav.back")}
          </Link>

          {/* Step pills */}
          <div className="flex items-center gap-2">
            {STEPS.map((s, i) => (
              <Link key={i} href={s.href}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i === currentIndex
                      ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30"
                      : i < currentIndex
                      ? "bg-brand-500/20 text-brand-400 border border-brand-500/30"
                      : "bg-white/5 text-[#94a3b8] border border-white/10"
                  }`}
                >
                  {s.label}
                </div>
              </Link>
            ))}
            <span className="ml-2 text-xs text-[#94a3b8]">
              {t("nav.step")} {stepNumber} {t("nav.of")}
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-px bg-white/6 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-linear-to-r from-brand-500 to-brand-300 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(stepNumber / 4) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>

      {/* Page content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Step navigation footer */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl border border-white/8 bg-[#0d0d1a] p-8 text-center mb-10 overflow-hidden"
        >
          <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-brand-500/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-brand-500/5 to-transparent pointer-events-none" />
          <h3 className="text-xl md:text-2xl font-bold text-white mb-5 relative z-10">
            {t("cta.title")}
          </h3>
          <Link
            href="/contact"
            className="group relative z-10 inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-linear-to-r from-brand-500 to-brand-800 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 hover:scale-105 transition-all duration-300"
          >
            {t("cta.button")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Prev / Next navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevStep ? (
            <Link
              href={prevStep.href}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/8 bg-white/3 text-sm text-[#94a3b8] hover:text-white hover:border-white/16 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              {t("nav.previous")}
            </Link>
          ) : (
            <div />
          )}

          {nextStep ? (
            <Link
              href={nextStep.href}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/8 bg-white/3 text-sm text-[#94a3b8] hover:text-white hover:border-white/16 transition-all duration-200"
            >
              {t("nav.next")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}

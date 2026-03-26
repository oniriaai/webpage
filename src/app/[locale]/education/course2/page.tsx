"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Course2Page() {
  const t = useTranslations("Education.courses.course2");

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-brand-500/30 selection:text-brand-200">
      <section className="relative w-full py-28 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link href="/education" className="flex items-center gap-2 text-brand-500 hover:text-brand-300 transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-white">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8]">
              {t("description")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
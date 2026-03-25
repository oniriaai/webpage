"use client";

import React from "react";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Cpu, Code, BarChart, Globe } from "lucide-react";
import { CSSProperties } from "react";
import Link from "next/link";

interface CustomCSSProperties extends CSSProperties {
  "--glow-color"?: string;
}

export default function Education() {
  const t = useTranslations("Education");

  const courses = [
    {
      title: t("courses.course1.title"),
      description: t("courses.course1.description"),
      color: "#7c3aed", // Purple
      href: "/education/course1", // Added navigation link
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br from-purple-500 to-purple-700 shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Cpu className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: t("courses.course2.title"),
      description: t("courses.course2.description"),
      color: "#3b82f6", // Blue
      href: "/education/course2", // Added navigation link
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br from-blue-500 to-blue-700 shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Code className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: t("courses.course3.title"),
      description: t("courses.course3.description"),
      color: "#06b6d4", // Cyan
      href: "/education/course3", // Added navigation link
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br from-cyan-500 to-cyan-700 shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <BarChart className="w-6 h-6" />
        </div>
      ),
    },
    {
      title: t("courses.course4.title"),
      description: t("courses.course4.description"),
      color: "#10b981", // Green
      href: "/education/course4", // Added navigation link
      icon: (
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br from-green-500 to-green-700 shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Globe className="w-6 h-6" />
        </div>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Hero Section */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-purple-600/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                {t("header")}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-white">
              {t("title")}
            </h1>
            <p className="text-base md:text-lg text-[#94a3b8]">
              {t("description")}
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative"
              >
                <Link href={course.href} className="block h-full">
                  <div
                    className="relative p-6 md:p-7 rounded-2xl border border-white/10 bg-[#12121f]/60 backdrop-blur-xl h-full overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                    style={{
                      "--glow-color": course.color,
                    } as CustomCSSProperties}
                  >
                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), var(--glow-color)15, transparent 60%)`,
                      }}
                    />

                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(to right, transparent, var(--glow-color)60, transparent)`,
                      }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className="mb-5">{course.icon}</div>

                      {/* Title */}
                      <h4 className="text-lg font-bold mb-3 tracking-tight text-white group-hover:text-white transition-colors">
                        {course.title}
                      </h4>

                      {/* Description */}
                      <p className="text-[#94a3b8] text-sm leading-relaxed grow">
                        {course.description}
                      </p>

                      {/* Link */}
                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#94a3b8]/60 group-hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                        <span>{t("learnMore")}</span>
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
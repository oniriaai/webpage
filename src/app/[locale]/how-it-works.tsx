"use client";
import React from "react";
import { motion } from "motion/react";
import { Settings, Zap, BarChart3, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Settings className="w-6 h-6" />,
    title: "Analice sus procesos",
    description:
      "Identificamos los flujos de trabajo repetitivos en su negocio y diseñamos una estrategia de automatización personalizada.",
    color: "#7c3aed",
  },
  {
    number: "02",
    icon: <Zap className="w-6 h-6" />,
    title: "Conectamos sus herramientas",
    description:
      "Integramos todas sus aplicaciones y plataformas existentes para crear un ecosistema conectado e inteligente.",
    color: "#3b82f6",
  },
  {
    number: "03",
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Implementamos IA",
    description:
      "Desplegamos agentes de IA que toman decisiones, procesan datos y ejecutan tareas sin intervención manual.",
    color: "#06b6d4",
  },
  {
    number: "04",
    icon: <Rocket className="w-6 h-6" />,
    title: "Escale su negocio",
    description:
      "Monitoree resultados en tiempo real y escale sus automatizaciones para un crecimiento continuo y exponencial.",
    color: "#10b981",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative w-full py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Subtle background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
            <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
              Proceso
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Cómo funciona
          </h2>
          <p className="text-[#94a3b8] text-base md:text-lg max-w-2xl mx-auto">
            En cuatro simples pasos, transformamos la operación de su negocio
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-6 md:p-7 rounded-2xl border border-white/[0.06] bg-[#12121f]/40 backdrop-blur-xl h-full transition-all duration-500 hover:border-white/[0.12]">
                {/* Step number */}
                <span
                  className="text-5xl font-extrabold absolute top-5 right-5 opacity-[0.06]"
                  style={{ color: step.color }}
                >
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${step.color}15`,
                    color: step.color,
                    border: `1px solid ${step.color}30`,
                  }}
                >
                  {step.icon}
                </div>

                <h4 className="text-base font-bold text-white mb-3 tracking-tight">
                  {step.title}
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting line (only on lg between items) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

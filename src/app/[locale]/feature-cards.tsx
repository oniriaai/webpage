"use client";
import React from "react";
import { motion } from "motion/react";

interface FeatureCardProps {
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
    color: string;
    glowColor: string;
  }[];
}

export function FeatureCards({ features }: FeatureCardProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring" as const,
        bounce: 0.4,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
    >
      {features.map((feature, i) => (
        <motion.div key={i} variants={itemVariants} className="group h-full">
          <div
            className="relative h-full rounded-2xl border border-white/[0.06] bg-[#12121f]/60 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.12]"
            style={
              {
                "--glow-color": feature.glowColor,
              } as React.CSSProperties
            }
          >
            {/* Hover glow effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 30%), ${feature.glowColor}15, transparent 60%)`,
              }}
            />

            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(to right, transparent, ${feature.glowColor}60, transparent)`,
              }}
            />

            <div className="relative z-10 p-7 flex flex-col h-full">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl mb-5 flex items-center justify-center bg-gradient-to-br ${feature.color} shadow-lg text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold mb-3 tracking-tight text-white group-hover:text-white transition-colors">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-[#94a3b8] text-sm leading-relaxed flex-grow">
                {feature.description}
              </p>

              {/* Link */}
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#94a3b8]/60 group-hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                <span>Descubrir más</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

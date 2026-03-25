"use client";

import { motion, Variants } from "motion/react";
import { Workflow, Bot, Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { useTranslations } from "next-intl";

// ----------------------------------------------------------------------
// Animation Variants (unchanged)
// ----------------------------------------------------------------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 22, mass: 1 },
  },
};

// ----------------------------------------------------------------------
// Icon mapping by stable ID
// ----------------------------------------------------------------------
const iconById: Record<string, React.ElementType> = {
  "workflow-automation": Workflow,
  "ai-agents": Bot,
  "real-time-sync": Zap,
  "global-infrastructure": Globe,
};

// Optional: gradients by ID
const gradientById: Record<string, string> = {
  "workflow-automation": "from-purple-500 to-blue-500",
  "ai-agents": "from-cyan-500 to-emerald-500",
  "real-time-sync": "from-amber-500 to-orange-500",
  "global-infrastructure": "from-indigo-500 to-violet-500",
};

// ----------------------------------------------------------------------
// Type for card data (from translations)
// ----------------------------------------------------------------------
interface CardData {
  id: string;
  title: string;
  description: string;
  learnMore: string;
}

export default function Solutions() {
  const t = useTranslations("Solutions");

  // Retrieve the cards array from translations (ensure proper typing)
  const cards = t.raw("cards") as CardData[];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white">
      {/* Background effects (unchanged) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-48 -left-48 h-[40rem] w-[40rem] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-1/3 -right-48 h-[35rem] w-[35rem] rounded-full bg-cyan-600/20 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-emerald-600/15 blur-[110px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[25rem] w-[25rem] rounded-full bg-blue-600/20 blur-[100px]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        {/* Hero section (unchanged) */}
        <div className="mb-24 text-center md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-gray-300 backdrop-blur-sm"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl whitespace-pre-line"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg text-[#94a3b8] sm:text-xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-6 text-base font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              {t("hero.ctaPrimary")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 px-6 py-6 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-purple-400/50 hover:bg-white/10"
            >
              {t("hero.ctaSecondary")}
            </Button>
          </motion.div>
        </div>

        {/* Solutions Grid Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t("section.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-[#94a3b8]">
              {t("section.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
          >
            {cards.map((card) => {
              const Icon = iconById[card.id];
              const gradient = gradientById[card.id] || "from-purple-500 to-blue-500";

              return (
                <motion.div
                  key={card.id}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  className="group h-full"
                >
                  <Card className="relative h-full overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10">
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 70% 20%, rgba(139,92,246,0.15) 0%, transparent 70%)`,
                      }}
                    />
                    <CardHeader className="relative z-10 space-y-4 pb-2">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} bg-opacity-20 shadow-lg shadow-purple-900/20`}
                      >
                        {Icon && <Icon className="h-7 w-7 text-white drop-shadow-sm" />}
                      </div>
                      <CardTitle className="text-2xl font-bold tracking-tight text-white">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <CardDescription className="text-base leading-relaxed text-[#94a3b8]">
                        {card.description}
                      </CardDescription>
                      <div className="mt-6 flex items-center text-sm font-medium text-purple-300 transition-all group-hover:translate-x-1 group-hover:text-purple-200">
                        {card.learnMore} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Section (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto max-w-4xl rounded-2xl border border-white/10 bg-gradient-to-r from-gray-900/50 to-gray-800/30 p-8 backdrop-blur-md sm:p-12"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-emerald-500/30 opacity-40 blur-md" />
          <div className="relative z-10 text-center">
            <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
              {t("cta.title")}
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-[#94a3b8]">
              {t("cta.subtitle")}
            </p>
            <Button className="group bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-6 text-base font-semibold shadow-lg shadow-purple-500/20 transition-all hover:scale-105 hover:shadow-xl">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
}
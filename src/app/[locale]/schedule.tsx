"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

export default function Schedule() {
  const router = useRouter();
  const t = useTranslations("Schedule");

  const onclickHandler = () => {
    router.push("/contact");
  };

  return (
    <section className="relative overflow-hidden mx-4 md:mx-8 xl:mx-auto max-w-6xl my-16">
      <div className="relative rounded-[2rem] overflow-hidden border border-white/6 bg-[#0d0d1a]">
        {/* Background gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-brand-500/15 blur-[120px] rounded-full pointer-events-none" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />

        {/* Top gradient accent */}
        <div className="absolute top-0 left-[20%] right-[20%] h-px bg-linear-to-r from-transparent via-brand-500/30 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-2xl mx-auto text-center px-6 py-20 md:py-28"
        >
          {/* Calendar Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 bg-brand-500/10 border border-brand-500/20 text-brand-300"
          >
            <Calendar className="w-7 h-7" />
          </motion.div>

          <h3 className="text-3xl md:text-5xl font-extrabold mb-5 text-white tracking-tight leading-tight">
            {t("title")}
          </h3>

          <p className="mb-10 text-base md:text-lg text-[#94a3b8] max-w-lg mx-auto leading-relaxed">
            {t("description")}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <Button
              size="lg"
              className="rounded-full h-14 px-10 text-base font-semibold bg-white text-[#0a0a0f] hover:bg-white/90 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.3)] group"
              onClick={onclickHandler}
            >
              <span className="flex items-center gap-2">
                {t("button")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

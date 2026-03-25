import HeroSection from "./hero-section";
import Schedule from "./schedule";
import StatsSection from "./stats-section";
import HowItWorks from "./how-it-works";
import { Zap, Workflow, Bot, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { FeatureCards } from "./feature-cards";

export const metadata = {
  title: "Oniria Solutions | Automatización con IA",
  description:
    "Transformamos negocios con soluciones de Inteligencia Artificial y Automatización. Maximiza el rendimiento de tu empresa hoy.",
};

export default function LandingPage() {
  const t = useTranslations("LandingPage");

  const features = [
    {
      icon: <Workflow className="w-5 h-5" />,
      title: t("card1.title"),
      description: t("card1.description"),
      color: "from-purple-600 to-violet-600",
      glowColor: "#7c3aed",
    },
    {
      icon: <Bot className="w-5 h-5" />,
      title: t("card2.title"),
      description: t("card2.description"),
      color: "from-blue-600 to-indigo-600",
      glowColor: "#3b82f6",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: t("card3.title"),
      description: t("card3.description"),
      color: "from-cyan-500 to-blue-500",
      glowColor: "#06b6d4",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t("card4.title"),
      description: t("card4.description"),
      color: "from-emerald-500 to-teal-500",
      glowColor: "#10b981",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Hero Section with animated workflow */}
      <HeroSection />

      {/* Stats / Social Proof */}
      <StatsSection />

      {/* Features Section */}
      <section className="relative w-full py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        {/* Subtle purple ambient light */}
        <div className="absolute top-0 right-1/4 w-125 h-125 bg-purple-600/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs font-medium text-purple-400 uppercase tracking-wider">
                ¿Por qué elegirnos?
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-5 text-white">
              {t("title")}
            </h2>
            <p className="text-base md:text-lg text-[#94a3b8]">
              Impulsamos la eficiencia operativa mediante tecnología de
              vanguardia y orquestación inteligente.
            </p>
          </div>

          <FeatureCards features={features} />
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* CTA / Schedule */}
      <div className="pb-20">
        <Schedule />
      </div>
    </main>
  );
}

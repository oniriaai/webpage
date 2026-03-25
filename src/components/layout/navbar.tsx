"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { LocaleSwitcher } from "./locale-switcher";
import { Dialog } from "radix-ui";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          className="font-bold flex items-center text-lg tracking-tight text-white group"
          href="/"
        >
          <img
            src="/icon.svg"
            className="h-8 w-auto mr-2.5 group-hover:rotate-6 transition-transform duration-300"
            alt="ONIRIA"
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            ONIRIA
          </span>
          <span className="text-purple-400 font-normal ml-0.5 text-sm hidden sm:inline">
            solutions
          </span>
        </Link>

        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex gap-6 text-sm">
            <Link
              href="/solutions"
              className="text-[#94a3b8] hover:text-white transition-colors duration-300 font-medium"
            >
              {t("solutions")}
            </Link>
            <Link
              href="/education"
              className="text-[#94a3b8] hover:text-white transition-colors duration-300 font-medium"
            >
              {t("education")}
            </Link>
          </div>

          <LocaleSwitcher />

          <Button
            size="sm"
            className="rounded-full px-5 h-9 text-sm font-medium bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white border-0 shadow-[0_0_20px_-4px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_-4px_rgba(124,58,237,0.6)] transition-all duration-300 group"
            asChild
          >
            <Link href="/contact">
              <span className="flex items-center gap-1.5">
                {t("demo")}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          <Sheet>
            <Dialog.Title />
            <SheetTrigger asChild>
              <button className="p-2 text-white/70 hover:text-white transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              className="p-6 bg-[#0d0d1a] border-white/[0.06]"
              side="right"
            >
              <div className="flex flex-col gap-6 mt-10">
                <LocaleSwitcher />
                <Link
                  href="/solutions"
                  className="text-white/80 hover:text-white transition-colors text-lg"
                >
                  {t("solutions")}
                </Link>
                <Link
                  href="/education"
                  className="text-white/80 hover:text-white transition-colors text-lg"
                >
                  {t("education")}
                </Link>
                <Button className="rounded-full h-12 bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold mt-4">
                  {t("demo")}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
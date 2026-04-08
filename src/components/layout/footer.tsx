"use client";
import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Instagram } from "lucide-react";

function Footer() {
  const t = useTranslations("Navigation");
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/4">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <img src="/icon.svg" className="h-6 w-auto" alt="ONIRIA" />
              <span className="text-sm font-bold text-white/80">
                ONIRIA
                <span className="text-brand-500 font-normal ml-0.5 text-xs">
                  solutions
                </span>
              </span>
            </div>
            <p className="text-xs text-[#94a3b8]/60">{t("Footer")}</p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="/solutions"
              className="text-[#94a3b8]/60 hover:text-white/80 transition-colors duration-300"
            >
              {t("solutions")}
            </Link>
            <Link
              href="/process/analyze"
              className="text-[#94a3b8]/60 hover:text-white/80 transition-colors duration-300"
            >
              {t("process")}
            </Link>
            <Link
              href="/contact"
              className="text-[#94a3b8]/60 hover:text-white/80 transition-colors duration-300"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Social + Copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/oniriasolutions"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @oniriasolutions"
              className="text-[#94a3b8]/40 hover:text-[#E1306C] transition-colors duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <p className="text-xs text-[#94a3b8]/40">
              © {new Date().getFullYear()} ONIRIASOLUTIONS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

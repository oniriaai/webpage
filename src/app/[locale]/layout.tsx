import "./globals.css"
import type { Metadata } from "next";
import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {clsx} from 'clsx';
import {routing} from '../../i18n/routing';
import Navbar from '@/src/components/layout/navbar';
import Footer from '@/src/components/layout/footer';
import { Geist, Geist_Mono, Inter, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "../../components/theme-provider"
import { cn } from "../../lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale === "es";
  return {
    alternates: {
      canonical: `https://oniriasolutions.com/${locale}`,
      languages: {
        en: "https://oniriasolutions.com/en",
        es: "https://oniriasolutions.com/es",
      },
    },
    openGraph: {
      locale: isEs ? "es_EC" : "en_US",
      alternateLocale: isEs ? ["en_US"] : ["es_EC"],
    },
  };
}

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={cn("antialiased dark", fontMono.variable, "font-sans", inter.variable, spaceGrotesk.variable)} suppressHydrationWarning>
    <head>
        <link rel="icon" type="image/x-icon" href="/icon.svg"></link>
        <meta name="theme-color" content="#0a0a0f" />
    </head>
    
      <body className="bg-[#0a0a0f] text-white">
        <ThemeProvider defaultTheme="dark" enableSystem={false} forcedTheme="dark">
            <NextIntlClientProvider>
                <Navbar/>
                    {children}
                <Footer/>
            </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
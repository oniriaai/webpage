import "./globals.css"
import {notFound} from 'next/navigation';
import {Locale, hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {clsx} from 'clsx';
import {routing} from '../../i18n/routing';
import Navbar from '@/src/components/layout/navbar';
import Footer from '@/src/components/layout/footer';
import { Geist, Geist_Mono, Inter } from "next/font/google"
import { ThemeProvider } from "../../components/theme-provider"
import { cn } from "../../lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)} suppressHydrationWarning>
    <head>
        <link rel="icon" type="image/x-icon" href="/icon.svg"></link>
    </head>
    
      <body>
        <ThemeProvider defaultTheme="system" enableSystem>
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
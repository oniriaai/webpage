import Link from "next/link"
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { LocaleSwitcher} from "./locale-switcher";
import { Dialog } from "radix-ui";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations('Navigation');
  return (
    <header className="max-w-7xl mx-auto flex items-center justify-between p-6">
      <Link className="font-bold flex items-center text-xl tracking-tight" href="/">
          <img src="/icon.svg" className="h-9 w-auto mr-3"/> 
          ONIRIASOLUTIONS
        </Link>

      {/*Desktop Navbar*/}
      <nav className="hidden md:flex items-center gap-8">
        <div className="flex gap-6">
          <Link href="/solutions" className="align-middle">{t('solutions')}</Link>
          <Link href="/contact">{t('contact')}</Link>
        </div>

        <LocaleSwitcher />
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3">
        <Sheet>
          <Dialog.Title/>
          <SheetTrigger asChild>
            <button className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent className="p-4" side="right">
            <div className="flex flex-col gap-6 mt-10">
              <LocaleSwitcher />
              <Link href="/solutions" className="align-middle">{t('solutions')}</Link>
              <Link href="/contact">{t('contact')}</Link>
              <Button className="rounded-xl">{t('demo')}</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
'use client';

import { useLocale, useTranslations } from 'next-intl';
import { routing } from '../../i18n/routing';
import { usePathname, useRouter } from '../../i18n/navigation'; // Import from your custom navigation file
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';


export function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select onValueChange={handleLocaleChange} defaultValue={locale}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder={t('select_language')} />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((loc) => (
          <SelectItem key={loc} value={loc}>
            {t(`language.${loc}`)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  // Auto-detect language from Accept-Language header.
  // Spanish browsers → /es, everything else → /en (default).
  localeDetection: true,
});
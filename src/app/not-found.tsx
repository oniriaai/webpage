// app/not-found.tsx
import { redirect } from 'next/navigation';
import { routing } from '../i18n/routing';

export default function GlobalNotFound() {
  redirect(`/${routing.defaultLocale}`);
}
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://oniriasolutions.com'),
  title: {
    default: 'Oniria Solutions',
    template: '%s | Oniria Solutions',
  },
  description: 'Custom automation and AI systems for businesses of any size. Built on n8n. Fast results, personal attention.',
  openGraph: {
    type: 'website',
    siteName: 'Oniria Solutions',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
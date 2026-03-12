import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Description for my app',
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
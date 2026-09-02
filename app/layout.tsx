import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

// Rubik has excellent Hebrew glyphs and a full 400–900 weight range,
// which lets the whole site live on a single, friendly family.
const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-rubik',
});

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to the deployed origin so share previews
  // (WhatsApp, Facebook, iMessage) get absolute image URLs.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'סוכות באגם | יוצאים לשחק בפארק נחל באר שבע · 29.9',
  description:
    'ארבע שעות של מופעי ילדים, משחקים, יצירה וקצב בפארק נחל באר שבע. יום שלישי 29.9, 10:00–14:00, הכניסה חופשית. על הבמה: מיקי ומפרץ ההרפתקאות.',
  openGraph: {
    title: 'סוכות באגם | יוצאים לשחק',
    description: '29.9 · 10:00–14:00 · פארק נחל באר שבע · הכניסה חופשית',
    url: '/',
    siteName: 'סוכות באגם',
    // WhatsApp wants a JPEG/PNG under ~300KB at 1200×630
    images: [
      {
        url: '/og-v2.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'סוכות באגם · 29.9 · פארק נחל באר שבע',
      },
    ],
    locale: 'he_IL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'סוכות באגם | יוצאים לשחק',
    description: '29.9 · 10:00–14:00 · פארק נחל באר שבע · הכניסה חופשית',
    images: ['/og-v2.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#fff9f0" />
      </head>
      <body>{children}</body>
    </html>
  );
}

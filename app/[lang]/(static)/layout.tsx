import PrimaryLayout from '@/layouts/primary/PrimaryLayout';
import { arabic, arabicAlt, julius } from '@/meta/fonts';
import { Metadata } from 'next';
import 'server-only';
import 'styles/globals.sass';

export const metadata: Metadata = {
  applicationName: 'Sqotify',
  description: 'NextQRE A Next.js Template that supports i18n',
  title: 'Sqotify',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Ahmad K' }, { name: 'Omar Q' }],
  viewport: { width: 'device-width', initialScale: 1 },
  icons: ['/favicon.ico'],
  colorScheme: 'dark',
  creator: 'Qutuz Media',
  publisher: 'Qutuz Media',
};

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: any;
}) {
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${julius.variable} ${arabic.variable} ${arabicAlt.variable}`}
    >
      <body className="bg-stone-200 font-julius rtl:font-arabic-alt">
        <PrimaryLayout>{children}</PrimaryLayout>
      </body>
    </html>
  );
}

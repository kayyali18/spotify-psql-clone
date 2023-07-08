// https://beta.nextjs.org/docs/optimizing/fonts
import {
  Archivo_Narrow,
  Changa,
  Julius_Sans_One,
  Kufam,
} from 'next/font/google';

export const julius = Julius_Sans_One({
  display: 'swap',
  variable: '--font-julius',
  subsets: ['latin'],
  weight: '400',
  fallback: ['sans'],
});

export const archivo = Archivo_Narrow({
  display: 'swap',
  weight: 'variable',
  subsets: ['latin'],
  variable: '--font-archivo',
  fallback: ['sans-serif'],
});

export const arabic = Kufam({
  display: 'swap',
  weight: 'variable',
  variable: '--font-arabic',
  subsets: ['arabic'],
});

export const arabicAlt = Changa({
  display: 'swap',
  weight: ['200', '300', '400', '600'],
  variable: '--font-arabic-alt',
  subsets: ['arabic'],
});

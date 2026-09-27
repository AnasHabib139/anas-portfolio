import type { Metadata } from 'next';
import { Archivo, Space_Grotesk, Instrument_Serif } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'], display: 'swap', variable: '--font-display',
  weight: ['400', '500', '600', '800', '900'],
});
const grotesk = Space_Grotesk({
  subsets: ['latin'], display: 'swap', variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});
const serif = Instrument_Serif({
  subsets: ['latin'], display: 'swap', variable: '--font-accent',
  weight: ['400'], style: ['italic'],
});

const SITE_URL = 'https://anasm.fyi';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Tells search engines which URL is the real one, so the Vercel preview
  // domains do not compete with anasm.fyi for the same content.
  alternates: { canonical: '/' },
  title: 'Anas Habib — Software Engineer, Applied AI',
  description:
    'Software Engineer in Munich. Full-stack products with production AI — agents, agentic RAG, evaluation and human-in-the-loop controls — on EU-hosted AWS.',
  openGraph: {
    title: 'Anas Habib — Software Engineer, Applied AI',
    description:
      'Full-stack products with production AI: agents, agentic RAG and evaluation on AWS. Munich, Germany.',
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: 'Anas Habib',
  },
  robots: { index: true, follow: true },
};

// Runs before first paint so the correct theme is applied without a flash.
const THEME_BOOTSTRAP = `(function(){try{
var s=localStorage.getItem('anas-theme');
var t=(s==='dark'||s==='light')?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.dataset.theme=t;
}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body className={`${archivo.variable} ${grotesk.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}

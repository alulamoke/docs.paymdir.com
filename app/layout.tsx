import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';
import { baseUrl, createMetadata } from '@/lib/metadata';

import './global.css';

export const metadata = createMetadata({
  title: {
    template: 'PayMdir | %s',
    default: 'PayMdir',
  },
  description: 'PayMdir Desc',
  metadataBase: baseUrl,
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}

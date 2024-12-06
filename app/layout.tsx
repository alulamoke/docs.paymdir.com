import type { ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider';

import './global.css';
import { Background } from '@/components/Background';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>
          <Background />
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

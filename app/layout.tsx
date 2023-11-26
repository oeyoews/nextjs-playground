import './globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';

export const metadata: Metadata = {
  // title: {
  // default: siteConfig.name,
  // template: `%s - ${siteConfig.name}`,
  // },
  // description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport = {
  width: 1,
  themeColor: 'red',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // NOTE: nextui have some warning on server
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background text-foreground font-sans antialiased'
        )}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen">
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

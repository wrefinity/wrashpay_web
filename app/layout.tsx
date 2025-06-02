import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wrashpay - Seamless Digital Payments in Nigeria',
  description:
    'Pay bills, buy airtime, data subscriptions, TV subscriptions and more with Wrashpay. Your one-stop solution for all digital payments in Nigeria.',

 icons: {
    icon: '/LOGO (3).png',
    shortcut: '/LOGO (3).png',
    apple: '/LOGO (3).png',
  },
  manifest: '/site.webmanifest',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex flex-col min-h-screen w-full">
            <Navbar />
            <main className="flex-grow w-full px-4 sm:px-6 md:px-8">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

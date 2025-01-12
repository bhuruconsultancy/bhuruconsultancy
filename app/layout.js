import './globals.css';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bhuru Consultancy',
  description: 'Your trusted partner in educational and professional development',
  icons: {
    icon: '/images/bhuru-logo.png',
    shortcut: '/images/bhuru-logo.png',
    apple: '/images/bhuru-logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/bhuru-logo.png',
    },
  },
  openGraph: {
    title: 'Bhuru Consultancy',
    description: 'Your trusted partner in educational and professional development',
    images: [
      {
        url: '/images/bhuru-logo.png',
        width: 800,
        height: 600,
        alt: 'Bhuru Consultancy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhuru Consultancy',
    description: 'Your trusted partner in educational and professional development',
    images: ['/images/bhuru-logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: 'white',
              color: 'black',
              border: '1px solid #e2e8f0',
              fontSize: '1rem',
              padding: '1rem',
            },
            error: {
              style: {
                background: '#fee2e2',
                border: '1px solid #ef4444',
                color: '#991b1b',
                fontWeight: 500,
              },
            },
            success: {
              style: {
                background: '#dcfce7',
                border: '1px solid #22c55e',
                color: '#166534',
                fontWeight: 500,
              },
            },
          }}
        />
      </body>
    </html>
  );
}
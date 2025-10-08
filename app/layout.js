import './globals.css'

export const metadata = {
  title: 'Next.js Data Fetching — MongoDB (Demo)',
  description: 'Demo of SSR / SSG / ISR / CSR / Server Action / Server Function with MongoDB'
}


// app/layout.js
import Nav from '../components/Nav';

export const viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, viewportFit: 'cover' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-slate-50 text-slate-900 antialiased">
      <body className="min-h-screen pt-[env(safe-area-inset-top)]">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <header className="mb-6">
            <Nav />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}

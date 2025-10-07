import './globals.css'

export const metadata = {
  title: 'Next.js Data Fetching — MongoDB (Demo)',
  description: 'Demo of SSR / SSG / ISR / CSR / Server Action / Server Function with MongoDB'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <div className="max-w-4xl mx-auto p-6">
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Next.js Data Fetching — MongoDB</h1>
                <p className="text-sm text-slate-500">Interactive demo of SSR / SSG / ISR / CSR / Server Actions</p>
              </div>
              <div className="text-xs text-slate-500">Professor Mr. Ali Azimi</div>
            </div>

            <nav className="mt-4 flex gap-3 text-sm">
              <a href="/" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">Server Action</a>
              <a href="/ssr" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">SSR</a>
              <a href="/ssg" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">SSG</a>
              <a href="/isr" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">ISR</a>
              <a href="/csr" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">CSR</a>
              <a href="/server-fn" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">Server Function</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-8 text-xs text-slate-500">Made with Hosein Najafi</footer>
        </div>
      </body>
    </html>
  )
}

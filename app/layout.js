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
                <h1 className="text-2xl font-semibold">Next.js Data fetching strategies — MongoDB</h1>
                <p className="text-sm text-slate-500">Interactive demo of SSR / SSG / ISR / CSR / Server Actions</p>
              </div>
              <div className=" text-slate-500 font-bold text-xl">Professor: Mr. Ali Azimi</div>

            </div>

            <nav className="mt-4 flex gap-3 text-sm">
              {/* App Router pages */}
              <a href="/" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">Server Action (App)</a>
              <a href="/ssr" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">SSR (App)</a>
              <a href="/ssg" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">SSG (App)</a>
              <a href="/isr" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">ISR (App)</a>
              <a href="/csr" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">CSR (App)</a>
              <a href="/server-fn" className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md">Server Fn (App)</a>

              {/* Pages Router versions */}
              <a href="/ssr-page" className="px-3 py-1 rounded-lg bg-slate-100 shadow-sm hover:shadow-md">SSR (Pages)</a>
              <a href="/ssg-page" className="px-3 py-1 rounded-lg bg-slate-100 shadow-sm hover:shadow-md">SSG (Pages)</a>
              <a href="/isr-page" className="px-3 py-1 rounded-lg bg-slate-100 shadow-sm hover:shadow-md">ISR (Pages)</a>
            </nav>
          </header>

          <main>{children}</main>

          <footer className="mt-8 text-xs text-slate-500">Made with: Hosein Najafi</footer>
        </div>
      </body>
    </html>
  )
}

// components/Nav.jsx
export default function Nav() {
    return (
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
    );
}

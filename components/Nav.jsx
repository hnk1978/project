// components/Nav.jsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Close the mobile menu whenever route changes
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    const items = [
        // App Router routes
        { href: '/', label: 'Server Action (App)' },
        { href: '/ssr', label: 'SSR (App)' },
        { href: '/ssg', label: 'SSG (App)' },
        { href: '/isr', label: 'ISR (App)' },
        { href: '/server-fn', label: 'Server Fn (App)' },

        // Migrated “-page” versions, also under App Router now
        { href: '/ssr-page', label: 'SSR Page' },
        { href: '/ssg-page', label: 'SSG Page' },
        { href: '/isr-page', label: 'ISR Page' },
    ];

    return (
        <nav className="mb-4">
            {/* Top bar */}
            <div className="flex items-center justify-between">
                <div className="text-base sm:text-lg font-semibold">Next.js Data Fetching strategies — MongoDB</div>
                <div className=" text-slate-500 font-bold text-l">Professor: Mr. Ali Azimi</div>

                <button
                    type="button"
                    onClick={() => setOpen(v => !v)}
                    aria-expanded={open}
                    aria-controls="primary-nav"
                    className="sm:hidden inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm
                     hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                    Menu <span className="i">≡</span>
                </button>
            </div>

            <p className="text-sm text-slate-500">Interactive demo of SSR / SSG / ISR / CSR / Server Actions</p>


            {/* Mobile (collapsible) */}
            <div
                id="primary-nav"
                className={`sm:hidden mt-3 overflow-hidden transition-[max-height] duration-300
                   ${open ? 'max-h-96' : 'max-h-0'}`}
            >
                <ul className="grid gap-2">
                    {items.map(it => (
                        <li key={it.href}>
                            <Link
                                href={it.href}
                                className="block w-full rounded-lg bg-white px-3 py-2 text-sm shadow-sm hover:shadow-md active:scale-[0.99]"
                            >
                                {it.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Desktop / tablet */}
            <ul className="hidden sm:flex sm:flex-wrap sm:gap-2 mt-3">
                {items.map(it => (
                    <li key={it.href}>
                        <Link
                            href={it.href}
                            className="px-3 py-1 rounded-lg bg-white shadow-sm hover:shadow-md text-sm"
                        >
                            {it.label}
                        </Link>
                    </li>
                ))}
            </ul>
            <footer className="mt-8 text-xs text-slate-500">Student: Hosein Najafi</footer>

        </nav>


    );
}

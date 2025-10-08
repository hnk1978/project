// pages/_app.js
import '../app/globals.css';           // reuse your Tailwind & helpers
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
            <div className="max-w-4xl mx-auto p-6 ">
                <header className="mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-semibold">Next.js Data fetching strategies — MongoDB</h1>
                            <p className="text-sm text-slate-500">
                                Interactive demo of SSR / SSG / ISR / CSR / Server Actions
                            </p>
                        </div>
                        <div className=" text-slate-500 font-bold text-xl">Professor: Mr. Ali Azimi</div>
                    </div>
                    <Nav />
                </header>

                <main><Component {...pageProps} /></main>

                <footer className="mt-8 text-xs text-slate-500">Made with: Hosein Najafi</footer>
            </div>
        </div>
    );
}

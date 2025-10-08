// pages/_app.js
import '../app/globals.css';           // reuse your Tailwind & helpers
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
            <div className="max-w-4xl mx-auto p-6 ">
                <header className="mb-6">

                    <Nav />
                </header>

                <main><Component {...pageProps} /></main>

                {/* <footer className="mt-8 text-xs text-slate-500">Made with: Hosein Najafi</footer> */}
            </div>
        </div>
    );
}

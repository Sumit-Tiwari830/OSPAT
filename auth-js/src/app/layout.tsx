import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OSPAT | Competitive Programming Platform",
  description: "A platform by Sumit Tiwari for mastering algorithms and data structures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0a] text-zinc-900 dark:text-zinc-100 font-sans">
        {/* Navigation Bar */}
        <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-8">
                <Link href="/" className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-500">
                  OSPAT
                </Link>
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  <Link href="/problems" className="hover:text-blue-500 transition-colors">Problems</Link>
                  <Link href="/contests" className="hover:text-blue-500 transition-colors">Contests</Link>
                  <Link href="/leaderboard" className="hover:text-blue-500 transition-colors">Leaderboard</Link>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-sm font-medium px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-all"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-all shadow-md shadow-blue-500/20"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0a] py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <span className="text-xl font-bold tracking-tighter text-blue-600 dark:text-blue-500">
                  OSPAT
                </span>
                <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 max-w-[200px]">
                  The premier arena for competitive programming and algorithmic mastery.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Platform</h3>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <li><Link href="/problems" className="hover:text-blue-500 transition-colors">Problemset</Link></li>
                  <li><Link href="/contests" className="hover:text-blue-500 transition-colors">Contests</Link></li>
                  <li><Link href="/ranking" className="hover:text-blue-500 transition-colors">Global Ranking</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <li><Link href="/help" className="hover:text-blue-500 transition-colors">Help Center</Link></li>
                  <li><Link href="/rules" className="hover:text-blue-500 transition-colors">Contest Rules</Link></li>
                  <li><Link href="/api" className="hover:text-blue-500 transition-colors">Developer API</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Community</h3>
                <ul className="space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                  <li><Link href="/blog" className="hover:text-blue-500 transition-colors">Blog</Link></li>
                  <li><Link href="/discord" className="hover:text-blue-500 transition-colors">Discord</Link></li>
                  <li><Link href="/github" className="hover:text-blue-500 transition-colors">GitHub</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4 text-xs text-zinc-500">
                <span>© {new Date().getFullYear()} OSPAT. Built by Sumit Tiwari.</span>
                <span className="hidden md:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  System Status: Operational
                </div>
              </div>

              <div className="flex gap-6 text-xs text-zinc-400">
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms" className="underline-offset-4 hover:underline">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen transition-colors">
      <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">

        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Live Contest: Round #42 starts in 2h 15m
        </div>

        <h1 className="max-w-4xl text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Master the Art of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
            Competitive Coding
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
          OSPAT is the ultimate arena for developers. Solve complex problems,
          compete in global rounds, and climb the leaderboard.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
          <Link
            href="/login"
            className="flex h-12 w-full sm:w-48 items-center justify-center rounded-xl bg-blue-600 text-white font-semibold transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95"
          >
            Start Competing
          </Link>
          <Link
            href="/problems"
            className="flex h-12 w-full sm:w-48 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 active:scale-95"
          >
            View Problems
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl border-t border-zinc-100 dark:border-zinc-900 pt-12">
          <div>
            <div className="text-3xl font-bold">10k+</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Problems</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-zinc-500 uppercase tracking-widest mt-1">Global Contests</div>
          </div>
        </div>

      </main>

      <div className="py-10 flex justify-center items-center opacity-30 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-2">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Built with Next.js"
            width={80}
            height={16}
          />
          <span className="text-xs font-mono uppercase">Engineered by Tiwari</span>
        </div>
      </div>
    </div>
  );
}
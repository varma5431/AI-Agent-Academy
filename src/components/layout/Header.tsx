import Link from "next/link";

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">AI Agent</span> Academy
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Home
          </Link>
          <Link href="/courses" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Courses
          </Link>
          <Link href="/playground" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Playground
          </Link>
          <Link href="/pricing" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
            Pricing
          </Link>
        </nav>
      </div>
    </header>
  );
}

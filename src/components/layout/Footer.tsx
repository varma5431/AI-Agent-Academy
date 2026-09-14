export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} AI Agent Academy. All rights reserved.</p>
        <p className="text-xs text-zinc-400 dark:text-zinc-600">Subscription-based AI Agent Learning Platform</p>
      </div>
    </footer>
  );
}

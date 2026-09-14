export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center space-y-8 py-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
        🚀 Next-Gen AI Developer Education
      </div>

      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl">
        Master Autonomous <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">AI Agents</span>
      </h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
        Interactive, subscription-based learning platform for building, orchestrating, and deploying production-ready AI agents.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <a
          href="#explore"
          className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-md transition-all"
        >
          Explore Academy
        </a>
        <a
          href="https://github.com/varma5431/AI-Agent-Academy"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 font-medium transition-all"
        >
          View Repository
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mt-12 text-left">
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm">
          <h2 className="font-bold text-lg mb-2">📚 Interactive Tutorials</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Step-by-step guides inspired by top developer platforms, tailored specifically for AI Agent frameworks.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm">
          <h2 className="font-bold text-lg mb-2">⚡ Agent Playground</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Test and evaluate prompt strategies, tool calling, and multi-agent coordination in real-time.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm">
          <h2 className="font-bold text-lg mb-2">🛡 Production Patterns</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Learn security, state persistence, memory management, and error handling for autonomous agents.
          </p>
        </div>
      </div>
    </section>
  );
}

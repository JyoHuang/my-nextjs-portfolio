import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-stone-50/80 dark:border-zinc-800 dark:bg-stone-900/30">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} 個人作品集 · 求職用
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-zinc-600 transition hover:text-[var(--gold-600)] dark:text-zinc-400 dark:hover:text-[var(--gold-400)]"
            >
              關於我
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-zinc-600 transition hover:text-[var(--gold-600)] dark:text-zinc-400 dark:hover:text-[var(--gold-400)]"
            >
              作品
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

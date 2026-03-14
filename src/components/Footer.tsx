import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-light)] bg-[var(--surface-alt)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-[var(--muted)]">
            © {new Date().getFullYear()} 個人作品集 · 求職用
          </p>
          <div className="flex gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--brand-600)]"
            >
              關於我
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--brand-600)]"
            >
              作品
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

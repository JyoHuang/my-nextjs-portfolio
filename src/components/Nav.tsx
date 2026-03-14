"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於我" },
  { href: "/skills", label: "技術" },
  { href: "/projects", label: "作品" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 shadow-[inset_0_-1px_0_0_var(--gold-200)] backdrop-blur-sm dark:border-zinc-800 dark:bg-stone-950/95 dark:shadow-[inset_0_-1px_0_0_rgba(212,168,39,0.2)]">
      <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-zinc-900 dark:text-white"
        >
          Joey
        </Link>
        <ul className="flex gap-1 sm:gap-2">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-[var(--gold-100)] text-[var(--gold-700)] dark:bg-[var(--gold-100)] dark:text-[var(--gold-400)]"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-stone-800 dark:hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

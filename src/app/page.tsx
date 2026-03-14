import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--gold-50)] via-white to-stone-50/80 px-6 py-14 text-center shadow-lg dark:from-stone-900/80 dark:via-stone-900/50 dark:to-stone-950/80 sm:px-12 sm:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--gold-600)] dark:text-[var(--gold-400)]">
          Android App 開發者
        </p>
        <h1 className="mb-5 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          你好，我是 Joey
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          專注於 Android 原生開發，用 Kotlin 與 Jetpack 打造流暢好用的 App。
          喜歡把想法做成產品，這裡有我的經歷與作品，歡迎看看。
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="rounded-full bg-[var(--gold-500)] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[var(--gold-600)] hover:shadow-lg dark:bg-[var(--gold-500)] dark:hover:bg-[var(--gold-600)]"
          >
            關於我
          </Link>
          <Link
            href="/projects"
            className="rounded-full border-2 border-[var(--gold-400)] bg-white px-6 py-3 text-sm font-semibold text-[var(--gold-700)] transition hover:scale-105 hover:bg-[var(--gold-50)] dark:border-[var(--gold-500)] dark:bg-transparent dark:text-[var(--gold-400)] dark:hover:bg-[var(--gold-100)]"
          >
            看作品
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-6 sm:grid-cols-3 sm:gap-8">
        <Link
          href="/about"
          className="group hover-lift rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/60"
        >
          <span className="text-3xl" aria-hidden>👤</span>
          <h2 className="mt-4 font-semibold text-zinc-900 dark:text-white">
            關於我
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            學經歷、專長與求職方向
          </p>
        </Link>
        <Link
          href="/skills"
          className="group hover-lift rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/60"
        >
          <span className="text-3xl" aria-hidden>🛠</span>
          <h2 className="mt-4 font-semibold text-zinc-900 dark:text-white">
            技術棧
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            熟悉的語言、框架與工具
          </p>
        </Link>
        <Link
          href="/projects"
          className="group hover-lift rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/60"
        >
          <span className="text-3xl" aria-hidden>📱</span>
          <h2 className="mt-4 font-semibold text-zinc-900 dark:text-white">
            作品專題
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            實際開發的 App 與專案介紹
          </p>
        </Link>
      </section>
    </div>
  );
}

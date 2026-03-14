import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於我 | Joey 個人作品集",
  description: "Android App 開發者 Joey 的學經歷、專長與求職方向。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        關於我
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        學經歷與求職方向簡介，方便您快速認識我。
      </p>

      <section className="mt-12 space-y-10">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            自我介紹
          </h2>
          <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
            我是 Joey，Android 應用程式開發者，有三年以上的開發經驗。擅長使用 Kotlin 與 Jetpack Compose 建置介面，
            熟悉 MVVM 架構與 Jetpack 元件（Room、WorkManager、Navigation 等），曾參與消費型 App 與企業內部工具的開發與維護。
            喜歡把需求拆解成可執行的功能、寫出好維護的程式，也樂於學習新技術。
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            學歷
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600 dark:text-zinc-400">
            <li>國立○○大學 — 資訊工程學系 — 2021 年畢業</li>
            <li>專題：Android 即時通訊相關應用（Kotlin + Firebase）</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            經歷
          </h2>
          <ul className="mt-2 space-y-5 text-zinc-600 dark:text-zinc-400">
            <li>
              <span className="font-medium text-zinc-900 dark:text-white">
                某某科技股份有限公司
              </span>
              <br />
              Android 工程師 · 2021 年 7 月 — 至今
              <br />
              負責公司主力 App 的功能開發與維護，包含 Jetpack Compose 重構、與後端 API 串接、
              效能優化與 crash 分析；參與需求討論與技術選型。
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-white">
                ○○新創（實習）
              </span>
              <br />
              Android 開發實習生 · 2020 年 6 月 — 2021 年 2 月
              <br />
              參與內部工具 App 開發，使用 Kotlin、Retrofit、Room，實作表單與推播通知流程。
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            求職方向
          </h2>
          <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
            希望擔任 Android 工程師或行動端開發，偏好產品型團隊或新創環境，能參與從 0 到 1 的產品開發與迭代。
            也願意接觸跨平台或後端協作，持續擴充技術廣度。
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            聯絡方式
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Email：joey.example@gmail.com
            <br />
            GitHub：github.com/joey-android
            <br />
            LinkedIn：linkedin.com/in/joey-android
          </p>
        </div>
      </section>

      <div className="mt-12 flex gap-4">
        <Link
          href="/skills"
          className="rounded-full bg-[var(--gold-500)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[var(--gold-600)] dark:bg-[var(--gold-500)] dark:hover:bg-[var(--gold-600)]"
        >
          看技術棧
        </Link>
        <Link
          href="/projects"
          className="rounded-full border-2 border-[var(--gold-400)] px-5 py-2.5 text-sm font-semibold text-[var(--gold-700)] transition hover:bg-[var(--gold-50)] dark:border-[var(--gold-500)] dark:text-[var(--gold-400)] dark:hover:bg-[var(--gold-100)]"
        >
          看作品
        </Link>
      </div>
    </div>
  );
}

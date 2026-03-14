import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "關於我 | Joey 個人作品集",
  description: "Android App 開發者 Joey 的學經歷、專長與求職方向。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
        關於我
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        學經歷與求職方向簡介，方便您快速認識我。
      </p>

      <section className="mt-16 space-y-8">
        <div className="rounded-3xl border border-[var(--border-light)] bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover-lift">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            自我介紹
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            我是 Joey，Android 應用程式開發者，有三年以上的開發經驗。擅長使用 Kotlin 與 Jetpack Compose 建置介面，
            熟悉 MVVM 架構與 Jetpack 元件（Room、WorkManager、Navigation 等），曾參與消費型 App 與企業內部工具的開發與維護。
            喜歡把需求拆解成可執行的功能、寫出好維護的程式，也樂於學習新技術。
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border-light)] bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover-lift">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            學歷
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--muted)]">
            <li>國立○○大學 — 資訊工程學系 — 2021 年畢業</li>
            <li>專題：Android 即時通訊相關應用（Kotlin + Firebase）</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--border-light)] bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover-lift">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            經歷
          </h2>
          <ul className="mt-4 space-y-6 text-[var(--muted)]">
            <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-[var(--brand-400)]">
              <span className="font-bold text-[var(--foreground)] text-lg">
                某某科技股份有限公司
              </span>
              <br />
              <span className="text-[var(--brand-600)] font-medium">Android 工程師</span> · 2021 年 7 月 — 至今
              <br />
              <p className="mt-2 text-[var(--muted)]">
                負責公司主力 App 的功能開發與維護，包含 Jetpack Compose 重構、與後端 API 串接、
                效能優化與 crash 分析；參與需求討論與技術選型。
              </p>
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-[var(--brand-300)]">
              <span className="font-bold text-[var(--foreground)] text-lg">
                ○○新創（實習）
              </span>
              <br />
              <span className="text-[var(--brand-600)] font-medium">Android 開發實習生</span> · 2020 年 6 月 — 2021 年 2 月
              <br />
              <p className="mt-2 text-[var(--muted)]">
                參與內部工具 App 開發，使用 Kotlin、Retrofit、Room，實作表單與推播通知流程。
              </p>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-[var(--border-light)] bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover-lift">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            求職方向
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            希望擔任 Android 工程師或行動端開發，偏好產品型團隊或新創環境，能參與從 0 到 1 的產品開發與迭代。
            也願意接觸跨平台或後端協作，持續擴充技術廣度。
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border-light)] bg-white p-8 sm:p-10 shadow-[var(--shadow-soft)] hover-lift">
          <h2 className="text-2xl font-bold text-[var(--foreground)]">
            聯絡方式
          </h2>
          <p className="mt-4 text-[var(--muted)] space-y-2">
            <span className="block font-medium">Email：joey.example@gmail.com</span>
            <span className="block font-medium">GitHub：github.com/joey-android</span>
            <span className="block font-medium">LinkedIn：linkedin.com/in/joey-android</span>
          </p>
        </div>
      </section>

      <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/skills"
          className="rounded-full bg-[var(--brand-500)] px-8 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--brand-600)] text-center w-full sm:w-auto"
        >
          看技術棧
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-[var(--brand-200)] bg-white px-8 py-3.5 text-base font-semibold text-[var(--brand-700)] transition-all duration-300 hover:bg-[var(--brand-50)] text-center w-full sm:w-auto"
        >
          看作品專題
        </Link>
      </div>
    </div>
  );
}

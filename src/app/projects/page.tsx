import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "作品專題 | Joey 個人作品集",
  description: "Joey 的 Android App 與相關專案作品介紹。",
};

const projects = [
  {
    id: "project-1",
    title: "記帳小幫手",
    summary:
      "以 Kotlin 與 Jetpack Compose 開發的個人記帳 App，支援多分類、月報表圖表與 CSV 匯出，介面遵循 Material 3 設計。",
    tech: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Material 3"],
    highlights: [
      "使用 Compose 從頭打造 UI，支援深色模式與動態顏色",
      "Room 本地資料庫，支援分類、標籤與統計查詢",
      "月／年報表以圖表呈現，並可匯出 CSV 備份",
    ],
    link: "https://github.com/JyoHuang/my-nextjs-portfolio",
  },
  {
    id: "project-2",
    title: "公司內部簽核 App",
    summary:
      "企業內部使用的審批與表單填寫 App，與後端 REST API 串接，支援推播通知、離線草稿與多角色權限。",
    tech: ["Kotlin", "Retrofit", "Hilt", "WorkManager", "Jetpack Navigation"],
    highlights: [
      "Retrofit + OkHttp 串接 REST API，含 Token 刷新與錯誤處理",
      "WorkManager 排程同步與推播通知整合",
      "離線時表單可暫存為草稿，連線後自動送出",
    ],
    link: null,
  },
  {
    id: "project-3",
    title: "番茄鐘練習器",
    summary:
      "個人 side project 的專注力訓練工具，提供番茄鐘計時、短休息與統計頁面，介面簡潔、操作直覺。",
    tech: ["Kotlin", "Android SDK", "Jetpack", "Foreground Service"],
    highlights: [
      "使用 Foreground Service 在背景維持計時，支援通知列控制",
      "簡潔單一 Activity + Fragment 架構，易於擴充設定與統計",
      "統計頁面記錄每日專注時數，以簡單圖表呈現",
    ],
    link: "https://github.com",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
        作品專題
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        實際開發的 Android App 與專案，展示技術應用與成果。
      </p>

      <ul className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="hover-lift rounded-3xl p-8 sm:p-10 flex flex-col h-full shadow-[var(--shadow-soft)]"
          >
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              {project.title}
            </h2>
            <p className="mt-3 leading-relaxed text-[var(--muted)]">
              {project.summary}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-[var(--brand-50)] px-3 py-1 text-xs font-semibold text-[var(--brand-600)]"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-6 flex-grow list-inside list-disc space-y-2 text-sm text-[var(--muted)]">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {project.link && (
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-[var(--brand-600)] transition-colors hover:text-[var(--brand-800)] group"
                >
                  查看專案 / 下載
                  <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/skills"
          className="rounded-full bg-[var(--brand-500)] px-8 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--brand-600)] text-center w-full sm:w-auto"
        >
          看技術棧
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-[var(--brand-200)] bg-white px-8 py-3.5 text-base font-semibold text-[var(--brand-700)] transition-all duration-300 hover:bg-[var(--brand-50)] text-center w-full sm:w-auto"
        >
          關於我
        </Link>
      </div>
    </div>
  );
}

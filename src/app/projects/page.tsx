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
    link: "https://github.com",
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
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        作品專題
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        實際開發的 Android App 與專案，展示技術應用與成果。
      </p>

      <ul className="mt-12 space-y-8">
        {projects.map((project) => (
          <li
            key={project.id}
            className="hover-lift rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              {project.title}
            </h2>
            <p className="mt-2 leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[var(--gold-100)] px-3 py-1 text-xs font-medium text-[var(--gold-700)] dark:text-[var(--gold-400)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {project.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-[var(--gold-600)] hover:underline dark:text-[var(--gold-400)]"
              >
                查看專案 / 下載 →
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex gap-4">
        <Link
          href="/skills"
          className="rounded-full bg-[var(--gold-500)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[var(--gold-600)] dark:bg-[var(--gold-500)] dark:hover:bg-[var(--gold-600)]"
        >
          看技術棧
        </Link>
        <Link
          href="/about"
          className="rounded-full border-2 border-[var(--gold-400)] px-5 py-2.5 text-sm font-semibold text-[var(--gold-700)] transition hover:bg-[var(--gold-50)] dark:border-[var(--gold-500)] dark:text-[var(--gold-400)] dark:hover:bg-[var(--gold-100)]"
        >
          關於我
        </Link>
      </div>
    </div>
  );
}

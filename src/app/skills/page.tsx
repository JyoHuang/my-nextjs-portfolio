import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "技術棧 | 個人作品集",
  description: "Android 開發相關的程式語言、框架與工具。",
};

const skillCategories = [
  {
    title: "程式語言",
    items: ["Kotlin", "Java"],
    description:
      "以 Kotlin 為主進行 Android 開發，具備 Java 閱讀與維護能力，能閱讀既有 Java 專案並逐步重構。",
  },
  {
    title: "Android 核心",
    items: [
      "Android SDK",
      "Jetpack Compose",
      "View System",
      "Material Design",
      "第三方 SDK 串接",
    ],
    description:
      "熟悉 Android 官方技術棧與 UI 開發方式，能依產品需求選擇合適的 UI 技術與元件。",
  },
  {
    title: "架構與 Jetpack",
    items: [
      "MVVM / MVI",
      "Room",
      "WorkManager",
      "Navigation",
      "Hilt / Dagger",
      "LiveData / Flow",
    ],
    description:
      "使用常見架構模式與 Jetpack 元件建構可維護的 App，包含資料快取、背景排程與多畫面導覽。",
  },
  {
    title: "網路與資料處理",
    items: ["RESTful API", "Retrofit", "OkHttp", "JSON / Moshi", "Error Handling"],
    description:
      "與後端 API 串接、封裝網路層、處理例外與錯誤回應，維持良好的使用體驗。",
  },
  {
    title: "品質與追蹤",
    items: ["Unit Test", "Crashlytics", "Firebase Analytics", "Log 分析"],
    description:
      "撰寫單元測試、使用追蹤工具觀察使用行為與錯誤來源，持續改善產品品質。",
  },
  {
    title: "協作與工具",
    items: ["Git", "Gradle", "Android Studio", "CI / CD", "Figma 協作"],
    description:
      "版本控管、建置流程與設計協作，能在團隊中順暢協作並維持穩定釋出。",
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        技術棧
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        熟悉與使用中的技術，方便您評估與職缺的匹配度。
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <section
            key={category.title}
            className="hover-lift rounded-2xl border-2 border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-700 dark:bg-stone-900/50"
          >
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              {category.title}
            </h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {category.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-[var(--gold-100)] px-3 py-1 text-sm font-medium text-[var(--gold-700)] dark:text-[var(--gold-500)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 flex gap-4">
        <Link
          href="/projects"
          className="rounded-full bg-[var(--gold-500)] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:scale-105 hover:bg-[var(--gold-600)] dark:bg-[var(--gold-500)] dark:hover:bg-[var(--gold-600)]"
        >
          看作品專題
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

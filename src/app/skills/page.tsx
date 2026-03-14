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
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-5xl">
        技術棧
      </h1>
      <p className="mt-4 text-lg text-[var(--muted)]">
        熟悉與使用中的技術，方便您評估與職缺的匹配度。
      </p>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {skillCategories.map((category) => (
          <section
            key={category.title}
            className="hover-lift rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-soft)] flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              {category.title}
            </h2>
            <p className="mt-3 text-[var(--muted)] leading-relaxed flex-grow">
              {category.description}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg bg-[var(--brand-50)] px-3 py-1.5 text-sm font-semibold text-[var(--brand-600)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-20 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/projects"
          className="rounded-full bg-[var(--brand-500)] px-8 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--brand-600)] text-center w-full sm:w-auto"
        >
          看作品專題
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

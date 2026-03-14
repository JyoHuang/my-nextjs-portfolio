import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--background)] overflow-hidden">
      {/* 裝飾性背景氣泡 (Light, Fresh Blobs) */}
      <div className="blob-shape bg-[var(--brand-200)] w-[500px] h-[500px] top-[-100px] left-[-200px]" />
      <div className="blob-shape bg-[var(--accent-teal)] w-[400px] h-[400px] bottom-[10%] right-[-150px] opacity-20" />
      <div className="blob-shape bg-[var(--brand-100)] w-[600px] h-[600px] top-[30%] left-[60%] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        {/* 清新風格 Hero 區塊 */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-20 lg:mb-32">
          {/* 左側：文字與按鈕 */}
          <div className="text-center lg:text-left mx-auto max-w-2xl lg:mx-0">
            <div className="animate-in-1 mb-6 inline-flex items-center rounded-full border border-[var(--brand-200)] bg-[var(--brand-50)] px-4 py-1.5 text-sm font-semibold text-[var(--brand-600)] shadow-sm">
              <span className="mr-2 flex h-2 w-2 rounded-full bg-[var(--brand-500)]"></span>
              Android Developer
            </div>
            
            <h1 className="animate-in-2 mb-8 text-5xl font-extrabold tracking-tight text-[var(--foreground)] sm:text-7xl leading-[1.15]">
              你好，我是 <br className="hidden lg:block"/>
              <span className="text-brand-gradient">Joey</span>
            </h1>
            
            <p className="animate-in-3 mb-10 text-lg md:text-xl font-normal leading-relaxed text-[var(--muted)] max-w-xl mx-auto lg:mx-0">
              專注於 Android 原生開發，用 Kotlin 與 Jetpack 打造流暢好用的極致體驗。
              <br className="hidden sm:block" />
              喜歡將想法雕琢為完美產品，這裡收錄了我的技術軌跡與匠心之作。
            </p>
            
            <div className="animate-in-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
              <Link
                href="/about"
                className="w-full sm:w-auto rounded-full bg-[var(--brand-500)] px-10 py-4 text-base font-semibold text-white shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--brand-600)] focus:ring-4 focus:ring-[var(--brand-200)]"
              >
                立刻探索旅程
              </Link>
              <Link
                href="/projects"
                className="w-full sm:w-auto rounded-full border-2 border-[var(--brand-200)] bg-white px-10 py-4 text-base font-semibold text-[var(--brand-700)] transition-all duration-300 hover:bg-[var(--brand-50)] hover:border-[var(--brand-300)]"
              >
                鑑赏精選作品
              </Link>
            </div>
          </div>

          {/* 右側：3D 立體可互動手機 */}
          <div className="animate-in-3 relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0 perspective-container">
            <PhoneMockup />
          </div>
        </section>

        {/* 模塊區塊：大圓角卡片與留白 (Webnode 特色) */}
        <section className="mt-28 grid gap-8 md:grid-cols-3">
          <Link
            href="/about"
            className="group hover-lift rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[var(--shadow-soft)]"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-50)] text-3xl text-[var(--brand-500)] transition-transform duration-300 group-hover:scale-110">
              👤
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)]">
              關於我
            </h2>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              淬鍊技術，追求卓越。
              <br/>探索我的學經歷與專業方向。
            </p>
          </Link>

          <Link
            href="/skills"
            className="group hover-lift rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[var(--shadow-soft)]"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-50)] text-3xl text-[var(--accent-teal)] transition-transform duration-300 group-hover:scale-110">
              ⚡️
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)]">
              技術棧
            </h2>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              精雕細琢的開發工具。
              <br/>熟悉的語言與現代架構設計。
            </p>
          </Link>

          <Link
            href="/projects"
            className="group hover-lift rounded-[2rem] p-10 flex flex-col items-center text-center shadow-[var(--shadow-soft)]"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-50)] text-3xl text-[var(--accent-purple)] transition-transform duration-300 group-hover:scale-110">
              💎
            </div>
            <h2 className="mb-3 text-2xl font-bold text-[var(--foreground)]">
              作品專題
            </h2>
            <p className="text-base leading-relaxed text-[var(--muted)]">
              注入靈魂的實際產出。
              <br/>一覽精心打造的 Android App。
            </p>
          </Link>
        </section>
      </div>
    </div>
  );
}

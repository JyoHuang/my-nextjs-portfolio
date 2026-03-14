# Joey — Android Developer Portfolio (Next.js)

一個以 **Android App 開發者 Joey** 為主角的多頁面作品集網站，目標是讓面試官能在短時間內理解：
**我做過什麼、擅長什麼、以及我能帶來什麼價值**。

- **風格**：白金專業底色 + 更活潑的卡片層次與 hover 微動效
- **內容**：關於我／技術棧／作品專題（目前為範例資料，可快速替換成你的真實資訊）

## Pages

- **`/`**：首頁（定位、簡介、CTA）
- **`/about`**：關於我（自我介紹、學經歷、求職方向、聯絡方式）
- **`/skills`**：技術棧（Android 核心、架構、工具）
- **`/projects`**：作品專題（摘要、技術標籤、亮點、連結）

## Tech Stack

- **Framework / Runtime**
  - **Next.js 16（App Router）**：使用 `src/app` 結構、多頁面路由、`Metadata` SEO 設定
  - **React 19**：以函式型元件為主，簡潔的 UI 組合與狀態管理
  - **TypeScript**：型別安全，讓元件 props 與資料結構更清楚

- **UI & Styling**
  - **Tailwind CSS v4**：原子化 class + `globals.css` 中的 CSS 變數（白金配色）
  - **客製主題**：`--gold-*` 金色系變數、`--accent` 等，用於按鈕與重點標示
  - **Geist Font**：透過 `next/font` 載入，搭配白金風格提升整體質感
  - **元件結構**：共用 `Nav` / `Footer` 元件，維持跨頁一致的導覽與頁腳

- **Code Quality**
  - **ESLint 9 + `eslint-config-next`**：統一程式風格、避免常見錯誤
  - **Type 定義**：`@types/react`、`@types/node` 等型別支援

- **Others**
  - **NPM** 作為套件管理工具
  - 預設支援未來部署到 **Vercel** 或任何 Next.js 相容平台

## Getting Started

安裝依賴與啟動開發伺服器：

```bash
npm install
npm run dev
```

打開 `http://localhost:3000` 預覽。

## Customize（把範例換成你的）

你最常會改的檔案在這裡：

- **名字 / 首頁文案**：`src/app/page.tsx`
- **關於我內容**：`src/app/about/page.tsx`
- **技術分類與標籤**：`src/app/skills/page.tsx`
- **作品專題資料**：`src/app/projects/page.tsx`（`projects` 陣列）

建議替換順序：

1. `about`：先把 Email / GitHub / LinkedIn 換成真實資訊
2. `projects`：每個專案填「一句話摘要 + 3 個亮點 + 連結」
3. `skills`：保留你最有把握能聊深入的技能（面試更好發揮）

## Styling Notes

- **主色**：金色系 CSS 變數在 `src/app/globals.css`（`--gold-*`）
- **卡片 hover 微動效**：`globals.css` 的 `.hover-lift`
- **導覽列 / Footer**：`src/components/Nav.tsx`、`src/components/Footer.tsx`

## Scripts

```bash
npm run dev     # local dev
npm run build   # production build
npm start       # start production server
npm run lint    # lint
```

## Deploy

最簡單的方式是部署到 Vercel。也可以用任何支援 Node.js 的平台部署 Next.js。

- Next.js Deploy 文件：`https://nextjs.org/docs/app/building-your-application/deploying`

# miniyuan-cv

一份极简、可打印的个人简历网页（Next.js 14 + React + TypeScript + Tailwind CSS），
由 `cv`（Bartosz Jarocki 的 CV 模板 + 个人数据定制）精简而来：
删除了与“简历内容展示/打印”无关的全部代码，屏幕与打印输出的简历效果与 `cv` 保持一致。

## 快速开始

```bash
# 1. 首次使用：复制占位数据为真实数据文件，然后填入你自己的信息
cp src/data/resume-data.example.tsx src/data/resume-data.tsx

# 2. 安装依赖并运行
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # 生产构建
pnpm start      # 启动生产服务
```

打印简历：直接在浏览器中 `Ctrl/Cmd + P`（页面已针对打印优化，会自动隐藏交互元素、调整排版）。

代码检查与格式化（Biome）：

```bash
pnpm check      # lint + format 检查
pnpm check:fix  # 自动修复
```

## 简历内容与隐私

简历数据放在 `src/data/` 目录，页面统一读取其中的 `RESUME_DATA`。

- **`src/data/resume-data.tsx` —— 你的真实数据文件（包含姓名、联系方式等敏感信息）**。
  该路径已被加入 `.gitignore`，**永远不会提交到仓库**；页面实际加载的就是这个文件，
  请在其中维护你的真实简历内容（姓名、简介、课程/成绩、技能、项目、联系方式）。
- **`src/data/resume-data.example.tsx` —— 占位示例文件（不含任何个人信息）**，随仓库提交，
  用于模板展示与参考。首次使用执行：
  `cp src/data/resume-data.example.tsx src/data/resume-data.tsx`，然后编辑 `resume-data.tsx` 即可。
- 头像照片：个人照片 `public/selfie.jpg` 同样已加入 `.gitignore` 并从仓库移除（仓库不含个人照片）。
  本地如需显示照片，把照片放回 `public/selfie.jpg` 即可（仍会被 git 忽略）；
  不放照片时页面会以姓名首字母（`initials`）显示占位头像。

## 相对 cv 精简掉了什么

被删除的“非简历本体”代码/文件/依赖：

- **GraphQL API**：`src/app/graphql/`、`src/apollo/`，以及 Apollo Server、type-graphql、
  class-validator、graphql、graphql-scalars、reflect-metadata、`@as-integrations/next` 等依赖
  （原实现与 `work → coursework` 数据改造后已不一致/不可用，且简历展示完全用不到）。
- **Ctrl/⌘+J 命令菜单**：`command-menu.tsx`、`ui/command.tsx`、`ui/dialog.tsx`、`ui/drawer.tsx` 等，
  以及 cmdk、vaul、`@radix-ui/react-dialog`、`@radix-ui/react-avatar` 等依赖。
- **统计**：`@vercel/analytics` 及布局中的 `<Analytics />`。
- **SEO/分享等非可见部分**：`opengraph-image.tsx`、`sitemap.ts`、JSON-LD 结构化数据
  （`structured-data.ts`），并将元信息中的 `cv.jarocki.me`、`@BartoszJarocki` 等模板残留移除。
- **加载/容错脚手架**：`loading.tsx`、`section-skeleton.tsx`、`section-error-boundary.tsx`、
  `error-boundary.tsx` 及页面中的 `Suspense` 包裹（纯静态页面无需）。
- **死代码与残留**：未再引用的公司 logo（`src/images/logos/`）、`ui/avatar.tsx`、模板残留的
  “Wrocław 大学”教育条目与 `locationLink`、项目链接中未展示的 `label` 字段等。
- **其它**：Dockerfile / docker-compose / LICENSE / components.json 等模板文件。

依赖从 30+ 项精简到 8 个运行时依赖；`tsconfig.json` 去掉装饰器相关配置；
Tailwind 去掉 `tailwindcss-animate` 插件与暗色主题变量（页面始终为浅色、无动画组件引用）。

### 两处不影响外观的实现调整

1. 字体：`cv` 用 `next/font/google` 加载 Inter（中文内容实际仍回退到系统中文字体，且需要联网）。
   这里改为 Tailwind 的系统字体栈（含 `Microsoft YaHei`/`PingFang SC` 等中文字体），渲染效果一致且可离线构建。
2. 头像：`next.config.js` 开启 `images.unoptimized`，避免自托管时对图片优化器的额外依赖；
   真实照片不随仓库提交（见上节），无照片时显示首字母占位头像。

## 页面结构

- `src/app/page.tsx` — 单页简历：Header（姓名/简介/联系方式/头像）→ About → Coursework → Skills → Projects
- `src/app/components/` — 各分区组件（样式与原 cv 逐字一致，含移动端与打印布局）
- `src/components/ui/` — 仅保留实际用到的 badge / button / card / section
- `src/data/` — 简历数据：`resume-data.example.tsx`（占位示例，随仓库提交）+ `resume-data.tsx`（真实数据，被 .gitignore 忽略）

## 部署

支持任意可运行 Next.js 的平台（Vercel、Node 服务器、Docker 等），按 Next.js 常规方式部署即可。

# miniyuan-cv

一份极简、可打印的个人简历网页（Next.js 14 + React + TypeScript + Tailwind CSS）。
参考自 [cv](https://github.com/BartoszJarocki/cv)。

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

## 简历内容

简历数据放在 `src/data/` 目录，页面统一读取其中的 `RESUME_DATA`。

- `src/data/resume-data.tsx`：真实数据文件。请在其中维护你的真实简历内容（姓名、简介、科研经历、获奖情况、课程/成绩、技能、项目、联系方式）。
- `src/data/resume-data.example.tsx`：示例文件，随仓库提交，
- 头像照片：个人照片 `public/selfie.jpg`。不放照片时页面会以姓名首字母（`initials`）显示占位头像。

import type { ResumeData } from "@/lib/types";

/**
 * 占位示例数据（不含任何个人信息），随仓库一起提交，供 fork/参考。
 *
 * 使用方法：
 *   1. 复制为真实数据文件并编辑：
 *        cp src/data/resume-data.example.tsx src/data/resume-data.tsx
 *   2. src/data/resume-data.tsx 已加入 .gitignore，不会提交到仓库；
 *      页面实际读取的就是该文件，填入你自己的信息即可。
 */
export const RESUME_DATA: ResumeData = {
  name: "张三",
  initials: "ZS",
  location: "示例城市, 示例地区",
  about: "一句话介绍自己（学校/专业/年级）",
  summary: (
    <>
      这里是个人简介（summary），可以放多行文本。说明自己的学历背景、绩点/奖项、
      技能特长与职业/学习目标。示例：某某大学 20XX 级本科生，综合绩点 X.XX，
      具备扎实的编程基础与项目实践经验，学习能力强，善于快速掌握新知。
    </>
  ),
  // 不放头像时留空即可，页面会显示姓名首字母占位头像
  avatarUrl: "",
  personalWebsiteUrl: "https://example.com",
  contact: {
    email: "you@example.com",
    tel: "13800000000",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/your-name",
        icon: "github",
      },
    ],
  },
  coursework: [
    {
      course: "示例课程一",
      badges: ["标签A", "标签B"],
      time: "20xx-xx学年 第x学期",
      grade: "95",
      description: (
        <>课程描述示例：简要写出课程内容、学到的知识与完成的项目/实验。</>
      ),
    },
    {
      course: "示例课程二",
      badges: ["标签C"],
      time: "20xx-xx学年 第x学期",
      grade: "90",
      description: "也可以直接用字符串写课程描述。",
    },
  ],
  awards: [
    {
      title: "示例奖学金",
      organization: "颁发单位",
      time: "20xx-xx学年",
      description: "奖项简介：说明奖项级别（国家级/校级等）与获奖依据。",
    },
    {
      title: "示例竞赛一等奖",
      organization: "主办单位",
      time: "20xx年xx月",
    },
  ],
  research: [
    {
      title: "示例科研项目一",
      organization: "某某大学 XX 实验室",
      role: "研究助理",
      time: "20xx-xx学年",
      description: (
        <>
          研究内容简介：课题背景、你负责的部分、使用的方法与阶段性成果，
          也可以用多行 / 列表形式展开描述。
        </>
      ),
      link: "https://example.com/research",
    },
    {
      title: "示例科研项目二",
      organization: "课题组名称",
      time: "20xx年",
      description: "进行中的科研项目简介。",
    },
  ],
  skills: ["TypeScript", "React", "Tailwind CSS"],
  projects: [
    {
      title: "示例项目一",
      techStack: ["Next.js", "PostgreSQL"],
      description: "项目简介：说明项目解决的问题、你的角色与主要成果。",
      link: "https://example.com/project-1",
    },
    {
      title: "示例项目二",
      techStack: ["React"],
      description: "进行中的项目简介。",
    },
  ],
};

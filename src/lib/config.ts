import type { icons } from "lucide-react"

interface Item {
  name: string
  desc: string
  link: string
  icon: keyof typeof icons
}

interface Config {
  github: string
  projects: Item[]
  links: Item[]
  about: { me: string; frontend: string[]; backend: string[] }
}

export const config: Config = {
  github: "https://github.com/sunls24",
  projects: [
    {
      name: "tmail",
      desc: "临时邮箱 - 匿名的一次性邮箱",
      link: "https://mail.sunls.de",
      icon: "Mail",
    },
    {
      name: "divination",
      desc: "AI 算卦 - 随机六次硬币结果，生成卦象，并使用 AI 解读",
      link: "https://divination.sunls.de",
      icon: "BrainCircuit",
    },
    {
      name: "scenemint-pro",
      desc: "AI 图片生成 - 批量出图，内置提示词库",
      link: "https://images.sunls.de/",
      icon: "Images",
    },
    {
      name: "devtools",
      desc: "简洁高效的在线工具箱｜JSON 格式化，Crontab 时间计算，Base64 / URL 编解码",
      link: "https://tool.sunls.de",
      icon: "DraftingCompass",
    },
  ],
  links: [
    {
      name: "UPTIME",
      link: "https://up.sunls.de",
      desc: "服务可用性监控",
      icon: "Activity",
    },
    {
      name: "WORKSPACE",
      link: "/workspace",
      desc: "工欲善其事，必先利其器",
      icon: "PocketKnife",
    },
  ],
  about: {
    me: "崇尚简约，少即是多，立志成为优秀的云原生/全栈工程师 💪",
    backend: ["Golang", "Python", "Docker", "Kubernetes", "Operator"],
    frontend: ["TypeScript", "React", "Next.js", "Astro"],
  },
}

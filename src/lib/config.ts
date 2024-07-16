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
  about: string
}

export const config: Config = {
  github: "https://github.com/sunls24",
  projects: [
    {
      name: "nextai",
      desc: "一个简单而优雅的 AI 聊天程序",
      link: "https://next.sunls.de",
      icon: "Sparkles",
    },
    {
      name: "temporary-mail",
      desc: "临时邮箱 - 匿名的一次性邮箱",
      link: "https://mail.sunls.de",
      icon: "Mail",
    },
    {
      name: "divination",
      desc: "AI 算卦 - 根据六次硬币随机结果，生成卦象，并使用 AI 分析",
      link: "https://divination.sunls.de",
      icon: "BrainCircuit",
    },
    {
      name: "online-tools",
      desc: "一款简洁高效的在线工具箱｜JSON 格式化，Crontab 时间计算，Base64 / URL 编解码",
      link: "https://tool.sunls.de",
      icon: "DraftingCompass",
    },
  ],
  links: [
    {
      name: "UPTIME",
      link: "https://up.sunls.de",
      desc: "服务监控，看看挂了没",
      icon: "Activity",
    },
  ],
  about:
    "📮 邮箱：atob(c3VubHN4QG91dGxvb2suY29t)\n\uD83D\uDCBB 技能：Golang / JavaScript / Python\n\uD83D\uDC33 容器：Docker / Kubernetes / Operator\n\uD83D\uDC64 崇尚简约，少即是多，立志成为优秀的云原生/全栈工程师 💪",
}

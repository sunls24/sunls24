import dynamicIconImports from "lucide-react/dynamicIconImports";

interface Item {
  name: string;
  desc: string;
  link: string;
  icon: keyof typeof dynamicIconImports;
}

interface Config {
  github: string;
  projects: Item[];
  links: Item[];
  about: string;
}

export const config: Config = {
  github: "https://github.com/sunls24",
  projects: [
    {
      name: "nextai",
      desc: "一个简单而优雅的 AI 聊天程序",
      link: "https://next.sunls.de",
      icon: "sparkles",
    },
    {
      name: "temporary-mail",
      desc: "临时邮箱 - 匿名的一次性邮箱",
      link: "https://mail.sunls.de",
      icon: "mail",
    },
    {
      name: "divination",
      desc: "AI 算卦 - 根据六次硬币随机结果，生成卦象，并使用 AI 分析",
      link: "https://divination.sunls.de",
      icon: "brain-circuit",
    },
    {
      name: "vidlp",
      desc: "视频下载器 - 支持抖音/TikTok无水印，YouTube，BiliBili等视频下载",
      link: "https://dl.sunls.de",
      icon: "monitor-down",
    },
  ],
  links: [
    {
      name: "AList",
      link: "https://pan.sunls.de",
      desc: "我的网盘我做主",
      icon: "server",
    },
    {
      name: "UPTIME",
      link: "https://up.sunls.de",
      desc: "服务监控，看看挂了没",
      icon: "activity",
    },
    {
      name: "OneAPI",
      link: "https://one.sunls.de",
      desc: "OpenAI 接口分发，懂得都懂",
      icon: "split",
    },
  ],
  about:
    "📮 邮箱：atob(c3VubHN4QG91dGxvb2suY29t)\n\uD83D\uDCBB 技能：Golang / Python / JavaScript\n\uD83D\uDC33 容器：Docker / Kubernetes / Operator\n\uD83D\uDC64 崇尚简约，少即是多，立志成为优秀的全栈工程师 💪",
};

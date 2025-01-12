export interface Software {
  Name: string
  Link: string
  Icon: string
  Description: string
  Strikethrough?: boolean
  Remark?: string
}

export const software: Software[] = [
  {
    Name: "Homebrew",
    Icon: "Package",
    Link: "https://brew.sh/zh-cn/",
    Description: "macOS 缺失的软件包管理器",
  },
  {
    Name: "Raycast",
    Icon: "Zap",
    Link: "https://www.raycast.com",
    Description: "快速，可扩展的应用启动器和效率工具",
  },
  {
    Name: "iTerm2",
    Icon: "SquareTerminal",
    Link: "https://iterm2.com",
    Description: "现代化的终端，Terminal 的替代品",
  },

  {
    Name: "Zed",
    Icon: "FilePenLine",
    Link: "https://zed.dev",
    Description: "下一代代码编辑器，集成 AI，启动速度绝佳",
  },
  {
    Name: "MacZip",
    Icon: "Binary",
    Link: "https://ezip.awehunt.com",
    Description: "解压缩软件，优点是可以预览压缩包内容",
  },
  {
    Name: "Stats",
    Icon: "ChartPie",
    Link: "https://github.com/exelban/stats",
    Description: "菜单栏中的系统监视器，开源免费",
  },
  {
    Name: "Xnip",
    Icon: "Crop",
    Link: "https://xnipapp.com",
    Description: "方便好用的截图工具，免费版够用了",
  },
  {
    Name: "SFM",
    Icon: "Waypoints",
    Link: "https://github.com/SagerNet/sing-box",
    Description: "sing-box 通用代理平台，懂得都懂",
  },
  {
    Name: "mac-cleanup-py",
    Icon: "Eraser",
    Link: "https://github.com/mac-cleanup/mac-cleanup-py",
    Description: "强大的 macOS 垃圾清理脚本",
  },
  {
    Name: "GoLand",
    Icon: "Rabbit",
    Link: "https://www.jetbrains.com/go/",
    Description: "专为 Gophers 打造的专业 IDE",
  },
  {
    Name: "WebStorm",
    Icon: "LaptopMinimalCheck",
    Link: "https://www.jetbrains.com/webstorm/",
    Description: "JavaScript 和 TypeScript IDE",
  },
  {
    Name: "Rectangle",
    Icon: "PictureInPicture",
    Strikethrough: true,
    Link: "https://github.com/rxhanson/Rectangle",
    Description: "使用快捷键排列窗口",
    Remark: "Raycast 代替",
  },
  {
    Name: "Maccy",
    Icon: "ClipboardCopy",
    Strikethrough: true,
    Link: "https://github.com/p0deje/Maccy",
    Description: "轻量级剪贴板管理器",
    Remark: "Raycast 代替",
  },
]

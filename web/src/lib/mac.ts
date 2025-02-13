import type { Software } from "@/lib/software.ts"

export const mac: Software[] = [
  {
    Name: "open",
    Icon: "Command",
    Link: "https://ss64.com/mac/open.html",
    Description: "从终端打开文件",
    Command: "open file.txt",
  },
  {
    Name: "pbcopy",
    Icon: "Command",
    Link: "https://ss64.com/mac/pbcopy.html",
    Description: "将文本复制到剪切板",
    Command: "echo 'anything' | pbcopy",
  },
  {
    Name: "pbpaste",
    Icon: "Command",
    Link: "https://ss64.com/mac/pbpaste.html",
    Description: "输出剪贴板文本到终端",
  },
  {
    Name: "dot_clean",
    Icon: "Command",
    Link: "https://ss64.com/mac/dot_clean.html",
    Description: "删除 Mac 上的 ._* 文件",
    Command: "dot_clean -m .",
  },
  {
    Name: "mdls",
    Icon: "Command",
    Link: "https://ss64.com/mac/mdls.html",
    Description: "探测各种文件的元数据",
    Command: "mdls x.tar.gz",
  },
  {
    Name: "networkQuality",
    Icon: "Command",
    Link: "https://ss64.com/mac/networkquality.html",
    Description: "从终端运行互联网速度测试",
  },
  {
    Name: "caffeinate",
    Icon: "Command",
    Link: "https://ss64.com/mac/caffeinate.html",
    Description: "防止 Mac 进入休眠",
  },
  {
    Name: "powermetrics",
    Icon: "Command",
    Link: "https://ss64.com/mac/powermetrics.html",
    Description: "监控系统功耗",
  },
  {
    Name: "diskutil",
    Icon: "Command",
    Link: "https://ss64.com/mac/diskutil.html",
    Description: "管理磁盘卷",
  },
  {
    Name: "uuidgen",
    Icon: "Command",
    Link: "https://ss64.com/mac/uuidgen.html",
    Description: "生成 UUID",
  },
]

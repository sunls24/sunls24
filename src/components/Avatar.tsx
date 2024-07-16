import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export default function () {
  return (
    <Avatar className="h-20 w-20 transition-transform duration-300 hover:rotate-180">
      <AvatarImage src="/icon.webp" alt="icon" />
      <AvatarFallback>shuai</AvatarFallback>
    </Avatar>
  )
}

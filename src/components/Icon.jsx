import { icons } from "lucide-react"

const Icon = ({ name, size, className }) => {
  const LucideIcon = icons[name]
  return <LucideIcon size={size} className={className} />
}

export default Icon

import { icons, type LucideProps } from "lucide-react"
import type { ComponentType } from "react"

interface Props extends LucideProps {
  name: keyof typeof icons
}

export default function Icon({ name, ...props }: Props) {
  const LucideIcon = icons[name] as ComponentType<LucideProps>
  return <LucideIcon {...props} />
}

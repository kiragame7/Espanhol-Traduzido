import { Check } from 'lucide-react'

export function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-card">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success">
        <Check className="h-4 w-4 text-success-foreground" strokeWidth={3} />
      </span>
      <span className="leading-snug text-foreground/90">{children}</span>
    </li>
  )
}

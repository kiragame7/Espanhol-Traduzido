'use client'

import { useEffect, useState } from 'react'

function Segment({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2xl bg-accent px-6 py-4 text-4xl font-extrabold tabular-nums text-accent-foreground sm:text-5xl">
        {String(value).padStart(2, '0')}
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/80">{label}</span>
    </div>
  )
}

export function Countdown() {
  const [time, setTime] = useState({ m: 14, s: 51 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) =>
        prev.s > 0 ? { ...prev, s: prev.s - 1 } : prev.m > 0 ? { m: prev.m - 1, s: 59 } : prev,
      )
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-3">
      <Segment value={time.m} label="Minutos" />
      <span className="text-3xl font-bold text-white/60">:</span>
      <Segment value={time.s} label="Segundos" />
    </div>
  )
}

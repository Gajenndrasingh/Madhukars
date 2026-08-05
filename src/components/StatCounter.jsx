import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const step = Math.max(1, Math.round(value / 40))
    let current = 0
    const t = setInterval(() => {
      current += step
      if (current >= value) {
        current = value
        clearInterval(t)
      }
      setCount(current)
    }, 30)
    return () => clearInterval(t)
  }, [inView, value])

  return (
    <div ref={ref}>
      <div className="font-heading text-3xl md:text-4xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-white/60 mt-1">{label}</div>
    </div>
  )
}

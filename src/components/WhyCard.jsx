import { HiCheck } from 'react-icons/hi'
import Reveal from './Reveal'

export default function WhyCard({ title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="flex gap-4 p-7 bg-white border border-line rounded-card h-full">
        <div className="w-10 h-10 rounded-full bg-navy text-gold-light flex items-center justify-center shrink-0">
          <HiCheck size={20} />
        </div>
        <div>
          <h4 className="text-base font-semibold mb-1.5">{title}</h4>
          <p className="text-muted text-sm">{desc}</p>
        </div>
      </div>
    </Reveal>
  )
}

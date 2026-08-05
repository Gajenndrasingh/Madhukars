import Reveal from './Reveal'

export default function TestimonialCard({ name, role, quote, delay = 0 }) {
  const initials = name.split(' ').map((w) => w[0]).join('')
  return (
    <Reveal delay={delay}>
      <div className="bg-white border border-line rounded-card p-8 h-full flex flex-col">
        <div className="text-gold mb-4 tracking-widest text-sm">★★★★★</div>
        <p className="text-ink text-sm mb-5 flex-1">&ldquo;{quote}&rdquo;</p>
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-navy text-gold-light flex items-center justify-center font-heading font-bold shrink-0">
            {initials}
          </div>
          <div>
            <div className="font-semibold text-sm">{name}</div>
            <div className="text-xs text-muted">{role}</div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

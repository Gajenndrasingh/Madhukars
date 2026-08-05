import Reveal from './Reveal'

export default function LogoGrid({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map((label, i) => (
        <Reveal key={label} delay={i * 0.04}>
          <div className="aspect-[2/1] bg-white border border-line rounded-card-sm flex items-center justify-center text-center px-3 text-xs font-semibold text-muted hover:border-gold hover:text-navy transition-colors">
            {label}
          </div>
        </Reveal>
      ))}
    </div>
  )
}

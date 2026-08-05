import Reveal from './Reveal'

export default function ReasonCard({ icon: Icon, title, desc, index, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="relative p-8 rounded-card bg-white border border-line h-full">
        <span className="absolute top-7 right-7 font-heading font-bold text-xs text-line tracking-wide">
          0{index + 1}
        </span>
        <div className="icon-wrap">
          <Icon size={24} />
        </div>
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        <p className="text-muted text-sm">{desc}</p>
      </div>
    </Reveal>
  )
}

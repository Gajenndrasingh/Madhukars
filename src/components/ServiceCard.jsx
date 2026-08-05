import Reveal from './Reveal'

export default function ServiceCard({ icon: Icon, title, desc, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="card h-full">
        <div className="icon-wrap">
          <Icon size={24} />
        </div>
        <h3 className="text-base font-semibold mb-2.5">{title}</h3>
        <p className="text-muted text-sm">{desc}</p>
      </div>
    </Reveal>
  )
}

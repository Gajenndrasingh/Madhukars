import Reveal from './Reveal'

export default function LogoGrid({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={(i % 6) * 0.06}>
          <div className="bg-white rounded-card border border-line p-6 h-full flex flex-col items-center justify-center text-center gap-3 shadow-card">
            <img src={item.icon} alt="" className="h-14 w-14 object-contain" />
            <span className="font-semibold text-sm text-navy">{item.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
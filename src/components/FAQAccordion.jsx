import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import Reveal from './Reveal'

export default function FAQAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <Reveal key={i} delay={i * 0.05}>
            <div className="border-b border-line">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="w-full flex justify-between items-center py-6 font-heading font-semibold text-base text-navy text-left gap-4"
              >
                <span>{item.q}</span>
                <HiPlus className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} size={20} />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isOpen ? '200px' : '0px' }}
              >
                <p className="pb-6 text-muted text-sm max-w-2xl">{item.a}</p>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

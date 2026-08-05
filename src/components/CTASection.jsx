import { NavLink } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTASection({ title = 'Need a professional property valuation?' }) {
  return (
    <Reveal direction="zoom">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-soft px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '46px 46px',
            maskImage: 'radial-gradient(ellipse at 80% 20%, black, transparent 70%)',
          }}
        />
        <h2 className="relative z-10 text-white text-2xl md:text-4xl max-w-lg text-center md:text-left">{title}</h2>
        <div className="relative z-10 shrink-0">
          <NavLink to="/contact" className="btn btn-gold">
            Get In Touch
          </NavLink>
        </div>
      </div>
    </Reveal>
  )
}

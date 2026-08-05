import { NavLink } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { coreValues, timeline } from '../data/content'

export default function About() {
  return (
    <section className="section" style={{ paddingTop: '150px' }}>
      <div className="container-page">
        <Reveal>
          <div className="max-w-xl mb-16">
            <div className="eyebrow-dark">About Madhukars</div>
            <h2 className="text-2xl md:text-3xl">Two decades of disciplined, independent valuation</h2>
            <p className="text-muted mt-4">
              Madhukars Property Valuers was founded on a simple principle: a valuation report is only useful if
              it is accurate, defensible and delivered on time. That principle still guides every assignment we
              take on today.
            </p>
          </div>
        </Reveal>

        {/* Mission / Vision */}
        <div className="grid md:grid-cols-2 gap-14 mt-20">
          <Reveal direction="left">
            <div className="eyebrow-dark">Mission</div>
            <h2 className="text-xl md:text-2xl">Deliver valuation reports that institutions and individuals can rely on without hesitation</h2>
            <p className="text-muted mt-4">
              We aim to remove ambiguity from property decisions — for a homeowner refinancing a loan, or a bank
              underwriting a portfolio.
            </p>
          </Reveal>
          <Reveal direction="right">
            <div className="eyebrow-dark">Vision</div>
            <h2 className="text-xl md:text-2xl">To be the most trusted independent valuation practice in the region</h2>
            <p className="text-muted mt-4">
              Trusted not because of size, but because of consistency, discipline and the professional ethics
              behind every report we sign.
            </p>
          </Reveal>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <Reveal>
            <div className="max-w-xl mx-auto text-center mb-14">
              <div className="eyebrow-dark justify-center">Core Values &amp; Ethics</div>
              <h2 className="text-2xl md:text-3xl">What guides every assignment</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="text-center p-7">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-surface flex items-center justify-center text-navy">
                    <v.icon size={24} />
                  </div>
                  <h4 className="text-base font-semibold">{v.title}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24 max-w-2xl mx-auto">
          <Reveal>
            <div className="max-w-xl mx-auto text-center mb-14">
              <div className="eyebrow-dark justify-center">Our Journey</div>
              <h2 className="text-2xl md:text-3xl">Experience built year on year</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="relative pl-9">
              <div className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-line" />
              {timeline.map((t, i) => (
                <div key={t.year} className={`relative ${i !== timeline.length - 1 ? 'pb-11' : ''}`}>
                  <span className="absolute -left-9 top-0.5 w-4 h-4 rounded-full bg-gold border-[3px] border-white shadow-[0_0_0_2px_theme(colors.gold.DEFAULT)]" />
                  <div className="text-gold font-bold text-sm tracking-wide">{t.year}</div>
                  <h4 className="text-base mt-1.5">{t.title}</h4>
                  <p className="text-muted text-sm mt-1.5">{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Team */}
        <div className="grid md:grid-cols-2 gap-16 items-center mt-24">
          <Reveal direction="left">
            <div className="relative rounded-card overflow-hidden aspect-[4/3.1] bg-gradient-to-br from-navy to-navy-soft">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
                  backgroundSize: '34px 34px',
                }}
              />
              <div className="absolute bottom-5 left-5 bg-white rounded-card-sm px-5 py-4 shadow-card flex items-center gap-3">
                <div className="font-heading font-bold text-2xl text-navy">100%</div>
                <div className="text-xs text-muted leading-snug">Site-inspected<br />before reporting</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="eyebrow-dark">Our Team</div>
            <h2 className="text-xl md:text-2xl mb-4">Experienced, certified, independent</h2>
            <p className="text-muted mb-6">
              Our valuers combine formal qualification with years of on-ground market experience across
              residential, commercial, industrial and agricultural segments — so every report reflects both
              method and market reality.
            </p>
            <NavLink to="/contact" className="btn btn-primary">Talk to Our Team</NavLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

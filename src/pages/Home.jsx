import { NavLink } from 'react-router-dom'
import Reveal from '../components/Reveal'
import ServiceCard from '../components/ServiceCard'
import WhyCard from '../components/WhyCard'
import LogoGrid from '../components/LogoGrid'
import CTASection from '../components/CTASection'
import StatCounter from '../components/StatCounter'
import { HiCheck } from 'react-icons/hi'
import { services, solutions, whyChooseHome, clientTypesHome, stats } from '../data/content'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-navy-deep via-navy to-navy-soft pt-24 text-white">
        <div
          className="absolute inset-0 opacity-[0.16] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at 60% 40%, black 10%, transparent 70%)',
          }}
        />
        <span className="absolute w-2 h-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(200,155,60,0.18)]" style={{ top: '22%', left: '14%' }} />
        <span className="absolute w-2 h-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(200,155,60,0.18)]" style={{ top: '52%', left: '32%' }} />
        <span className="absolute w-2 h-2 rounded-full bg-gold shadow-[0_0_0_4px_rgba(200,155,60,0.18)]" style={{ top: '36%', left: '58%' }} />

        <div className="hidden md:flex absolute top-32 right-[6%] w-[118px] h-[118px] rounded-full border border-dashed border-gold/50 items-center justify-center animate-spin-slow">
          <div className="w-[86px] h-[86px] rounded-full border border-gold/40 flex items-center justify-center text-center">
            <span className="font-heading text-gold-light text-[0.62rem] tracking-widest font-bold leading-relaxed">
              CERTIFIED<br />VALUATION<br />ADVISORY
            </span>
          </div>
        </div>

        <div className="container-page relative z-10 pt-5 pb-16">
          <div className="inline-flex items-center gap-2.5 text-gold-light text-[0.82rem] tracking-[0.14em] uppercase font-semibold mb-6">
            <span className="w-7 h-px bg-gold" /> Registered &amp; Empanelled Valuers
          </div>
          <h1 className="text-white text-[2.4rem] sm:text-5xl lg:text-[4.4rem] font-bold leading-[1.08] max-w-3xl">
            Accurate Property Valuation.
            <br />
            <span className="text-gold-light">Trusted</span> Professional Advice.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Professional property valuation services for Residential, Commercial, Industrial, Agricultural and
            Financial Institutions — delivered with precision, transparency and speed.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <NavLink to="/contact" className="btn btn-gold">
              Contact Us
            </NavLink>

            <a
              href="#services-preview"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('services-preview')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Our Services
            </a>
          </div>

          <div className="mt-20 pt-9 border-t border-white/15 flex flex-wrap gap-14">
            {stats.map((s) => (
              <StatCounter
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container-page grid md:grid-cols-2 gap-16 items-center">
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
              <svg className="absolute bottom-0 left-0 right-0 h-3/5" viewBox="0 0 400 200" preserveAspectRatio="none">
                <rect x="20" y="90" width="46" height="110" fill="rgba(255,255,255,0.14)" />
                <rect x="80" y="60" width="54" height="140" fill="rgba(255,255,255,0.2)" />
                <rect x="150" y="110" width="40" height="90" fill="rgba(255,255,255,0.12)" />
                <rect x="205" y="40" width="60" height="160" fill="rgba(255,255,255,0.22)" />
                <rect x="280" y="80" width="48" height="120" fill="rgba(255,255,255,0.16)" />
                <rect x="340" y="120" width="40" height="80" fill="rgba(255,255,255,0.12)" />
              </svg>
              <div className="absolute bottom-5 left-5 bg-white rounded-card-sm px-5 py-4 shadow-card flex items-center gap-3">
                <div className="font-heading font-bold text-2xl text-navy">12+</div>
                <div className="text-xs text-muted leading-snug">Years guiding<br />property decisions</div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="eyebrow-dark">About Madhukar Associates</div>
            <h2 className="text-2xl md:text-3xl mb-5">Independent valuation advice you can build decisions on</h2>
            <p className="text-muted mb-4">
              Madhukar Associates is an independent valuation practice serving individuals, builders,
              corporates, banks and government bodies. Every report we issue is grounded in site inspection,
              verified data and defensible methodology — not guesswork.
            </p>
            <ul className="my-6 space-y-3">
              {[
                'Panel valuer for leading banks & NBFCs',
                'Reports aligned to RBI & institutional standards',
                'Confidential handling of every assignment',
              ].map((item) => (
                <li key={item} className="flex gap-2.5 items-start text-sm">
                  <HiCheck className="text-gold mt-0.5 shrink-0" size={18} /> {item}
                </li>
              ))}
            </ul>
            <NavLink to="/about" className="btn btn-primary">Learn More</NavLink>
          </Reveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section id="services-preview" className="section section-alt">
        <div className="container-page">
          <Reveal>
            <div className="max-w-xl mx-auto text-center mb-16">
              <div className="eyebrow-dark justify-center">What We Do</div>
              <h2 className="text-2xl md:text-3xl">Valuation services across every asset class</h2>
              <p className="text-muted mt-4">
                From a single residential unit to a large industrial portfolio, our valuers apply the right
                methodology for the asset and the purpose.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} desc={s.desc} delay={(i % 4) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="max-w-xl mx-auto text-center mb-16">
              <div className="eyebrow-dark justify-center">Our Solutions</div>
              <h2 className="text-2xl md:text-3xl">Beyond valuation — full-spectrum civil engineering support</h2>
              <p className="text-muted mt-4">
                As trusted solution providers, we work across five core areas so clients can rely on one team
                from valuation right through to construction.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {solutions.map((s, i) => (
              <Reveal key={s.title} delay={(i % 5) * 0.06}>
                <div className="rounded-card border border-line p-6 h-full">
                  <div className="text-gold font-heading font-bold text-sm mb-2">0{i + 1}</div>
                  <h4 className="text-base font-semibold mb-2">{s.title}</h4>
                  <p className="text-muted text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <div className="max-w-xl mx-auto text-center mb-16">
              <div className="eyebrow-dark justify-center">Why Choose Us</div>
              <h2 className="text-2xl md:text-3xl">Reports that hold up to scrutiny</h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseHome.map((w, i) => (
              <WhyCard key={w.title} title={w.title} desc={w.desc} delay={(i % 3) * 0.06} />
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section section-alt">
        <div className="container-page">
          <Reveal>
            <div className="max-w-xl mx-auto text-center mb-16">
              <div className="eyebrow-dark justify-center">Our Clients</div>
              <h2 className="text-2xl md:text-3xl">Trusted by institutions and individuals alike</h2>
            </div>
          </Reveal>
          <LogoGrid items={clientTypesHome} />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-page">
          <CTASection />
        </div>
      </section>
    </>
  )
}
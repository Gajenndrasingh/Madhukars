import Reveal from '../components/Reveal'
import LogoGrid from '../components/LogoGrid'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import { clientTypesFull, testimonials, faqs, empanelledWith, references } from '../data/content'
import { HiOutlinePhone } from 'react-icons/hi'

export default function Clients() {
  return (
    <section className="section" style={{ paddingTop: '150px' }}>
      <div className="container-page">
       <Reveal>
  <div className="max-w-xl mx-auto text-center mb-16">
    <div className="eyebrow-dark justify-center">Our Clients</div>
    <h2 className="text-2xl md:text-3xl">Across sectors, one consistent standard</h2>
    <p className="text-muted mt-4">
      We serve every category of client with the same rigour — whether the assignment is a single home
      loan or an institutional portfolio.
    </p>
  </div>
</Reveal>
<LogoGrid items={clientTypesFull} />

        {/* Empanelled With */}
        <Reveal>
          <div className="max-w-xl mx-auto text-center mt-24 mb-14">
            <div className="eyebrow-dark justify-center">Currently Empanelled With</div>
            <h2 className="text-2xl md:text-3xl">25 + working with 40+ Empaneled</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {empanelledWith.map((name) => (
            <div key={name} className="rounded-card-sm border border-line px-5 py-4 text-sm text-ink">
              {name}
            </div>
          ))}
        </div>

        {/* References */}
        <Reveal>
          <div className="max-w-xl mx-auto text-center mt-24 mb-14">
            <div className="eyebrow-dark justify-center">References</div>
            <h2 className="text-2xl md:text-3xl">Bank &amp; NBFC contacts we've worked closely with</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.05}>
              <div className="rounded-card border border-line p-6 h-full">
                <h4 className="text-base font-semibold">{r.name}</h4>
                <p className="text-muted text-sm mt-1">{r.role}</p>
                {/* <p className="text-sm mt-3 flex items-center gap-2 text-navy font-medium">
                  <HiOutlinePhone /> {r.phone}
                </p> */}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-xl mx-auto text-center mt-24 mb-16">
            <div className="eyebrow-dark justify-center">Testimonials</div>
            <h2 className="text-2xl md:text-3xl">What clients say about working with us</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 0.08} />
          ))}
        </div>

        <Reveal>
          <div className="max-w-xl mx-auto text-center mt-24 mb-14">
            <div className="eyebrow-dark justify-center">FAQ</div>
            <h2 className="text-2xl md:text-3xl">Common questions about our process</h2>
          </div>
        </Reveal>
        <FAQAccordion items={faqs} />
      </div>
    </section>
  )
}
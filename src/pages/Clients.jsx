import Reveal from '../components/Reveal'
import LogoGrid from '../components/LogoGrid'
import TestimonialCard from '../components/TestimonialCard'
import FAQAccordion from '../components/FAQAccordion'
import { clientTypesFull, testimonials, faqs } from '../data/content'

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

import Reveal from '../components/Reveal'
import ReasonCard from '../components/ReasonCard'
import CTASection from '../components/CTASection'
import { reasons } from '../data/content'

export default function WhyUs() {
  return (
    <section className="section" style={{ paddingTop: '150px' }}>
      <div className="container-page">
        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="eyebrow-dark justify-center">Why Us</div>
            <h2 className="text-2xl md:text-3xl">Nine reasons clients choose Madhukars</h2>
            <p className="text-muted mt-4">
              Every reason below reflects something we measure ourselves against on every single assignment.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ReasonCard key={r.title} icon={r.icon} title={r.title} desc={r.desc} index={i} delay={(i % 3) * 0.06} />
          ))}
        </div>

        <div className="mt-24">
          <CTASection title="Ready to work with a valuer banks already trust?" />
        </div>
      </div>
    </section>
  )
}

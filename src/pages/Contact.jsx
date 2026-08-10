import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from 'react-icons/hi'
import { officeLocations } from '../data/content'

const info = [
  {
    icon: HiOutlineLocationMarker,
    title: 'Registered Office',
    text: '38, Navkar Heights Colony, Behind Bajaj Showroom, Jaora, Distt Ratlam-457226, Madhya Pradesh',
  },
  {
    icon: HiOutlinePhone,
    title: 'Phone',
    text: '+91 87200-12162 · +91 99070-17967',
  },
  {
    icon: HiOutlineMail,
    title: 'Email',
    text: 'anuj.mehta@madhukars.in',
  },
  {
    icon: HiOutlineClock,
    title: 'Business Hours',
    text: 'Monday – Saturday, 10:00 AM – 6:30 PM',
  },
]

export default function Contact() {
  return (
    <section className="section" style={{ paddingTop: '150px' }}>
      <div className="container-page">
        <Reveal>
          <div className="max-w-xl mx-auto text-center mb-16">
            <div className="eyebrow-dark justify-center">Contact</div>
            <h2 className="text-2xl md:text-3xl">Let&rsquo;s talk about your valuation requirement</h2>
            <p className="text-muted mt-4">
              Reach out directly, or send a message and one of our valuers will respond within one business day.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <Reveal direction="left">
            <div>
              {info.map((item) => (
                <div key={item.title} className="flex gap-4 py-6 border-b border-line last:border-none">
                  <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-navy shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted text-sm">{item.text}</p>
                  </div>
                </div>
              ))}

             <div className="mt-6 rounded-card overflow-hidden aspect-[16/10] border border-line">
  <iframe
    title="Office Location"
    src="https://www.google.com/maps?q=38,Navkar%20Heights,Jaora,Ratlam,Madhya%20Pradesh&output=embed"
    className="w-full h-full"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

              <div className="mt-8 rounded-card border border-line p-6">
                <h4 className="text-base font-semibold mb-3">Branch Office</h4>
                {officeLocations.filter((o) => o.label !== 'Registered Office').map((o) => (
                  <div key={o.label} className="text-sm text-muted space-y-1">
                    <p className="font-semibold text-ink">{o.label}</p>
                    <p>{o.address}</p>
                    {o.contactPerson && <p>Contact: {o.contactPerson} · {o.phone}</p>}
                    {o.email && <p>{o.email}</p>}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
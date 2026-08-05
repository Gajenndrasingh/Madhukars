import { NavLink } from 'react-router-dom'
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import { navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/70 pt-20 pb-8">
      <div className="container-page">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 font-heading font-bold text-xl text-white mb-4">
              <span className="w-[34px] h-[34px] rounded-lg bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy font-extrabold text-sm">M</span>
              Madhukars
            </div>
            <p className="text-sm max-w-xs">Independent property valuation advisory for individuals, institutions and government bodies.</p>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className="text-sm text-white/65 hover:text-gold-light transition-colors">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Services</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>Residential Valuation</li>
              <li>Commercial Valuation</li>
              <li>Bank Loan Valuation</li>
              <li>Agricultural Land</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold mb-5 tracking-wide">Contact</h4>
            <ul className="space-y-3 text-sm text-white/65">
              <li>Civil Lines, Jabalpur, MP</li>
              <li>contact@madhukars.in</li>
              <li>+91 98XXX XXXXX</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-7">
          <p className="text-sm">© {new Date().getFullYear()} Madhukars Property Valuers. All rights reserved.</p>
          <div className="flex gap-3">
            {[FaLinkedinIn, FaTwitter, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-gold hover:border-gold hover:text-navy transition-colors"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../data/content";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  // Inner pages have no dark hero behind the header, so the header must
  // always render in its solid (opaque) state on them — only the Home
  // page is allowed to start transparent over its dark hero section.
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
  className={`fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-300 ${
    solid
      ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(10,37,64,0.08)]"
      : "bg-transparent"
  }`}
>
  <div className="container-page h-20 flex items-center justify-between">

    <NavLink to="/" className="flex items-center shrink-0 -my-6">
      <img
        src={logo}
        alt="Madhukar Associates"
        className={`w-auto object-contain transition-all duration-300 ${
          solid ? "h-32" : "h-36"
        }`}
      />
    </NavLink>

    {/* baaki code */}

        {/* Desktop nav */}
        <div className="hidden md:flex flex-1 items-center">
          <nav className="flex items-center gap-9 mx-auto">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-sm font-medium py-1 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                    isActive
                      ? "text-gold after:w-full"
                      : `after:w-0 hover:after:w-full ${
                          solid
                            ? "text-ink hover:text-gold"
                            : "text-white/90 hover:text-gold"
                        }`
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className={`btn btn-outline ml-auto transition-colors duration-300 ${
              solid ? "!border-navy/25 !text-navy hover:!border-gold" : ""
            }`}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Contact Us button: only ever rendered from md breakpoint up.
            Below md, this whole block collapses to nothing — only the
            logo and the hamburger toggle remain in the row. */}
        <div className="flex items-center gap-5">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden relative z-[1100] w-10 h-10 -mr-2 flex items-center justify-center text-2xl transition-colors duration-300 ${
              solid ? "text-navy" : "text-white"
            }`}
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Dim backdrop behind the dropdown — must render BEFORE the nav panel
          and sit at a lower z-index, otherwise it sits on top of the links
          and swallows every click before it reaches them. */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[1010] bg-navy-deep/30 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Mobile dropdown — slides down from directly under the header, Apple-style.
          Its own "Contact Us" button lives here (inside the opened panel) and
          is a different element from the top-bar one above — it only becomes
          visible once the user taps the hamburger and the panel opens. */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 z-[1020] origin-top transition-all duration-300 ease-out ${
          open
            ? "opacity-100 scale-y-100 pointer-events-auto"
            : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-xl shadow-[0_12px_30px_rgba(10,37,64,0.12)] border-t border-line">
          <div className="container-page flex flex-col py-2">
            {navLinks.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `py-4 text-base font-medium transition-colors duration-200 ${
                    i !== navLinks.length - 1 ? "border-b border-line" : ""
                  } ${isActive ? "text-gold" : "text-navy hover:text-gold"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" className="btn btn-primary w-full mt-5 mb-5">
              Contact Us
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

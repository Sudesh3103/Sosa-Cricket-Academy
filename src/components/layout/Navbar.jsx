import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import BrandLogo from '../site/BrandLogo'
import { navLinks } from '../../data/siteContent'

const baseNavClass =
  'text-sm font-bold uppercase tracking-[0.14em] transition duration-200 hover:text-[#ffca28]'

const Navbar = () => {
  const location = useLocation()
  const navRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (navRef.current) {
        setHeaderHeight(navRef.current.offsetHeight)
      }
    }

    updateHeaderHeight()
    window.addEventListener('resize', updateHeaderHeight)

    return () => window.removeEventListener('resize', updateHeaderHeight)
  }, [isOpen, isSticky])

  return (
    <>
      {isSticky ? <div aria-hidden="true" style={{ height: `${headerHeight}px` }} /> : null}

      <header
        ref={navRef}
        className={`z-40 w-full transition-all duration-300 ${
          isSticky
            ? 'fixed left-0 top-0 border-b border-white/8 bg-[#06110d]/92 shadow-[0_16px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl'
            : 'relative bg-transparent'
        }`}
      >
        <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8 ${isSticky ? 'py-3' : 'py-4'}`}>
          <BrandLogo />

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((item) => {
              const isHashLink = item.path.includes('#')

              if (isHashLink) {
                return (
                  <a key={item.label} href={item.path} className={`${baseNavClass} text-white/82`}>
                    {item.label}
                  </a>
                )
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className={({ isActive }) => `${baseNavClass} ${isActive ? 'text-[#ffca28]' : 'text-white/82'}`}
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/ground"
              className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/6 px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-white transition hover:border-[#ffca28]/55"
            >
              Book Ground
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#ffca28] px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.16em] text-[#08150e] transition hover:bg-[#ffd54f]"
            >
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white lg:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen ? (
          <div className="border-t border-white/8 bg-[#08140f] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((item) => {
                const classes = 'rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white/84'

                if (item.path.includes('#')) {
                  return (
                    <a key={item.label} href={item.path} className={classes}>
                      {item.label}
                    </a>
                  )
                }

                return (
                  <NavLink key={item.label} to={item.path} className={classes}>
                    {item.label}
                  </NavLink>
                )
              })}
              <Link
                to="/ground"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffca28] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#08150e]"
              >
                Book Ground
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  )
}

export default Navbar

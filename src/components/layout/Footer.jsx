import {  Mail, MapPin, Phone,  } from 'lucide-react'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Link } from 'react-router-dom'
import BrandLogo from '../site/BrandLogo'
import { footerLinks, siteMeta, socialLinks } from '../../data/siteContent'

const socialIcons = {
  Facebook: FaFacebookF,
  Instagram: FaInstagram,
  YouTube: FaYoutube,
}

const Footer = () => {
  return (
    <footer className="border-t border-white/8 bg-[#04100b] text-white/72">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div className="space-y-5">
          <BrandLogo compact />
          <p className="max-w-sm text-sm leading-7 text-white/62">
            Building champions on and off the field with world-class coaching, year-round indoor training and athlete-first development in Ratnagiri.
          </p>
          <div className="space-y-3 text-sm">
            <a href={`tel:${siteMeta.phoneLink}`} className="flex items-center gap-3 transition hover:text-white">
              <Phone size={16} className="text-[#ffca28]" />
              {siteMeta.phoneDisplay}
            </a>
            <a href={`mailto:${siteMeta.email}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail size={16} className="text-[#ffca28]" />
              {siteMeta.email}
            </a>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 text-[#ffca28]" />
              <span>{siteMeta.fullAddress}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label]

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white/76 transition hover:border-[#ffca28]/50 hover:text-[#ffca28]"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#ffca28]">Quick Links</h3>
          <div className="space-y-3 text-sm">
            {footerLinks.quickLinks.map((item) =>
              item.path.includes('#') ? (
                <a key={item.label} href={item.path} className="block transition hover:text-white">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.path} className="block transition hover:text-white">
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#ffca28]">Academy</h3>
          <div className="space-y-3 text-sm">
            {footerLinks.academy.map((item) => (
              <a key={item.label} href={item.path} className="block transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-sm font-extrabold uppercase tracking-[0.24em] text-[#ffca28]">Newsletter</h3>
          <p className="text-sm leading-7 text-white/62">
            Subscribe to get the latest updates about academy batches, camps and ground bookings.
          </p>
          <form className="mt-4 flex items-center overflow-hidden rounded-full border border-white/10 bg-white/6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/36"
            />
            <button
              type="submit"
              className="rounded-full bg-[#ffca28] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#08150e]"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/8 px-5 py-5 text-center text-xs text-white/42 sm:px-6 lg:px-8">
        © 2026 SOSA Cricket Academy. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

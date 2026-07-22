import { Camera, Globe, Mail, MapPin, Phone, Play } from 'lucide-react'
import { siteMeta, socialLinks } from '../../data/siteContent'

const socialIcons = {
  Facebook: Globe,
  Instagram: Camera,
  YouTube: Play,
}

const TopBar = () => {
  return (
    <div className="border-b border-white/8 bg-[linear-gradient(90deg,#0a2b16_0%,#06210f_100%)] text-white/84">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-2 text-[11px] font-semibold sm:px-6 sm:text-xs lg:px-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[#ffca28]/12 px-3 py-1 uppercase tracking-[0.2em] text-[#ffca28]">
            {siteMeta.admissionsText}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-white/72">
          <a href={`tel:${siteMeta.phoneLink}`} className="inline-flex items-center gap-2 transition hover:text-white">
            <Phone size={14} />
            {siteMeta.phoneDisplay}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPin size={14} />
            {siteMeta.location}
          </span>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="uppercase tracking-[0.18em] text-white/46">Follow Us</span>
            {socialLinks.map((item) => {
              const Icon = socialIcons[item.label]

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/78 transition hover:border-[#ffca28]/40 hover:text-[#ffca28]"
                >
                  <Icon size={14} />
                </a>
              )
            })}
            <a
              href={`mailto:${siteMeta.email}`}
              aria-label="Email"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/78 transition hover:border-[#ffca28]/40 hover:text-[#ffca28]"
            >
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar

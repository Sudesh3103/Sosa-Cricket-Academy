import { useMemo, useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Trophy,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../../components/site/CTASection'
import CountUpStat from '../../components/site/CountUpStat'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { generatedAssets, homePage, siteMeta } from '../../data/siteContent'
import { seoPages } from '../../data/seo'

const statIcons = [CalendarDays, Trophy, Users, Landmark]

const reasonIcons = {
  'Match-Ready Ground': Trophy,
  'Tournament Friendly': Star,
  'Day & Evening Slots': Clock3,
  'Pavilion & Seating': Landmark,
  'Support Facilities': ShieldCheck,
  'Trusted In Ratnagiri': MapPin,
}

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const galleryItems = useMemo(() => {
    if (activeFilter === 'All') {
      return homePage.galleryPreview.items
    }

    return homePage.galleryPreview.items.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <SiteLayout seo={seoPages.home}>
      <PageHero
        eyebrow={homePage.hero.eyebrow}
        title={
          <>
            Professional Ground For
            <span className="block text-[#ffca28]">Practice & Tournaments</span>
          </>
        }
        description={homePage.hero.description}
        backgroundImage={homePage.hero.backgroundImage}
        backgroundPoster={homePage.showcase.image}
        actions={homePage.hero.actions}
        stats={homePage.hero.highlightStats}
      />

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {homePage.stats.map((stat, index) => {
            const Icon = statIcons[index] ?? CalendarDays

            return (
              <div key={stat.label} className="flex items-center gap-4 rounded-[28px] border border-slate-200 bg-[#f8faf8] px-5 py-5 shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d2c18] text-[#ffca28]">
                  <Icon size={24} />
                </div>
                <div>
                  <p className="text-3xl font-black text-[#102216]">
                    <CountUpStat value={stat.value} />
                  </p>
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#102216]">{stat.label}</p>
                  <p className="text-sm text-slate-500">{stat.helper}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#08200f_0%,#04100b_100%)]">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black uppercase tracking-[-0.03em] text-white sm:text-4xl">Why Teams Book SOSA</h2>
          </div>

          <div className="grid border-y border-white/10 sm:grid-cols-2 lg:grid-cols-6">
            {homePage.reasons.map((reason, index) => {
              const Icon = reasonIcons[reason.title] ?? Trophy

              return (
                <div
                  key={reason.title}
                  className={`px-4 py-7 text-center ${index < homePage.reasons.length - 1 ? 'lg:border-r lg:border-white/10' : ''} ${index < 4 ? 'sm:border-b sm:border-white/10 lg:border-b-0' : ''}`}
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c59d2d]/50 bg-[#0d2c18] text-[#d9b03b]">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <p className="mt-4 text-sm font-black uppercase tracking-[0.08em] text-white">{reason.title}</p>
                  <p className="mt-2 text-xs leading-6 text-white/68">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
          <div className="overflow-hidden rounded-[32px] shadow-[0_28px_80px_rgba(8,21,14,0.12)]">
            <img src={homePage.showcase.image} alt="SOSA cricket ground aerial view" loading="lazy" decoding="async" className="h-full min-h-[360px] w-full object-cover" />
          </div>

          <div className="space-y-6">
            <SectionHeader eyebrow={homePage.showcase.eyebrow} title={homePage.showcase.heading} description={homePage.showcase.description} />
            <div className="space-y-4">
              {homePage.showcase.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#dce4da] bg-white px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ffca28]" />
                  <p className="text-sm leading-7 text-slate-600">{point}</p>
                </div>
              ))}
            </div>
            <Link
              to={homePage.showcase.action.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
            >
              {homePage.showcase.action.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ground Booking Options"
            title="Use SOSA for practice, tournaments and cricket events"
            description="The homepage now makes it clear that the main offering is the ground. Coaching exists, but ground bookings lead the experience."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {homePage.bookingOptions.map((option) => (
              <article
                key={option.id}
                className={`overflow-hidden rounded-[28px] border ${option.featured ? 'border-[#f2c53c] bg-[#ffca28]' : 'border-[#e6ebe7] bg-white'} shadow-[0_24px_60px_rgba(7,18,13,0.08)]`}
              >
                <div className={`${option.featured ? 'bg-[#f1bb07] text-[#102216]' : 'bg-[#0d2c18] text-white'} px-6 py-5`}>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em]">{option.eyebrow}</p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em]">{option.title}</h3>
                </div>
                <div className="space-y-4 px-6 py-6 text-[#102216]">
                  <div className="rounded-2xl bg-black/[0.03] px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Availability</p>
                    <p className="mt-2 text-lg font-extrabold">{option.duration}</p>
                  </div>
                  <div className="rounded-2xl bg-black/[0.03] px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Booking Type</p>
                    <p className="mt-2 text-3xl font-black">{option.price}</p>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{option.note}</p>
                  <Link
                    to="/contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] transition ${option.featured ? 'bg-[#102216] text-white hover:bg-[#19321f]' : 'bg-[#0d2c18] text-white hover:bg-[#153b23]'}`}
                  >
                    {option.button}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ground Support"
            title="Facilities that help teams and organizers"
            description="Everything around the ground is designed to make bookings smoother and the overall cricket experience more comfortable."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {homePage.facilities.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[24px] border border-[#dde3de] bg-white shadow-sm transition hover:-translate-y-1">
                <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-28 w-full object-cover" />
                <div className="px-4 py-4">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#102216]">{item.title}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 rounded-full border border-[#0d2c18]/14 bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
            >
              Explore All Facilities
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
            <div className="space-y-6 rounded-[32px] border border-[#e7ece7] bg-[#f8faf8] p-6">
              <SectionHeader eyebrow="Ground Gallery" title="See the venue before you book" description="A quick look at the ground, practice support and overall booking environment at SOSA." />
              <div className="flex flex-wrap gap-3">
                {homePage.galleryPreview.filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] transition ${activeFilter === filter ? 'bg-[#0d2c18] text-white' : 'border border-[#dbe3dc] bg-white text-slate-600 hover:border-[#0d2c18]/25'}`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {galleryItems.slice(0, 4).map((item) => (
                  <div key={`${item.category}-${item.title}`} className="overflow-hidden rounded-[22px] bg-white shadow-sm">
                    <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-36 w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="px-4 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c59d2d]">{item.category}</p>
                      <p className="mt-1 text-sm font-bold text-[#102216]">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-[#0d2c18]/14 bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
              >
                View Full Gallery
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-[32px] border border-[#e7ece7] bg-white p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c59d2d]">What Teams Say</p>
              <p className="mt-2 text-2xl font-black uppercase tracking-[-0.03em] text-[#102216]">Venue trust matters</p>
              <p className="mt-6 text-base leading-8 text-slate-600">{homePage.testimonials[0].quote}</p>
              <div className="mt-8 flex items-center gap-4 rounded-[24px] bg-[#f8faf8] px-4 py-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d2c18] text-lg font-black text-[#ffca28]">
                  {homePage.testimonials[0].name.charAt(0)}
                </div>
                <div>
                  <p className="font-black uppercase tracking-[0.02em] text-[#102216]">{homePage.testimonials[0].name}</p>
                  <p className="text-sm text-slate-500">{homePage.testimonials[0].role}</p>
                </div>
              </div>

              <div className="bg-white p-6 ">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c59d2d]">Booking Highlights</p>
              <div className="mt-6 space-y-4">
                {homePage.events.map((event) => (
                  <article key={event.title} className="rounded-[24px] border border-[#e6ece7] bg-[#f8faf8] px-5 py-5">
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#102216]">{event.title}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                      <CalendarDays size={15} className="text-[#c59d2d]" />
                      {event.date}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#0d2c18]">{event.note}</p>
                  </article>
                ))}
              </div>
            </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div className="rounded-[32px] border border-[#dce4da] bg-white p-8 shadow-sm">
            <SectionHeader
              eyebrow="Academy Also Available"
              title="Need coaching instead of just ground booking?"
              description="SOSA also runs cricket coaching batches, but the academy has its own dedicated page so the website stays clear about what each visitor is looking for."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/academy"
                className="inline-flex items-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
              >
                View Academy
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#0d2c18]/14 bg-[#f8faf8] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#102216] transition hover:border-[#0d2c18]/30"
              >
                Academy Enquiry
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] shadow-sm">
            <img src={generatedAssets.teamHuddle} alt="SOSA academy preview" loading="lazy" decoding="async" className="h-full min-h-[280px] w-full object-cover" />
          </div>
        </div>
      </section>

      <div>
        <CTASection
          title="Need a dependable cricket venue?"
          accent="Book SOSA Ground today."
          description="Whether it is a practice session or a tournament plan, we will help you schedule the right slot."
          primaryAction={{ label: 'Book Ground', href: '/contact' }}
          secondaryAction={{ label: 'View Ground', href: '/ground' }}
          backgroundImage={generatedAssets.ctaBackground}
        />
      </div>

      <section id="contact" className="bg-white pt-10 pb-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
            <div className="rounded-[32px] bg-[#f3f5f1] p-6">
              <SectionHeader eyebrow={homePage.contact.title} title="Tell us your booking requirement" description={homePage.contact.text} />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-[24px] border border-[#dce4da] bg-white px-4 py-4">
                  <Phone className="mt-1 text-[#c59d2d]" size={18} />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#102216]">Call Us</p>
                    <a href={`tel:${siteMeta.phoneLink}`} className="mt-1 block text-sm text-slate-600">
                      {siteMeta.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[24px] border border-[#dce4da] bg-white px-4 py-4">
                  <Mail className="mt-1 text-[#c59d2d]" size={18} />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#102216]">Email</p>
                    <a href={`mailto:${siteMeta.email}`} className="mt-1 block text-sm text-slate-600">
                      {siteMeta.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[24px] border border-[#dce4da] bg-white px-4 py-4">
                  <MapPin className="mt-1 text-[#c59d2d]" size={18} />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#102216]">Location</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{siteMeta.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[24px] border border-[#dce4da] bg-white px-4 py-4">
                  <Clock3 className="mt-1 text-[#c59d2d]" size={18} />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#102216]">Availability</p>
                    <p className="mt-1 text-sm text-slate-600">Morning and evening bookings available</p>
                    <p className="text-sm text-slate-600">Contact us for tournament scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#e7ece7] bg-white p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c59d2d]">Send Booking Enquiry</p>
              <form className="mt-6 space-y-4">
                <input type="text" placeholder="Your Name" className="w-full rounded-2xl border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <input type="email" placeholder="Email Address" className="w-full rounded-2xl border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <input type="tel" placeholder="Phone Number" className="w-full rounded-2xl border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <textarea placeholder="Practice, tournament or event requirement" rows="5" className="w-full rounded-[24px] border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
                >
                  Send Enquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>

            
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default Home

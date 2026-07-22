import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, Clock3, Mail, MapPin, Phone, Play, Quote, Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../../components/site/CTASection'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { generatedAssets, homePage, sharedPrograms, siteMeta } from '../../data/siteContent'

const Home = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const galleryItems = useMemo(() => {
    if (activeFilter === 'All') {
      return homePage.galleryPreview.items
    }

    return homePage.galleryPreview.items.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <SiteLayout>
      <PageHero
        eyebrow={homePage.hero.eyebrow}
        title={
          <>
            Represent <span className="block text-[#ffca28]">India</span>
          </>
        }
        description={homePage.hero.description}
        backgroundImage={homePage.hero.backgroundImage}
        actions={homePage.hero.actions}
        stats={homePage.hero.highlightStats}
      />

      <section className="border-y border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {homePage.stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 rounded-[28px] border border-slate-200 bg-[#f8faf8] px-5 py-5 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d2c18] text-[#ffca28]">
                <CalendarDays size={24} />
              </div>
              <div>
                <p className="text-3xl font-black text-[#102216]">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#102216]">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.helper}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#06210f_0%,#08150e_100%)]">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {homePage.reasons.map((reason) => (
            <div key={reason.title} className="border border-white/8 bg-white/[0.03] px-6 py-8">
              <p className="text-lg font-black uppercase tracking-[0.02em] text-white">{reason.title}</p>
              <p className="mt-3 text-sm leading-7 text-white/68">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_28px_80px_rgba(8,21,14,0.12)]">
            <img src={homePage.aboutPreview.image} alt="SOSA cricket ground aerial view" className="h-full min-h-[340px] w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(4,10,7,0.74)_100%)]" />
            <button
              type="button"
              className="absolute left-6 top-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white backdrop-blur-md"
            >
              <Play size={24} fill="currentColor" />
            </button>
            <div className="absolute bottom-6 left-6 rounded-full bg-white/94 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#0b1a11]">
              SOSA Experience
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeader eyebrow={homePage.aboutPreview.title} title={homePage.aboutPreview.heading} description={homePage.aboutPreview.description} />
            <div className="space-y-4">
              {homePage.aboutPreview.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#dce4da] bg-white px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ffca28]" />
                  <p className="text-sm leading-7 text-slate-600">{point}</p>
                </div>
              ))}
            </div>
            <Link
              to={homePage.aboutPreview.action.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
            >
              {homePage.aboutPreview.action.label}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Academy Programs"
            title="Choose the right batch for you"
            description="Players are grouped according to age, skill level and overall development so each cricketer gets focused coaching and individual attention."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {sharedPrograms.map((program) => (
              <article
                key={program.id}
                className={`overflow-hidden rounded-[28px] border ${program.featured ? 'border-[#f2c53c] bg-[#ffca28]' : 'border-[#e6ebe7] bg-white'} shadow-[0_24px_60px_rgba(7,18,13,0.08)]`}
              >
                <div className={`${program.featured ? 'bg-[#f1bb07] text-[#102216]' : 'bg-[#0d2c18] text-white'} px-6 py-5`}>
                  <p className="text-sm font-extrabold uppercase tracking-[0.24em]">{program.eyebrow}</p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-[-0.03em]">{program.title}</h3>
                </div>
                <div className="space-y-4 px-6 py-6 text-[#102216]">
                  <div className="rounded-2xl bg-black/[0.03] px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Training Duration</p>
                    <p className="mt-2 text-lg font-extrabold">{program.duration}</p>
                  </div>
                  <div className="rounded-2xl bg-black/[0.03] px-4 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Monthly Fees</p>
                    <p className="mt-2 text-3xl font-black">{program.price}</p>
                  </div>
                  <p className="text-sm leading-7 text-slate-600">{program.note}</p>
                  <a
                    href="/#contact"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] transition ${program.featured ? 'bg-[#102216] text-white hover:bg-[#19321f]' : 'bg-[#0d2c18] text-white hover:bg-[#153b23]'}`}
                  >
                    {program.button}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Facilities"
            title="Everything a cricketer needs, all in one place"
            description="Premium practice, player comfort and support services combine to create a complete academy environment."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {[
              { title: 'Cricket Ground', image: homePage.galleryPreview.items[5].image },
              { title: 'Indoor Nets', image: homePage.galleryPreview.items[0].image },
              { title: 'Changing Room', image: generatedAssets.gym },
              { title: 'Flood Lights', image: homePage.galleryPreview.items[1].image },
              { title: 'Parking', image: homePage.aboutPreview.image },
              { title: 'Food & Beverages', image: generatedAssets.food },
            ].map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[24px] border border-[#dde3de] bg-white shadow-sm transition hover:-translate-y-1">
                <img src={item.image} alt={item.title} className="h-28 w-full object-cover" />
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

      <section className="bg-[linear-gradient(180deg,#092111_0%,#04100b_100%)] py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Training Methodology"
            title="Built for complete player development"
            description="Every session moves in a structured flow so athletes improve technique, physical readiness and game understanding together."
            align="center"
            light
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {homePage.methodology.map((step) => (
              <div key={step} className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-6 text-center backdrop-blur-sm">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-[#ffca28]/15" />
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 xl:grid-cols-[1.2fr_0.85fr_0.85fr]">
            <div className="space-y-6 rounded-[32px] border border-[#e7ece7] bg-[#f8faf8] p-6">
              <SectionHeader eyebrow="Gallery" title="Moments that inspire" description="A glimpse into the energy, coaching and atmosphere inside SOSA Cricket Academy." />
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
                    <img src={item.image} alt={item.title} className="h-36 w-full object-cover transition duration-500 hover:scale-105" />
                    <div className="px-4 py-4">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c59d2d]">{item.category}</p>
                      <p className="mt-1 text-sm font-bold text-[#102216]">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.16em] text-[#0d2c18]">
                View Full Gallery
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="rounded-[32px] border border-[#e7ece7] bg-white p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c59d2d]">Testimonials</p>
              <Quote className="mt-6 text-[#d6dfd8]" size={36} />
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
            </div>

            <div className="rounded-[32px] border border-[#e7ece7] bg-white p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c59d2d]">Upcoming Events</p>
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
      </section>

      <div className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <CTASection
          title="Ready to become"
          accent="the next champion?"
          primaryAction={{ label: 'Enroll Now', href: '/academy#programs' }}
          secondaryAction={{ label: 'Book Ground', href: '/facilities#ground' }}
          leftImage={generatedAssets.ctaBatsman}
          rightImage={generatedAssets.ctaTeam}
        />
      </div>

      <section id="contact" className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[0.85fr_1fr_1fr]">
            <div className="rounded-[32px] bg-[#f3f5f1] p-6">
              <SectionHeader eyebrow={homePage.contact.title} title="Let us help you choose the right path" description={homePage.contact.text} />
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
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#102216]">Visit Us</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{siteMeta.fullAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-[24px] border border-[#dce4da] bg-white px-4 py-4">
                  <Clock3 className="mt-1 text-[#c59d2d]" size={18} />
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#102216]">Timings</p>
                    <p className="mt-1 text-sm text-slate-600">Morning: 7:15 AM - 9:00 AM</p>
                    <p className="text-sm text-slate-600">Evening: 5:00 PM - 7:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-[#e7ece7] bg-white p-6 shadow-sm">
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#c59d2d]">Send Us A Message</p>
              <form className="mt-6 space-y-4">
                <input type="text" placeholder="Your Name" className="w-full rounded-2xl border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <input type="email" placeholder="Email Address" className="w-full rounded-2xl border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <input type="tel" placeholder="Phone Number" className="w-full rounded-2xl border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <textarea placeholder="Your Message" rows="5" className="w-full rounded-[24px] border border-[#dbe3dc] px-4 py-4 text-sm text-[#102216] outline-none transition focus:border-[#0d2c18]" />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-[#e7ece7] bg-white shadow-sm">
              <img src={homePage.contact.mapImage} alt="SOSA Cricket Academy location map placeholder" className="h-full min-h-[420px] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

export default Home

import { ArrowRight, CalendarDays, CheckCircle2, Clock3, ShieldCheck, Trophy, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../../components/site/CTASection'
import CountUpStat from '../../components/site/CountUpStat'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { generatedAssets, groundPage } from '../../data/siteContent'
import { seoPages } from '../../data/seo'

const statIcons = [CalendarDays, Trophy, Users, ShieldCheck]

const Ground = () => {
  return (
    <SiteLayout seo={seoPages.ground}>
      <PageHero
        eyebrow={groundPage.hero.eyebrow}
        title={groundPage.hero.title}
        subtitle={groundPage.hero.subtitle}
        description={groundPage.hero.description}
        backgroundImage={groundPage.hero.backgroundImage}
        backgroundPoster={groundPage.gallery[0].image}
        actions={groundPage.hero.actions}
        sideFacts={groundPage.hero.sideFacts}
      />

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-stretch lg:px-8">
          <div className="space-y-6">
            <SectionHeader eyebrow={groundPage.overview.eyebrow} title={groundPage.overview.title} description={groundPage.overview.description} />
            <div className="space-y-4">
              {groundPage.overview.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-[#dce4da] bg-[#f8faf8] px-4 py-4">
                  <CheckCircle2 className="mt-0.5 text-[#c59d2d]" size={18} />
                  <p className="text-sm leading-7 text-slate-600">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px]  lg:h-150">
            <video
              src={groundPage.overview.video}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              poster={groundPage.gallery[1].image}
              className="h-[320px] w-full object-contain lg:h-150"
            />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#08200f_0%,#04100b_100%)] py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {groundPage.stats.map((item, index) => {
            const Icon = statIcons[index] ?? CalendarDays

            return (
              <div key={item.label} className="rounded-[28px] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ffca28]/12 text-[#ffca28]">
                  <Icon size={24} />
                </div>
                <p className="mt-5 text-4xl font-black text-[#ffca28]">
                  <CountUpStat value={item.value} />
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-white">{item.label}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ground Highlights"
            title="Built to support proper team bookings"
            description="Every part of the venue is arranged to make practice sessions, tournament days and team movement easier to manage."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groundPage.features.map((feature) => (
              <article key={feature.title} className="rounded-[28px] border border-[#e4e9e5] bg-white p-6 shadow-sm transition hover:-translate-y-1">
                <p className="text-xl font-black uppercase tracking-[-0.03em] text-[#102216]">{feature.title}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Amenities"
              title="Support spaces that matter on real match days"
              description="The venue is more than a field. It is a practical cricket environment for teams, staff and event organizers."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {groundPage.amenities.map((item) => (
              <div key={item} className="rounded-[24px] border border-[#e4e9e5] bg-[#f8faf8] px-5 py-5 text-sm font-extrabold uppercase tracking-[0.12em] text-[#102216]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <div className="rounded-[32px] bg-[#0d2c18] p-8 text-white">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#ffca28]">{groundPage.booking.title}</p>
            <p className="mt-4 text-3xl font-black uppercase tracking-[-0.03em]">{groundPage.booking.description}</p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#ffca28] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#08150e]"
            >
              Book Ground
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {groundPage.booking.cards.map((card) => (
              <article key={card.label} className="rounded-[28px] border border-[#e4e9e5] bg-white p-6 shadow-sm">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#c59d2d]">{card.label}</p>
                <p className="mt-4 text-3xl font-black uppercase tracking-[-0.03em] text-[#102216]">{card.value}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                  <Clock3 size={16} className="text-[#0d2c18]" />
                  Contact us for schedule confirmation
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <SectionHeader eyebrow="Ground Gallery" title="Visual look at the SOSA venue" />
            <Link
              to="/gallery"
              className="hidden rounded-full border border-[#0d2c18]/14 bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white lg:inline-flex"
            >
              View More
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {groundPage.gallery.map((item) => (
              <article key={`${item.category}-${item.title}`} className="overflow-hidden rounded-[24px] shadow-sm">
                <div className="relative h-72">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(4,10,7,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ffca28]">{item.category}</p>
                    <p className="mt-2 text-xl font-black uppercase tracking-[-0.03em] text-white">{item.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div>
        <CTASection
          title={groundPage.cta.title}
          accent={groundPage.cta.accent}
          description={groundPage.cta.description}
          primaryAction={{ label: 'Book Ground', href: '/contact' }}
          secondaryAction={{ label: 'Contact Us', href: '/contact' }}
          backgroundImage={generatedAssets.ctaBackground}
        />
      </div>
    </SiteLayout>
  )
}

export default Ground

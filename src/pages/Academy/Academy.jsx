import { ArrowRight, Clock3 } from 'lucide-react'
import CTASection from '../../components/site/CTASection'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { academyPage, generatedAssets } from '../../data/siteContent'
import { seoPages } from '../../data/seo'

const Academy = () => {
  return (
    <SiteLayout seo={seoPages.academy}>
      <PageHero
        eyebrow={academyPage.hero.eyebrow}
        title={
          <>
            SOSA Cricket <span className="block text-[#ffca28]">Academy</span>
          </>
        }
        description={academyPage.hero.description}
        backgroundImage={academyPage.hero.backgroundImage}
        backgroundPoster={academyPage.philosophy.image}
        highlights={academyPage.hero.highlights}
        sideFacts={academyPage.hero.sideFacts}
      />

      <section id="programs" className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Academy Programs" title="Choose the right batch for you" align="center" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {academyPage.programs.map((program) => (
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
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
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

      <section id="philosophy" className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <div className="space-y-6">
            <SectionHeader eyebrow="Our Coaching Philosophy" title={academyPage.philosophy.title} description={academyPage.philosophy.body} />
            <div className="space-y-4">
              {academyPage.philosophy.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3 rounded-2xl border border-[#dce4da] bg-white px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ffca28]" />
                  <p className="text-sm leading-7 text-slate-600">{bullet}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] shadow-[0_28px_80px_rgba(8,21,14,0.16)]">
            <img src={academyPage.philosophy.image} alt="Cricket academy training session" loading="lazy" decoding="async" className="h-full min-h-[440px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#092111_0%,#04100b_100%)] py-14 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#ffca28]">Year-Round Training</p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.03em]">{academyPage.yearRound.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">{academyPage.yearRound.text}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {academyPage.yearRound.chips.map((chip) => (
              <div key={chip} className="rounded-[24px] border border-white/10 bg-white/5 px-5 py-5 text-sm font-bold uppercase tracking-[0.14em] text-white">
                {chip}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="timings" className="bg-white py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div>
            <SectionHeader eyebrow="Training Timings" title="Flexible sessions for serious learners" />
            <div className="mt-8 space-y-4">
              {academyPage.timings.map((timing) => (
                <div key={timing.label} className="flex items-start gap-4 rounded-[24px] border border-[#e4e9e5] bg-[#f8faf8] px-5 py-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0d2c18] text-[#ffca28]">
                    <Clock3 size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#102216]">{timing.label}</p>
                    <p className="mt-1 text-base text-slate-600">{timing.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="What You Get At SOSA" title="A complete player development environment" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {academyPage.perks.map((perk) => (
                <div key={perk} className="rounded-[24px] border border-[#e4e9e5] bg-white px-5 py-5 shadow-sm">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-[#102216]">{perk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f5f1] py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-center justify-between gap-4">
            <SectionHeader eyebrow="Academy Life @ SOSA" title="Real sessions. Real progress." />
            <a
              href="/gallery"
              className="hidden rounded-full border border-[#0d2c18]/14 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#0d2c18] lg:inline-flex"
            >
              View Gallery
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {academyPage.lifeGallery.map((image, index) => (
              <div key={`${image}-${index}`} className="overflow-hidden rounded-[24px] shadow-sm">
                <img src={image} alt={`SOSA academy life ${index + 1}`} loading="lazy" decoding="async" className="h-48 w-full object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div >
        <CTASection
          title={academyPage.cta.title}
          accent={academyPage.cta.accent}
          primaryAction={academyPage.cta.primary}
          secondaryAction={academyPage.cta.secondary}
          backgroundImage={generatedAssets.ctaBackground}
        />
      </div>
    </SiteLayout>
  )
}

export default Academy

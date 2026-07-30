import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import CTASection from '../../components/site/CTASection'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { aboutPage, generatedAssets } from '../../data/siteContent'
import { seoPages } from '../../data/seo'

const About = () => {
  return (
    <SiteLayout seo={seoPages.about}>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        backgroundImage={aboutPage.hero.backgroundImage}
        compact
      />

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:px-8">
          <div className="space-y-6">
            <SectionHeader eyebrow="Our Journey" title={aboutPage.journey.title} />
            {aboutPage.journey.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-600">
                {paragraph}
              </p>
            ))}
            <div className="space-y-4">
              {aboutPage.journey.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#e3e8e4] bg-[#f8faf8] px-4 py-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#ffca28]" />
                  <p className="text-sm leading-7 text-slate-600">{point}</p>
                </div>
              ))}
            </div>
            <Link
              to={aboutPage.journey.action.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#0d2c18] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#153b23]"
            >
              {aboutPage.journey.action.label}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {aboutPage.stats.map((stat) => (
              <article key={stat.label} className="rounded-[28px] border border-[#e4e9e5] bg-white p-6 shadow-[0_20px_50px_rgba(7,18,13,0.06)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0d2c18] text-[#ffca28]">
                  <span className="text-xl font-black">{stat.value.charAt(0)}</span>
                </div>
                <p className="mt-6 text-4xl font-black text-[#102216]">{stat.value}</p>
                <p className="mt-2 text-xl font-black uppercase tracking-[-0.02em] text-[#102216]">{stat.label}</p>
                <p className="mt-2 text-sm text-slate-500">{stat.helper}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#092111_0%,#0a2b16_50%,#0c2314_100%)] py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader eyebrow="The Founders" title="Friends. Visionaries. Builders." description={aboutPage.foundersStory} light />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {aboutPage.founders.map((founder) => (
              <article key={founder.name} className="overflow-hidden rounded-[26px] border border-white/10 bg-white text-[#102216] shadow-2xl shadow-black/20">
                <img src={founder.image} alt={founder.name} loading="lazy" decoding="async" className="h-72 w-full object-contain" />
                <div className="px-5 py-5 text-center">
                  <p className="text-2xl font-black uppercase tracking-[-0.03em]">{founder.name}</p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{founder.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="rounded-4xl border border-[#e4e9e5] bg-[#f8faf8] p-6">
            <SectionHeader eyebrow="Our Philosophy" title={aboutPage.philosophy.title} description={aboutPage.philosophy.body} />
            <div className="mt-8 overflow-hidden rounded-[28px]">
              <img src={aboutPage.philosophy.image} alt="SOSA philosophy training session" loading="lazy" decoding="async" className="h-72 w-full object-cover" />
            </div>
            <Link
              to={aboutPage.philosophy.button.href}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0d2c18]/14 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#0d2c18]"
            >
              {aboutPage.philosophy.button.label}
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-4xl border border-[#e4e9e5] bg-white p-6 shadow-sm">
            <SectionHeader eyebrow="Our Vision" title={aboutPage.vision.title} />
            <div className="mt-8 rounded-[28px] border border-[#e5ebe6] bg-[#f8faf8] p-6">
              <p className="max-w-md text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-[#102216]">
                {aboutPage.vision.statement}
              </p>
              <div className="my-6 h-px w-16 bg-[#0d2c18]" />
              <p className="text-base leading-8 text-slate-600">{aboutPage.vision.body}</p>
            </div>
          </div>
        </div>
      </section>

      <div >
        <CTASection
          title="Ready to start your journey"
          accent="towards greatness?"
          primaryAction={{ label: 'Join the Academy', href: '/academy#programs' }}
          secondaryAction={{ label: 'Book the Ground', href: '/facilities#ground' }}
          backgroundImage={generatedAssets.ctaBackground}
        />
      </div>
    </SiteLayout>
  )
}

export default About

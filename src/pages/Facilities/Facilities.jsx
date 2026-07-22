import CTASection from '../../components/site/CTASection'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { facilitiesPage, generatedAssets } from '../../data/siteContent'

const Facilities = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={facilitiesPage.hero.eyebrow}
        title={
          <>
            World-Class Facilities <span className="block text-[#ffca28]">Built for Champions</span>
          </>
        }
        description={facilitiesPage.hero.description}
        backgroundImage={facilitiesPage.hero.backgroundImage}
        highlights={facilitiesPage.hero.highlights}
        compact
      />

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Facilities"
            title="Everything a cricketer needs, all in one place"
            description="Designed for performance, comfort and convenience so players can train with focus and families can enjoy a premium academy environment."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {facilitiesPage.facilities.map((facility) => (
              <article
                key={facility.title}
                id={facility.id}
                className="overflow-hidden rounded-[28px] border border-[#e6ebe7] bg-white shadow-[0_24px_60px_rgba(7,18,13,0.08)] transition hover:-translate-y-1"
              >
                <img src={facility.image} alt={facility.title} className="h-56 w-full object-cover" />
                <div className="px-5 py-5">
                  <h3 className="text-2xl font-black uppercase tracking-[-0.03em] text-[#102216]">{facility.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{facility.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#092111_0%,#0a2b16_55%,#0a2012_100%)] py-18 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Future Facilities"
              title="Building more for a better tomorrow"
              description="SOSA is growing with a long-term vision to create a full sports destination for athletes and families in Ratnagiri."
              light
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {facilitiesPage.futureFacilities.map((facility) => (
              <div key={facility} className="rounded-[26px] border border-white/12 bg-white/5 px-5 py-6 text-center">
                <p className="text-base font-black uppercase leading-tight tracking-[0.02em] text-white">{facility}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#ffca28]">Upcoming</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-18 sm:px-6 lg:px-8">
        <CTASection
          title="Experience the difference."
          accent="Train in the best. Become the best."
          primaryAction={{ label: 'Enroll Now', href: '/academy#programs' }}
          secondaryAction={{ label: 'Book a Visit', href: '/#contact' }}
          leftImage={generatedAssets.ctaBatsman}
          rightImage={generatedAssets.ctaTeam}
        />
      </div>
    </SiteLayout>
  )
}

export default Facilities

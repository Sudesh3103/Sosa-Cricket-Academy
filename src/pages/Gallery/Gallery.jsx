import { useMemo, useState } from 'react'
import CTASection from '../../components/site/CTASection'
import PageHero from '../../components/site/PageHero'
import SectionHeader from '../../components/site/SectionHeader'
import SiteLayout from '../../components/site/SiteLayout'
import { galleryPage, generatedAssets } from '../../data/siteContent'

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return galleryPage.items
    }

    return galleryPage.items.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <SiteLayout>
      <PageHero
        eyebrow={galleryPage.hero.eyebrow}
        title={galleryPage.hero.title}
        subtitle={galleryPage.hero.subtitle}
        description={galleryPage.hero.description}
        backgroundImage={galleryPage.hero.backgroundImage}
        compact
      />

      <section className="bg-white py-18 sm:py-22">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {galleryPage.filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-xl border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition ${activeFilter === filter ? 'border-[#0d2c18] bg-[#0d2c18] text-white' : 'border-[#d6dfd8] bg-white text-[#102216] hover:border-[#0d2c18]/26'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {filteredItems.map((item, index) => (
              <article
                key={`${item.title}-${index}`}
                className={`group overflow-hidden rounded-[24px] ${item.className ?? ''} shadow-[0_18px_40px_rgba(7,18,13,0.08)]`}
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-108" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(4,10,7,0.82)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ffca28]">{item.category}</p>
                    <p className="mt-2 text-lg font-black uppercase tracking-[-0.02em] text-white">{item.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(90deg,#06210f_0%,#0a2b16_50%,#06210f_100%)] py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {galleryPage.stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 rounded-[26px] border border-white/10 bg-white/5 px-5 py-5">
              <div className="h-14 w-14 rounded-full bg-[#ffca28]/12" />
              <div>
                <p className="text-3xl font-black text-[#ffca28]">{stat.value}</p>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div >
        <CTASection
          title="Be a part of our journey"
          accent="Create your own memories"
          primaryAction={{ label: 'Join the Academy', href: '/academy#programs' }}
          secondaryAction={{ label: 'Book the Ground', href: '/facilities#ground' }}
          backgroundImage={generatedAssets.ctaBackground}
        />
      </div>
    </SiteLayout>
  )
}

export default Gallery

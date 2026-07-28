import { ArrowRight, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const buttonStyles = {
  primary: 'bg-[#ffca28] text-[#08150e] hover:bg-[#ffd54f]',
  secondary: 'border border-white/20 bg-white/8 text-white hover:border-[#ffca28]/70 hover:bg-white/12',
}

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  description,
  backgroundImage,
  actions = [],
  stats = [],
  highlights = [],
  sideFacts = [],
  compact = false,
}) => {
  const isVideoBackground = typeof backgroundImage === 'string' && /\.(mp4|webm|ogg)$/i.test(backgroundImage)

  return (
    <section className={`relative overflow-hidden ${compact ? 'min-h-105' : 'min-h-155'}`}>
      <div className="absolute inset-0">
        {isVideoBackground ? (
          <video src={backgroundImage} autoPlay muted loop playsInline className="h-full w-full object-cover" />
        ) : (
          <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,10,7,0.9)_0%,rgba(4,10,7,0.5)_42%,rgba(4,10,7,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,202,40,0.24),transparent_25%),linear-gradient(180deg,transparent_45%,rgba(4,10,7,0.58)_100%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl px-5 py-20 sm:px-6 lg:min-h-155 lg:items-center lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.25fr)_360px] lg:items-end">
          <div className="space-y-8 pt-10 lg:pt-16">
            {eyebrow ? (
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.3em] text-[#ffca28] sm:text-sm">
                <span className="h-px w-10 bg-[#ffca28]" />
                {eyebrow}
              </p>
            ) : null}

            <div className="space-y-4">
              {subtitle ? <p className="text-xl font-black uppercase text-[#ffca28] sm:text-2xl">{subtitle}</p> : null}
              <h1 className="max-w-4xl text-5xl font-black uppercase tracking-tighter text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">{description}</p>
            </div>

            {highlights.length ? (
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/12 bg-white/6 px-4 py-4 text-sm font-semibold text-white/88 backdrop-blur-sm">
                    {item}
                  </div>
                ))}
              </div>
            ) : null}

            {actions.length ? (
              <div className="flex flex-wrap items-center gap-3">
                {actions.map((action) => {
                  const sharedClassName = `inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] transition ${buttonStyles[action.variant ?? 'primary']}`

                  if (action.href.startsWith('/')) {
                    return (
                      <Link key={action.label} to={action.href} className={sharedClassName}>
                        {action.label}
                        <ArrowRight size={16} />
                      </Link>
                    )
                  }

                  return (
                    <a key={action.label} href={action.href} className={sharedClassName}>
                      {action.label}
                      <ArrowRight size={16} />
                    </a>
                  )
                })}
              </div>
            ) : null}
          </div>

          {(stats.length || sideFacts.length) ? (
            <div className="self-end rounded-[28px] border border-white/12 bg-[#07120d]/78 p-4 shadow-2xl shadow-black/35 backdrop-blur-xl">
              <div className="space-y-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/6 px-4 py-4">
                    <div>
                      <p className="text-3xl font-black text-[#ffca28]">{stat.value}</p>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/62">{stat.label}</p>
                    </div>
                    <ChevronRight className="text-[#ffca28]" size={18} />
                  </div>
                ))}

                {sideFacts.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/6 px-4 py-4 text-sm font-semibold text-white/82">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default PageHero

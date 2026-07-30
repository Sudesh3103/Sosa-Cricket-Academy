import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const CTASection = ({
  title,
  accent,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  leftImage,
  rightImage,
}) => {
  const showSideImages = !backgroundImage && (leftImage || rightImage)

  return (
    <section
      className="relative overflow-hidden  bg-[#08130e] bg-cover bg-center"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,8,0.50)_0%,rgba(5,11,8,0.50)_35%,rgba(5,11,8,0.50)_65%,rgba(5,11,8,0.50)_100%)]" />
      {showSideImages ? (
        <>
          <div className="absolute inset-y-0 left-0 w-1/3 overflow-hidden opacity-80">
            {leftImage ? <img src={leftImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" /> : null}
          </div>
          <div className="absolute inset-y-0 right-0 w-1/3 overflow-hidden opacity-80">
            {rightImage ? <img src={rightImage} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" /> : null}
          </div>
        </>
      ) : null}

      <div className="relative mx-auto max-w-5xl px-5 py-14 text-center sm:px-6 lg:px-8">
        <p className="text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-5xl">
          {title}
          {accent ? <span className="block text-[#ffca28]">{accent}</span> : null}
        </p>
        {description ? <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/76">{description}</p> : null}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          
          <Link
            to={secondaryAction.href}
            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-white transition hover:border-[#ffca28]/70"
          >
            {secondaryAction.label}
            <ArrowRight size={16} />
          </Link>
          <Link
            to={primaryAction.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#ffca28] px-5 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#08150e] transition hover:bg-[#ffd54f]"
          >
            {primaryAction.label}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTASection

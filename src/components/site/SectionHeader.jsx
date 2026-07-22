const SectionHeader = ({ eyebrow, title, description, align = 'left', light = false }) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl space-y-4 ${alignment}`}>
      {eyebrow ? (
        <p className={`text-sm font-extrabold uppercase tracking-[0.28em] ${light ? 'text-[#ffe082]' : 'text-[#c59d2d]'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-black uppercase tracking-[-0.03em] sm:text-4xl ${light ? 'text-white' : 'text-[#102216]'}`}>
        {title}
      </h2>
      {description ? <p className={`text-base leading-7 ${light ? 'text-white/78' : 'text-slate-600'}`}>{description}</p> : null}
    </div>
  )
}

export default SectionHeader

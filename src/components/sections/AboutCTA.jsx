const AboutCTA = ({ cta }) => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,193,7,0.18),_transparent_20%),linear-gradient(180deg,#081411_0%,#0f2318_100%)] p-10 text-center shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">{cta.title}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            {cta.primary}
          </button>
          <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:border-amber-300 hover:bg-amber-400/10">
            {cta.secondary}
          </button>
        </div>
      </div>
    </section>
  )
}

export default AboutCTA

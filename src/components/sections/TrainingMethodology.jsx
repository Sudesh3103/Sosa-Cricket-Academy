const TrainingMethodology = ({ methodology }) => {
  return (
    <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Our Training Methodology</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {methodology.map((item) => (
          <div key={item} className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-center text-slate-200 transition hover:border-amber-300/40 hover:bg-slate-900/80">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400/10 text-amber-300">✓</div>
            <p className="font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrainingMethodology

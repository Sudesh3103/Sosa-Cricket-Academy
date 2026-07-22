const WhyChooseUs = ({ features }) => {
  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Why Choose SOSA?</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 transition hover:border-amber-300/40 hover:bg-slate-900/80">
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs

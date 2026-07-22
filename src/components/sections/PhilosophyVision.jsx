const PhilosophyVision = ({ philosophy, vision }) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-xl shadow-black/10">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Our Philosophy</p>
        <h2 className="mt-4 text-3xl font-black text-white">{philosophy.title}</h2>
        <p className="mt-6 text-slate-300 leading-8">{philosophy.body}</p>
        <button className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#08170e] px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:bg-amber-400/10">
          {philosophy.button} <span className="text-amber-300">→</span>
        </button>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-10 shadow-xl shadow-black/10">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Our Vision</p>
        <h2 className="mt-4 text-3xl font-black text-white">{vision.title}</h2>
        <p className="mt-6 text-slate-300 leading-8">{vision.statement}</p>
        <p className="mt-6 text-sm text-slate-400 leading-7">{vision.body}</p>
      </div>
    </div>
  )
}

export default PhilosophyVision

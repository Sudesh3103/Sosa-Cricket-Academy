const Programs = ({ programs }) => {
  return (
    <section id="programs" className="mt-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Academy Programs</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {programs.map((program) => (
          <div key={program.title} className="group rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 transition hover:-translate-y-1 hover:border-amber-300/40">
            <div className="mb-6 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-500/80 p-6 text-white shadow-2xl shadow-amber-500/20">
              <p className="text-xs uppercase tracking-[0.36em] text-slate-900/90">{program.title}</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">{program.name}</h3>
            </div>
            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p>{program.sessions}</p>
              <p className="text-3xl font-semibold text-amber-300">{program.price}</p>
              <p>{program.details}</p>
            </div>
            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400/90 hover:text-slate-950">
              {program.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs

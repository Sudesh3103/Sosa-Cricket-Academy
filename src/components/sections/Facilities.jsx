const Facilities = ({ facilities }) => {
  return (
    <section id="facilities" className="mt-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Our Facilities</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((facility) => (
          <div key={facility.title} className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-800/80 p-6 text-center shadow-xl shadow-black/20">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
              <span className="text-xl font-bold">{facility.title.charAt(0)}</span>
            </div>
            <p className="font-semibold text-white">{facility.title}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-400/10">
          Explore All Facilities
        </a>
      </div>
    </section>
  )
}

export default Facilities

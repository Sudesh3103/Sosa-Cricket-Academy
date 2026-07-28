const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,216,0,0.16),_transparent_35%),linear-gradient(180deg,#07100c_0%,#06120d_60%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,193,7,0.16),_transparent_18%),radial-gradient(circle_at_center,_rgba(255,255,255,0.05),_transparent_30%)]" />
      
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Train Hard. Dream Big.</p>
          <h1 className="text-5xl font-black uppercase tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
            REPRESENT <span className="text-amber-300">INDIA</span>
          </h1>
          <p className="max-w-xl text-slate-200/90 text-lg leading-8">
            World-class cricket coaching in Ratnagiri, building champions on & off the field with expert guidance, match-ready training and a performance-first culture.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-300">
              Book Ground
            </a>
            <a href="#programs" className="rounded-full bg-amber-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              Join Academy
            </a>
          </div>
        </div>

        <div className="relative flex-1">
          <div className="pointer-events-none absolute right-0 top-10 h-[420px] w-[420px] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/40 p-5 shadow-2xl shadow-black/30">
            <div className="aspect-[4/2] w-full rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_30%),linear-gradient(135deg,#0f2d1a_0%,#173822_35%,#1d4d2c_100%)]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-slate-950/80 p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Trusted By Players & Parents</p>
                  <p className="mt-3 text-4xl font-semibold text-white">150+</p>
                </div>
                <div className="space-y-1 text-right text-xs text-slate-400">
                  <p>Ground Bookings</p>
                  <p>500+ Happy Players</p>
                  <p>2 Practice Nets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

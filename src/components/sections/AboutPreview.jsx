const AboutPreview = () => {
  return (
    <section id="about" className="mt-20 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">About SOSA</p>
        <h2 className="text-4xl font-black text-white sm:text-5xl">World-class cricket coaching in Ratnagiri</h2>
        <p className="max-w-2xl text-base leading-8 text-slate-200">
          Sawant Oasis Sports Arena Pvt. Ltd. (SOSA) was established with a vision of providing world-class sports infrastructure to athletes from Ratnagiri and the surrounding region. Our dream is to produce athletes who proudly represent India on the international stage.
        </p>
        <a href="#programs" className="inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
          Know More About Us
        </a>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20">
        <div className="aspect-[4/3] w-full rounded-[1.75rem] bg-[radial-gradient(circle_at_top,_rgba(255,193,7,0.18),_transparent_30%),linear-gradient(180deg,#152b1f_0%,#0c1c12_100%)]" />
        <div className="absolute bottom-6 left-6 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-white/90 backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-300">Our Academy</p>
          <p className="mt-3 text-xl font-semibold">Making Ratnagiri a recognized sporting destination</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview

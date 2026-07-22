const Testimonials = ({ testimonials }) => {
  return (
    <section className="mt-20 rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Testimonials</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-8 text-slate-200">
            <p className="text-lg leading-8">“{item.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-slate-400">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials

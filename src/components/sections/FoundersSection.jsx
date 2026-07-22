const FoundersSection = ({ founders }) => {
  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">The Founders</p>
        <h2 className="mt-4 text-4xl font-black text-white">Friends. Visionaries. Builders.</h2>
        <p className="mt-6 text-slate-300 leading-8">
          SOSA was founded by two college friends, Muzamil Sawant and Ketan Sawant, who share a deep passion for sports and a strong commitment to creating opportunities for aspiring athletes. Today, they are bringing those global experiences to build world-class facilities in Ratnagiri.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        {founders.map((founder) => (
          <div key={founder.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-xl shadow-black/10">
            <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#0d2c18_0%,#173822_60%,#234d2e_100%)]" />
            <div className="space-y-2 p-6">
              <p className="text-xl font-semibold text-white">{founder.name}</p>
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">{founder.role}</p>
              <p className="text-sm leading-7 text-slate-300">{founder.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FoundersSection

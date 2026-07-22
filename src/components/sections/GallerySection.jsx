const GallerySection = ({ gallery }) => {
  return (
    <section id="gallery" className="mt-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Gallery</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {gallery.map((item) => (
          <div key={item.title} className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/50 p-6 transition hover:-translate-y-1 hover:border-amber-300/40">
            <div className="mb-6 h-40 rounded-3xl bg-gradient-to-br from-amber-400 to-amber-500/40" />
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.caption}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
          View Full Gallery
        </button>
      </div>
    </section>
  )
}

export default GallerySection

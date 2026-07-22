const EventsSection = ({ events }) => {
  return (
    <section className="mt-20 grid gap-8 lg:grid-cols-[1fr_0.75fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Upcoming Events</p>
        <div className="mt-6 space-y-4">
          {events.map((event) => (
            <div key={event.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6">
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{event.date}</p>
              <p className="mt-4 text-sm font-semibold text-amber-300">{event.note}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,193,7,0.18),_transparent_20%),linear-gradient(180deg,#081411_0%,#0f2318_100%)] p-8">
        <h3 className="text-2xl font-bold text-white">Ready to become the next champion?</h3>
        <p className="mt-4 text-slate-300">Join SOSA and take the next step in your cricket journey with elite coaching, expert training, and a supportive team environment.</p>
        <button className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
          Enroll Now
        </button>
      </div>
    </section>
  )
}

export default EventsSection

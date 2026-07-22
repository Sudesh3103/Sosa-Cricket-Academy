import { Calendar, Trophy, Users, Target } from 'lucide-react'

const iconMap = {
  Booking: Calendar,
  Players: Users,
  Tournaments: Trophy,
  Dream: Target,
}

const AboutStats = ({ journey, stats }) => {
  return (
    <div className="space-y-10">
      <div className="rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Our Journey</p>
        <h2 className="mt-4 text-4xl font-black text-white">{journey.title}</h2>
        <div className="mt-6 space-y-4 text-slate-300">
          {journey.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          {journey.points.map((point) => (
            <div key={point} className="flex items-start gap-4">
              <span className="mt-1 h-3 w-3 rounded-full bg-amber-400" />
              <p className="text-sm text-slate-300">{point}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
          {journey.cta} <span className="text-xl">→</span>
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
        {stats.map((item) => {
          const Icon = iconMap[item.label.split(' ')[0]] || Calendar
          return (
            <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300">
                <Icon size={20} />
              </div>
              <p className="mt-5 text-4xl font-bold text-white">{item.value}</p>
              <p className="mt-3 text-sm text-slate-400">{item.subtitle || item.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutStats

const Statistics = ({ stats }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-lg">
          <p className="text-4xl font-bold text-amber-300">{item.value}</p>
          <p className="mt-3 text-sm text-slate-300">{item.label}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics

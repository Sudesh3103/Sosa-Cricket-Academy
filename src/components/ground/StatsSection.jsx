const StatsSection = ({ stats }) => {
  return (
    <section className="bg-[#0d2c18] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center transition hover:-translate-y-2 hover:border-[#ffca28]"
            >
              <h2 className="text-5xl font-black text-[#ffca28]">
                {item.value}
              </h2>

              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
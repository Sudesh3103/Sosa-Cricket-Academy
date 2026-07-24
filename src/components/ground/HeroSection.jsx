const highlights = [
  {
    title: "Professional Pitch",
    description: "ICC-style turf wicket maintained for consistent bounce.",
    icon: "🏏",
  },
  {
    title: "Floodlights",
    description: "High-mast LED floodlights for day & night matches.",
    icon: "💡",
  },
  {
    title: "Spacious Pavilion",
    description: "Comfortable seating area with a panoramic ground view.",
    icon: "🏟️",
  },
  {
    title: "Premium Outfield",
    description: "Smooth, lush green outfield maintained year-round.",
    icon: "🌿",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-[#07140b] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#ffca28]">
              World Class Ground
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-white lg:text-5xl">
              Built For Performance
            </h2>

            <div className="mt-5 h-1 w-20 bg-[#ffca28]" />

            <p className="mt-8 text-lg leading-8 text-gray-300">
              Every inch of the SOOSA Cricket Ground has been designed to
              provide professional training and tournament experience.
              Whether you're preparing for district-level matches or daily
              practice, our facilities deliver the perfect environment.
            </p>

            <button className="mt-10 rounded-xl bg-[#ffca28] px-8 py-4 font-bold uppercase text-black transition hover:scale-105 hover:bg-yellow-400">
              Book The Ground →
            </button>

          </div>

          {/* Right Side */}

          <div className="grid gap-6 sm:grid-cols-2">

            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0d2314] p-7 transition duration-300 hover:-translate-y-2 hover:border-[#ffca28]"
              >
                <div className="flex h-16 w-16 items-center  justify-center rounded-full bg-[#ffca28]/15 text-3xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
import SectionHeader from "../site/SectionHeader";

const AmenitiesSection = ({ amenities }) => {
  return (
    <section className="bg-[#07140b] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow="PREMIUM AMENITIES"
          title="Comfort Beyond The Game"
          description="Our ground is equipped with everything players, coaches, and visitors need for a comfortable cricket experience."
          theme="dark"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {amenities.map((item) => (
            <div
              key={item}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#ffca28] hover:bg-[#0d2314]"
            >
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffca28]/20 text-2xl transition-all duration-300 group-hover:bg-[#ffca28]">
                <span className="group-hover:scale-110 transition">
                  ✓
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-white">
                {item}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-gray-400">
                High-quality facility maintained daily to provide a
                professional experience for every player.
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Strip */}

        <div className="mt-16 rounded-3xl border border-[#ffca28]/20 bg-[#0d2314] px-8 py-8">

          <div className="grid gap-6 text-center md:grid-cols-4">

            <div>
              <h2 className="text-4xl font-black text-[#ffca28]">6+</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Practice Nets
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#ffca28]">2</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Turf Wickets
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#ffca28]">200+</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Seating
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-[#ffca28]">24×7</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-300">
                Security
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AmenitiesSection;
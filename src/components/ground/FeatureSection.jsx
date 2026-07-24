import SectionHeader from "../site/SectionHeader";

const FeatureSection = ({ features }) => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">

          {/* Left Side */}
          <div className="lg:col-span-4">

            <SectionHeader
              eyebrow="OUR GROUND FEATURES"
              title="Designed For Performance"
              align="left"
            />

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every inch of our cricket ground is designed and maintained
              to provide players with a professional playing experience.
              From premium turf wickets to high-quality practice nets,
              every facility helps players perform at their best.
            </p>

            <button
              className="mt-10 rounded-xl bg-[#0d2c18] px-8 py-4 font-bold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#123d22] hover:scale-105"
            >
              Book The Ground →
            </button>

          </div>

          {/* Right Side */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#ffca28] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0d2c18] text-3xl transition group-hover:bg-[#ffca28]">
                  <span className="group-hover:scale-110 transition">
                    {feature.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-black uppercase text-[#0d2c18]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
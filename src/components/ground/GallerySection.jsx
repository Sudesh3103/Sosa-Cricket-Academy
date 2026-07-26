import { useMemo, useState } from "react";
import SectionHeader from "../site/SectionHeader";
import { galleryFilters } from "../../data/groundData";

const GallerySection = ({ gallery }) => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredGallery = useMemo(() => {
    if (activeFilter === "All") return gallery;

    return gallery.filter((item) => item.category === activeFilter);
  }, [activeFilter, gallery]);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <SectionHeader
          eyebrow="GROUND GALLERY"
          title="Moments From Our Cricket Ground"
          description="Explore our world-class cricket ground, professional practice facilities and tournament moments."
        />

        {/* Filter Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-3">

          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300
              ${
                activeFilter === filter
                  ? "bg-[#0d2c18] text-white shadow-lg"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-[#ffca28] hover:text-[#0d2c18]"
              }`}
            >
              {filter}
            </button>
          ))}

        </div>

        {/* Gallery */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {filteredGallery.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="relative h-80 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to- from-black/80 via-black/20 to-transparent opacity-90" />

                {/* Category */}

                <span className="absolute left-5 top-5 rounded-full bg-[#ffca28] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
                  {item.category}
                </span>

                {/* Title */}

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-300">
                    SOSA Cricket Academy
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Button */}

        <div className="mt-14 text-center">

          <button className="rounded-xl bg-[#ffca28] px-8 py-4 font-bold uppercase tracking-wider text-black transition hover:scale-105 hover:bg-yellow-400">
            View More Photos
          </button>

        </div>

      </div>
    </section>
  );
};

export default GallerySection;
import { MapPin, Navigation, Landmark } from "lucide-react";

const LocationSection = ({ location }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto grid max-w-7xl px-10 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="text-[#ffca28] font-semibold uppercase tracking-wider">
            Our Location
          </span>

          <h2 className="mt-2 text-4xl font-bold uppercase  text-black">
            Find Us Here
          </h2>

          <div className="mt-10 space-y-8">
            {/* Academy */}
            <div className="flex gap-4">
              <div className="mt-1 rounded-full bg-green-900 p-2 h-12 w-12 flex items-center justify-center text-white">
                <MapPin size={20} />
              </div>

              <div>
                <h4 className="font-semibold text-yellow-500">
                  {location.academy}
                </h4>

                <p className="text-gray-600">
                  {location.address}
                </p>

                <p className="text-gray-600">
                  {location.city}
                </p>
              </div>
            </div>

            {/* Easy to Reach */}
            <div className="flex gap-4  text-yellow-500">
              <div className="mt-1 rounded-full h-12 w-12 bg-green-900 p-3 text-white">
                <Navigation size={20} />
              </div>

              <div>
                <h4 className="font-semibold">
                  Easy To Reach
                </h4>

                <p className="text-gray-600">
                  {location.distance}
                </p>
              </div>
            </div>

            {/* Landmark */}
            <div className="flex gap-4  text-yellow-500">
              <div className="mt-1 rounded-full h-12 w-12 bg-green-900 p-3 text-white">
                <Landmark size={20} />
              </div>

              <div>
                <h4 className="font-semibold">
                  Landmark
                </h4>

                <p className="text-gray-600">
                  {location.landmark}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="overflow-hidden mt-6 rounded-2xl shadow-lg">
          <iframe
            title="SOSA Cricket Academy"
            src={location.map}
            className="h-[400px] w-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
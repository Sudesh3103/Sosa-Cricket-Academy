const BookingSection = ({ booking }) => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left */}

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#ffca28]">
              Ground Booking
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase text-[#0d2c18]">
              Book Your Slot
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reserve our professional cricket ground for practice sessions,
              tournaments, academy matches and corporate events.
            </p>

            <button className="mt-10 rounded-xl bg-[#0d2c18] px-8 py-4 font-bold uppercase text-white transition hover:bg-[#123d22]">
             <a href="/contact">Book Now</a> 
            </button>

          </div>

          {/* Right */}

          <div className="rounded-[35px] bg-[#07140b] p-10 text-white">

            <div className="space-y-8">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span>Morning</span>
                <span className="font-bold">{booking.morning}</span>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span>Evening</span>
                <span className="font-bold">{booking.evening}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>Price</span>
                <span className="text-3xl font-black text-[#ffca28]">
                  {booking.price}
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BookingSection;
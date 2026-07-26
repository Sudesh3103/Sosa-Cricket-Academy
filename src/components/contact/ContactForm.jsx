import { Send, ShieldCheck } from "lucide-react";

const ContactForm = () => {
  return (
    <div>
      <span className="text-primary font-semibold uppercase tracking-wider">
        Send Us A Message
      </span>

      <h2 className="mt-2 text-4xl font-bold uppercase">
        We Will Get Back To You
      </h2>

      <form className="mt-10 space-y-5">
        {/* Name & Phone */}
        <div className="grid gap-5 md:grid-cols-2">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-primary"
          />

          <input
            type="tel"
            placeholder="Phone Number *"
            className="w-full rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-primary"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address *"
          className="w-full rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-primary"
        />

        {/* Subject */}
        <select
          className="w-full rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-primary bg-[#06110D] text-white"
        >
          <option>Select Subject</option>
          <option>Admissions</option>
          <option>Ground Booking</option>
          <option>Coaching</option>
          <option>Partnership</option>
        </select>

        {/* Message */}
        <textarea
          rows={6}
          placeholder="Your Message *"
          className="w-full rounded-lg border border-gray-200 px-5 py-4 outline-none focus:border-primary resize-none"
        />

        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-900 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
          >
            <Send size={18} />
            SEND MESSAGE
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck size={18} className="text-green-700" />
            <span>
              We respect your privacy. Your information is safe and will never
              be shared.
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
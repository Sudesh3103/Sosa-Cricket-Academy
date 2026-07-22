const ContactSection = () => {
  return (
    <section id="contact" className="mt-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[2rem] border border-white/10 bg-[#0d1f16]/80 p-10 text-slate-200 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.36em] text-amber-300">Get In Touch</p>
        <h2 className="mt-4 text-3xl font-bold text-white">Send us a message</h2>
        <div className="mt-8 space-y-6 text-sm text-slate-300">
          <p><span className="font-semibold text-white">Phone:</span> +91 12345 67890</p>
          <p><span className="font-semibold text-white">Email:</span> info@sosacricketacademy.com</p>
          <p><span className="font-semibold text-white">Address:</span> SOSA Cricket Ground, Nachane, Ratnagiri - 415639, Maharashtra</p>
        </div>
      </div>
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-10 shadow-2xl shadow-black/20">
        <form className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100 outline-none placeholder:text-slate-500" placeholder="Your Name" />
            <input className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100 outline-none placeholder:text-slate-500" placeholder="Phone Number" />
          </div>
          <input className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100 outline-none placeholder:text-slate-500" placeholder="Email Address" />
          <textarea rows="4" className="w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-slate-100 outline-none placeholder:text-slate-500" placeholder="Your Message" />
          <button className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection

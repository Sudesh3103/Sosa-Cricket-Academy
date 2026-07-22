import { MessageCircle, Phone } from 'lucide-react'
import { siteMeta } from '../../data/siteContent'

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3 sm:right-6">
      <a
        href={`https://wa.me/${siteMeta.whatsappLink}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-[#25d366]/25 transition hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href={`tel:${siteMeta.phoneLink}`}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ffca28] text-[#08150e] shadow-2xl shadow-[#ffca28]/25 transition hover:-translate-y-1"
        aria-label="Call SOSA Cricket Academy"
      >
        <Phone size={20} />
      </a>
    </div>
  )
}

export default FloatingButtons

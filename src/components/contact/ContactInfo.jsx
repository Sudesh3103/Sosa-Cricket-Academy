import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

const iconMap = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
  whatsapp: MessageCircle,
};

const ContactInfo = ({ contactInfo, officeHours }) => {
  return (
    <div>
      <span className="text-[#ffca28] font-semibold uppercase tracking-wider">
        We're Here For You
      </span>

      <h2 className="mt-2 text-4xl font-bold uppercase">
        Let's Connect
      </h2>

      <p className="mt-5 text-white-600 leading-7">
        Whether you're a parent, player, or cricket enthusiast,
        feel free to contact us for admissions, ground bookings,
        partnerships, or any other queries.
      </p>

      <div className="mt-10 space-y-5">
        {contactInfo.map((item, index) => {
          const Icon = iconMap[item.icon];

          return (
            <div
              key={index}
              className="flex items-center gap-5 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-900 text-white">
                <Icon size={24} />
              </div>

              <div>
                <h4 className="font-semibold uppercase text-gray-900">
                  {item.title}
                </h4>

                <p className="font-medium text-green-700">
                  {item.value}
                </p>

                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}

        {/* Office Hours */}
        <div className="flex items-center gap-5 rounded-xl bg-green-900 p-5 text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white">
            <Clock size={24} />
          </div>

          <div>
            <h4 className="font-semibold uppercase">
              {officeHours.title}
            </h4>

            <p>{officeHours.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = ({ contactInfo, officeHours }) => {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2">
        <ContactInfo
          contactInfo={contactInfo}
          officeHours={officeHours}
        />

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
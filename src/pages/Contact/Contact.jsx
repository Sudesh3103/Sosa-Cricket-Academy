import SiteLayout from "../../components/site/SiteLayout";
import PageHero from "../../components/site/PageHero";
import CTASection from "../../components/site/CTASection";

import ContactSection from "../../components/contact/ContactSection";
import LocationSection from "../../components/contact/LocationSection";

import {
  contactHero,
  contactInfo,
  officeHours,
  locationInfo,
  contactCTA,
} from "../../data/contactData";

const Contact = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
        subtitle={contactHero.subtitle}
        description={contactHero.description}
        backgroundImage={contactHero.backgroundImage}
      />

      <ContactSection
        contactInfo={contactInfo}
        officeHours={officeHours}
      />

      <LocationSection location={locationInfo} />

      <div className="max-w-7xl mx-auto px-5 py-20">
        <CTASection
          title={contactCTA.title}
          accent={contactCTA.accent}
          description={contactCTA.subtitle}
          primaryAction={{
            label: "Enroll Now",
            href: "/admissions",
          }}
          secondaryAction={{
            label: "Book Ground",
            href: "/ground",
          }}
        />
      </div>
    </SiteLayout>
  );
};

export default Contact;
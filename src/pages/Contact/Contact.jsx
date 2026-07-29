import SiteLayout from "../../components/site/SiteLayout";
import PageHero from "../../components/site/PageHero";
import CTASection from "../../components/site/CTASection";

import ContactSection from "../../components/contact/ContactSection";
import LocationSection from "../../components/contact/LocationSection";

import { contactPage, generatedAssets } from "../../data/siteContent";

const Contact = () => {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        subtitle={contactPage.hero.subtitle}
        description={contactPage.hero.description}
        backgroundImage={contactPage.hero.backgroundImage}
      />

      <ContactSection
        contactInfo={contactPage.contactInfo}
        officeHours={contactPage.officeHours}
      />

      <LocationSection location={contactPage.locationInfo} />

      <div >
        <CTASection
          title={contactPage.cta.title}
          accent={contactPage.cta.accent}
          description={contactPage.cta.subtitle}
          backgroundImage={generatedAssets.ctaBackground}
          primaryAction={{
            label: "Book Ground",
            href: "/ground",
          }}
          secondaryAction={{
            label: "Academy Enquiry",
            href: "/academy",
          }}
        />
      </div>
    </SiteLayout>
  );
};

export default Contact;

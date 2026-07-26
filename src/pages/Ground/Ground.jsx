import SiteLayout from "../../components/site/SiteLayout";
import PageHero from "../../components/site/PageHero";
import CTASection from "../../components/site/CTASection";
import { generatedAssets } from "../../data/siteContent";

import {
  groundHero,
  groundFeatures,
  amenities,
  groundGallery,
  groundStats,
  bookingInfo,
  groundCTA,
} from "../../data/groundData";

import HeroSection from "../../components/ground/HeroSection";
import FeatureSection from "../../components/ground/FeatureSection";
import AmenitiesSection from "../../components/ground/AmenitiesSection";
import GallerySection from "../../components/ground/GallerySection";
import BookingSection from "../../components/ground/BookingSection";
import StatsSection from "../../components/ground/StatsSection";

const Ground = () => {
  return (
    <SiteLayout>
      {/* Hero Banner */}
      <PageHero
        eyebrow={groundHero.eyebrow}
        title={groundHero.title}
        subtitle={groundHero.subtitle}
        description={groundHero.description}
        backgroundImage={groundHero.backgroundImage}
      />

      {/* Hero Details */}
      <HeroSection />

      {/* Ground Features */}
      <FeatureSection features={groundFeatures} />

      {/* Ground Statistics */}
      <StatsSection stats={groundStats} />

      {/* Amenities */}
      <AmenitiesSection amenities={amenities} />

      {/* Gallery */}
      <GallerySection gallery={groundGallery} />

      {/* Booking */}
      <BookingSection booking={bookingInfo} />

      {/* CTA */}
      <div >
        <CTASection
          title={groundCTA.title}
          accent="Book Your Slot Today"
          description={groundCTA.subtitle}
          backgroundImage={generatedAssets.ctaBackground}
          primaryAction={{
            label: "Book Ground",
            href: "/contact",
          }}
          secondaryAction={{
            label: "Contact Us",
            href: "/contact",
          }}
        />
      </div>
    </SiteLayout>
  );
};

export default Ground;
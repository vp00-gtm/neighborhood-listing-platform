import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import SponsorBanner from "@/components/SponsorBanner";
import type { Property, Sponsor } from "@/types";

const properties: Property[] = [
  {
    id: "property-1",
    address: "125 Oak Street",
    price: 2200,
    bedrooms: 2,
    bathrooms: 1,
    squareFootage: 950,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    imageAlt: "White two-story house with a front lawn",
    propertyUrl: "/properties/property-1",
  },
  {
    id: "property-2",
    address: "48 Maple Avenue",
    price: 2750,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 1350,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    imageAlt: "Modern home with large windows and a landscaped yard",
    propertyUrl: "/properties/property-2",
  },
  {
    id: "property-3",
    address: "902 Pine Road",
    price: 3200,
    bedrooms: 4,
    bathrooms: 2.5,
    squareFootage: 1850,
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    imageAlt: "Modern gray house with a driveway and front yard",
    propertyUrl: "/properties/property-3",
  },
];

const sponsor: Sponsor = {
  id: "sponsor-1",
  name: "Neighborhood Market",
  sponsorUrl: "https://example.com",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Neighborhood Listing Platform - Development Test
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          A simple platform for discovering local property listings,
          neighborhood sponsors, and helpful voice-based assistance.
        </p>

        <section
          aria-labelledby="listings-heading"
          className="mt-12"
        >
          <h2
            id="listings-heading"
            className="text-2xl font-semibold text-gray-900"
          >
            Property Listings
          </h2>

          <div className="mt-6">
            <SearchFilters />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
              />
            ))}
          </div>
        </section>

        <section
          aria-labelledby="sponsor-heading"
          className="mt-12"
        >
          <h2
            id="sponsor-heading"
            className="text-2xl font-semibold text-gray-900"
          >
            Neighborhood Sponsor
          </h2>

          <div className="mt-6">
            <SponsorBanner sponsor={sponsor} />
          </div>
        </section>

        <section
          aria-labelledby="features-heading"
          className="mt-12"
        >
          <h2
            id="features-heading"
            className="text-2xl font-semibold text-gray-900"
          >
            Platform Features
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Listings
              </h3>
              <p className="mt-3 text-gray-600">
                Browse neighborhood property listings and learn more about
                available homes and local opportunities.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Neighborhood Sponsors
              </h3>
              <p className="mt-3 text-gray-600">
                Discover businesses and organizations that support and serve
                the local neighborhood.
              </p>
            </article>

            <article className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Voice Help
              </h3>
              <p className="mt-3 text-gray-600">
                Provide a simple voice-based way for users to get help finding
                information on the platform.
              </p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
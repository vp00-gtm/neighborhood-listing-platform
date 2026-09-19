export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">
          Neighborhood Listing Platform
        </h1>

        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          A simple platform for discovering local property listings,
          neighborhood sponsors, and helpful voice-based assistance.
        </p>

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
export default function SearchFilters() {
  return (
    <form className="rounded-lg border p-4">
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label
            htmlFor="bedrooms"
            className="block text-sm font-medium"
          >
            Bedrooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            className="mt-1 w-full rounded border p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            defaultValue=""
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="bathrooms"
            className="block text-sm font-medium"
          >
            Bathrooms
          </label>
          <select
            id="bathrooms"
            name="bathrooms"
            className="mt-1 w-full rounded border p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            defaultValue=""
          >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="maxPrice"
            className="block text-sm font-medium"
          >
            Maximum Price
          </label>
          <select
            id="maxPrice"
            name="maxPrice"
            className="mt-1 w-full rounded border p-2 focus-visible:outline-2 focus-visible:outline-offset-2"
            defaultValue=""
          >
            <option value="">Any</option>
            <option value="2000">$2,000</option>
            <option value="2500">$2,500</option>
            <option value="3000">$3,000</option>
            <option value="3500">$3,500</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 rounded border px-4 py-2 font-medium focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        Apply filters
      </button>
    </form>
  );
}
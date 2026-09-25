import Image from "next/image";
import type { Property } from "@/types";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  return (
    <article className="rounded-lg border p-4">
      <Image
  src={property.imageUrl}
  alt={property.imageAlt}
  width={800}
  height={450}
  className="mb-4 aspect-video w-full object-cover"
/>

      <h2 className="text-xl font-semibold">
        {property.address}
      </h2>

      <p className="mt-2 text-lg font-medium">
        ${property.price.toLocaleString()} / month
      </p>

      <ul className="mt-2">
        <li>{property.bedrooms} bedrooms</li>
        <li>{property.bathrooms} bathrooms</li>
        <li>{property.squareFootage.toLocaleString()} square feet</li>
      </ul>

      <a
        href={property.propertyUrl}
        className="mt-4 inline-block underline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        View property at {property.address}
      </a>
    </article>
  );
}
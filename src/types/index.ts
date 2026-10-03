export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  imageUrl: string;
  imageAlt: string;
  propertyUrl: string;
}

export interface Sponsor {
  id: string;
  name: string;
  sponsorUrl: string;
}

export interface PropertyAddress {
  street: string;
  city: string;
  state: string;
  zip_code: string;
}

export interface LocalSponsor {
  sponsor_id: string;
  name: string;
  sponsor_url: string;
}

export interface ValidatedProperty {
  property_id: string;
  address: PropertyAddress;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  amenities: string[];
  local_sponsors: LocalSponsor[];
}
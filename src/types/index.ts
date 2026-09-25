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
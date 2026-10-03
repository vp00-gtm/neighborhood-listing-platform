# ADR 001: Data Contract for Property Listings



## Status



Accepted



## Context



The neighborhood listing platform needs a consistent data contract for fictional property listings before the data is used by the application interface or database.



The property listing needs to provide the minimum information required for property cards, property detail pages, sponsor selection, and concise voice responses.



The required property facts include:



- Property ID

- Street address

- City

- State

- ZIP code

- Price

- Number of bedrooms

- Number of bathrooms

- Square feet

- Amenities

- Local sponsors



The application also needs to represent the relationship between properties and sponsors.



## Decision



We will use JSON Schema as the runtime data contract for fictional property listing data.



The data model separates three concepts:



1. Property

2. Sponsor

3. PropertySponsor



A Property represents a real-estate listing.



A Sponsor represents a local business that may be associated with a property.



A PropertySponsor represents the relationship between a property and a sponsor.



Each Property has a unique `property_id`.



Each Sponsor has a unique `sponsor_id`.



The PropertySponsor relationship connects a `property_id` to a `sponsor_id`.



Property data will use strict validation rules. Required fields must be present, numeric values cannot be negative, ZIP codes must contain five digits, and unexpected properties will be rejected.



Amenities will initially be represented as an array of strings. This keeps the first version simple while allowing the application to display multiple amenities for a property.



Local sponsor information will be represented as structured data containing a sponsor ID, sponsor name, and sponsor URL.



## Alternatives Considered



### Free-form JSON



We could allow property data to contain any fields without a schema.



This was rejected because malformed or unexpected data could reach the application without being detected.



### A database-only constraint



We could rely on the database to validate property data.



This was rejected because the assignment requires validation before data reaches the interface or database. Runtime JSON validation provides an earlier validation layer.



### Amenities as a controlled vocabulary



Amenities could be restricted to a predefined list such as `pool`, `parking`, `laundry`, and `gym`.



This was not selected for the initial version because the assignment does not provide a complete approved list of amenities. Free-text strings provide flexibility while the data model is being developed.



### Separate sponsor relationship table only



The application could store PropertySponsor relationships separately from property responses.



This remains a useful database design, but the application response also needs access to relevant local sponsor information. Therefore, the validated property response includes structured `local_sponsors` information.



## Consequences



The schema provides a consistent structure that can be validated before application rendering.



Invalid records can be rejected instead of being silently modified.



The strict schema makes missing required information and unexpected fields easier to detect.



Using an array of strings for amenities is simple, but it does not prevent spelling differences or duplicate concepts. A controlled vocabulary or separate amenities table may be considered in a future version.



Separating Property, Sponsor, and PropertySponsor concepts makes the relationships clearer and provides a path toward a normalized database design.



The schema and TypeScript application types will need to remain synchronized so that runtime validation and compile-time types do not drift apart.


\# Data Model Normalization Review



\## Purpose



This review compares the normalization recommendations from ChatGPT and

Google Gemini for the fictional neighborhood property listing application.



The review focuses on amenities, local sponsors, duplication/update anomalies,

database design, API response design, and remaining business rules.



\## AI Review 1: ChatGPT



\### Normalization Findings



ChatGPT identified the following potential normalization issues:



\- Amenities stored as free-text strings can become inconsistent.

&#x20; Examples include "Pool", "pool", and "Swimming Pool".

\- A controlled vocabulary could improve consistency if the list of amenities

&#x20; is small and fixed.

\- A separate Amenity table and PropertyAmenity relationship could be used if

&#x20; amenities need to be searchable, filterable, or structured.

\- A property and sponsor can have a many-to-many relationship because a

&#x20; property can have multiple sponsors and a sponsor can sponsor multiple

&#x20; properties.

\- Sponsor information should not be repeatedly stored inside every property

&#x20; record in the database.

\- Repeated sponsor information can cause update, insertion, and deletion

&#x20; anomalies.



\### ChatGPT Database Recommendation



ChatGPT recommended a normalized database structure containing:



\- Property

\- Sponsor

\- PropertySponsor

\- Amenity

\- PropertyAmenity



The PropertySponsor table represents the relationship between properties and

sponsors. The PropertyAmenity table represents the relationship between

properties and amenities.



\### ChatGPT API Recommendation



ChatGPT recommended keeping the database normalized while allowing the API

response to return convenient nested data for the frontend.



For example, the API can return:



\- an amenities array

\- a local\_sponsors array containing sponsor information



This allows the database and application response to use different structures

for their different purposes.



\### ChatGPT Business Rules to Clarify



ChatGPT identified several business rules that still need decisions,

including:



\- Whether property addresses must be unique

\- Whether price can be zero

\- Whether bedrooms can be zero

\- Whether fractional bathrooms are allowed

\- Whether square footage can be unknown

\- Whether ZIP codes are required

\- Whether properties can be active or inactive

\- Whether a sponsor can exist without a property

\- Whether duplicate property-sponsor relationships are allowed

\- Whether sponsorships need start/end dates

\- Whether amenities should use a controlled list



\## AI Review 2: Google Gemini



\### Normalization Findings



Gemini identified similar normalization concerns:



\- Free-text amenities can create inconsistent spelling and capitalization.

\- A controlled vocabulary can be used when the list of amenities is small and

&#x20; fixed.

\- A separate amenities table and relationship table can be used when amenities

&#x20; are dynamic.

\- Sponsors embedded inside property records can duplicate the same sponsor

&#x20; information across many records.

\- The relationship between properties and sponsors is many-to-many.

\- Repeated sponsor information can cause update and deletion anomalies.



\### Gemini Database Recommendation



Gemini recommended a normalized relational database containing:



1\. properties table for core property details

2\. sponsors table for master sponsor details

3\. property\_sponsors join table for the property-sponsor relationship

4\. amenities and property\_amenities tables for standardized amenities



\### Gemini API Recommendation



Gemini recommended a hybrid approach:



\- Database writes should use normalized data.

\- Database reads can return a convenient nested JSON response.

\- The API can join the normalized database data so the frontend receives

&#x20; property information, amenities, and sponsors in a single response.



\### Gemini Business Rules to Clarify



Gemini identified these remaining questions:



\- Whether a property can have unlimited sponsors

\- Whether there is a primary sponsor and secondary sponsors

\- Whether sponsorship is exclusive

\- Whether competing businesses can sponsor the same property

\- Whether amenities need categories such as Interior, Exterior, or Community



\## Comparison of the Two Reviews



Both AI tools identified the same major normalization issue with sponsors:

a property and sponsor can have a many-to-many relationship.



Both recommended using a PropertySponsor or property\_sponsors join table

instead of repeatedly storing sponsor information in property records in the

database.



Both also identified free-text amenities as a potential consistency problem.



Both supported separating the normalized database design from the API

response design. The database can use normalized tables while the API can

return nested arrays that are easier for the frontend to consume.



\## Project Decision



For this project, the database design will use normalized relationships:



\- Property

\- Sponsor

\- PropertySponsor

\- Amenity

\- PropertyAmenity



Amenities will move toward a controlled set of standardized values in the

database so that filtering and searching can remain consistent.



The application/API response will continue to use a convenient nested

structure. A property response may contain an amenities array and a

local\_sponsors array because this structure is easier for the existing

PropertyCard and other frontend components to consume.



This means the project uses:



Normalized database

&#x20;       |

&#x20;       v

Structured API response

&#x20;       |

&#x20;       v

Frontend components



\## Verification and AI Review Decision



The AI responses were treated as recommendations rather than automatically

accepted solutions.



The recommendations were compared against the existing JSON Schema, seed

records, validation tests, and the assignment requirements.



The major decision supported by both reviews is to normalize sponsors using a

PropertySponsor relationship in the database while allowing nested sponsor

data in the application/API response.



The current JSON Schema represents the application response contract rather

than the physical normalized database schema.



Both AI reviews were based only on fictional property listing information.

No real personal information, private information, credentials, API keys, or

secrets were used.


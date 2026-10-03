# AI Data Contract Evidence



## AI Tool



Google AI Studio



## Purpose



AI Studio was asked to propose a strict JSON Schema for a fictional neighborhood property listing.



## Prompt



Given these fictional neighborhood property listing requirements, propose a strict JSON Schema.



The schema should represent one property listing and require:



- property_id

- address with street, city, state, and zip_code

- price

- bedrooms

- bathrooms

- square_feet

- amenities

- local_sponsors



Requirements:



1. property_id must be a non-empty string.

2. Address fields must be required.

3. State should use a two-letter U.S. state abbreviation.

4. ZIP code should contain exactly five digits.

5. Price, bedrooms, bathrooms, and square_feet cannot be negative.

6. Bedrooms and square_feet should be integers.

7. Bathrooms may contain decimal values such as 1.5 or 2.5.

8. Amenities should be an array of non-empty strings.

9. Local sponsors should contain sponsor_id, name, and sponsor_url.

10. Sponsor URLs should use URI format.

11. Unexpected properties should be rejected.

12. Use JSON Schema draft 2020-12.



Before writing the schema, identify any ambiguous business rules that should be decided.



Then provide:

- the proposed JSON Schema

- one valid example

- four intentionally invalid examples

- an explanation of what the validator should reject in each invalid example



Use only fictional data. Do not use real people's personal information, private information, credentials, API keys, or secrets.



## Useful AI Output



AI Studio proposed a JSON Schema using JSON Schema draft 2020-12.



The proposed schema included:



- Required property fields

- Required address fields

- Two-letter state validation

- Five-digit ZIP validation

- Nonnegative numeric constraints

- Integer constraints for bedrooms and square feet

- Decimal-compatible bathroom values

- Amenities as an array of non-empty strings

- Structured local sponsor data

- URI validation for sponsor URLs

- additionalProperties set to false



## Verification



The AI-generated proposal was reviewed against the assignment requirements before being used.



The application schema was independently validated locally using Ajv.



Five fictional seed records passed validation.



Four intentionally invalid records were tested:



1. Missing property_id

2. Negative price

3. Invalid ZIP code

4. Unknown property field



All four invalid records were rejected by the validator.



## Accepted Decisions



The project retained a strict JSON Schema with required fields, nonnegative numeric values, ZIP/state validation, URI validation, and additionalProperties set to false.



The project also retained descriptions for selected fields to make the data contract easier for developers to understand.



The AI Studio response was treated as a proposal rather than automatically accepted code. The final schema was verified through local validation tests.



## Evidence



An AI Studio screenshot was captured showing the prompt and generated schema. Personal information and private data were excluded from the evidence.


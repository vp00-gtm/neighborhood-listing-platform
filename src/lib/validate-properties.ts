import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";
import type { ValidatedProperty } from "@/types";

const ajv = new Ajv2020({
  allErrors: true
});

addFormats(ajv);

const schemaPath = path.join(
  process.cwd(),
  "data",
  "schema",
  "property.schema.json"
);

const seedPath = path.join(
  process.cwd(),
  "data",
  "seed",
  "properties.json"
);

const schema = JSON.parse(
  fs.readFileSync(schemaPath, "utf-8")
);

const properties: unknown = JSON.parse(
  fs.readFileSync(seedPath, "utf-8")
);

const validate = ajv.compile(schema);

export function getValidatedProperties(): ValidatedProperty[] {
  if (!Array.isArray(properties)) {
    throw new Error("Property data must be an array.");
  }

  const validProperties: ValidatedProperty[] = [];

  for (const property of properties) {
    if (validate(property)) {
      validProperties.push(property as ValidatedProperty);
    } else {
      console.error("Invalid property data:", validate.errors);
    }
  }

  return validProperties;
}
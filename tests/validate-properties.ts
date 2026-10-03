import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";

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

const properties = JSON.parse(
  fs.readFileSync(seedPath, "utf-8")
);

const validate = ajv.compile(schema);

let allValid = true;

properties.forEach((property: unknown, index: number) => {
  const valid = validate(property);

  if (valid) {
    console.log(`Property ${index + 1}: VALID`);
  } else {
    allValid = false;

    console.error(`Property ${index + 1}: INVALID`);
    console.error(validate.errors);
  }
});

if (!allValid) {
  process.exit(1);
}

console.log("All seed properties passed validation.");

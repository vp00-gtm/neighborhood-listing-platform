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

const invalidPath = path.join(
  process.cwd(),
  "tests",
  "invalid-properties.json"
);

const schema = JSON.parse(
  fs.readFileSync(schemaPath, "utf-8")
);

const invalidProperties = JSON.parse(
  fs.readFileSync(invalidPath, "utf-8")
);

const validate = ajv.compile(schema);

const expectedErrors = [
  "required",
  "minimum",
  "pattern",
  "additionalProperties"
];

let allTestsPassed = true;

invalidProperties.forEach(
  (property: unknown, index: number) => {
    const valid = validate(property);

    if (valid) {
      allTestsPassed = false;
      console.error(
        `Test ${index + 1}: FAILED - invalid property was accepted`
      );
      return;
    }

    const errors = validate.errors ?? [];

    const errorText = errors
      .map((error) => {
        return `${error.keyword} ${error.instancePath} ${error.message ?? ""}`;
      })
      .join(" | ");

    const expectedError = expectedErrors[index];

    if (errors.some((error) => error.keyword === expectedError)) {
      console.log(
        `Test ${index + 1}: PASSED - rejected for ${expectedError}`
      );
      console.log(`  ${errorText}`);
    } else {
      allTestsPassed = false;
      console.error(
        `Test ${index + 1}: FAILED - unexpected validation error`
      );
      console.error(`  ${errorText}`);
    }
  }
);

if (!allTestsPassed) {
  process.exit(1);
}

console.log("All invalid-property tests passed.");
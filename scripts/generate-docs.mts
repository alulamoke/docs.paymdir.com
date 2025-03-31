import * as OpenAPI from "fumadocs-openapi";
import { rimrafSync } from "rimraf";

const out = "./content/docs/openapi";

// clean generated files
rimrafSync(out, {
  filter(v) {
    return !v.endsWith("index.mdx") && !v.endsWith("meta.json");
  },
});

void OpenAPI.generateFiles({
  input: ["./openapi.yml"],
  output: out,
  groupBy: "tag",
});

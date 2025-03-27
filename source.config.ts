import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { fileGenerator, remarkDocGen, remarkInstall } from "fumadocs-docgen";

export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    remarkPlugins: [
      [remarkInstall, { persist: { id: "package-manager" } }],
      [remarkDocGen, { generators: [fileGenerator()] }],
    ],
  },
});

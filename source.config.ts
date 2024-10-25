import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs: biologyDocs, meta: biologyMeta } = defineDocs({
  dir: "content/biology",
});

export const { docs: chemistryDocs, meta: chemistryMeta } = defineDocs({
  dir: "content/chemistry",
});

export const { docs, meta } = defineDocs({
  dir: "content",
});

export default defineConfig();

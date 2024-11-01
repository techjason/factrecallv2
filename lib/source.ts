import {
  biologyDocs,
  biologyMeta,
  chemistryDocs,
  chemistryMeta,
  docs,
  meta,
} from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const biologySource = loader({
  baseUrl: "/biology",
  source: createMDXSource(biologyDocs, biologyMeta),
});

export const chemistrySource = loader({
  baseUrl: "/chemistry",
  source: createMDXSource(chemistryDocs, chemistryMeta),
});

export const sources = loader({
  baseUrl: "/",
  source: createMDXSource(docs, meta),
});

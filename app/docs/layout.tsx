import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{
        banner: (
          <RootToggle
            options={[
              {
                title: "AQA",
                description: "AQA Chemistry",
                url: "/docs",
              },
              {
                title: "OCR",
                description: "OCR Chemistry",
                url: "/ocr",
              },
            ]}
          />
        ),
      }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}

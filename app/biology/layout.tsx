import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { biologySource } from "@/lib/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={biologySource.pageTree}
      // sidebar={{
      //   banner: (
      //     <RootToggle
      //       options={[
      //         {
      //           title: "AQA",
      //           description: "AQA Biology",
      //           url: "/biology/aqa",
      //         },
      //         {
      //           title: "OCR",
      //           description: "OCR Biology",
      //           url: "/biology/ocr",
      //         },
      //       ]}
      //     />
      //   ),
      // }}
      {...baseOptions}
    >
      {children}
    </DocsLayout>
  );
}

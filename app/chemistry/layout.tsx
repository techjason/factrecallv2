import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { chemistrySource } from "@/lib/source";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={chemistrySource.pageTree}
      // sidebar={{
      //   banner: (
      //     <RootToggle
      //       options={[
      //         {
      //           title: "AQA",
      //           description: "AQA Chemistry",
      //           url: "/chemistry/aqa",
      //         },
      //         {
      //           title: "OCR",
      //           description: "OCR Chemistry",
      //           url: "/chemistry/ocr",
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

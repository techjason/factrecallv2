"use client";

import { useState } from "react";
import { Skeleton } from "./ui/skeleton";

interface PDFViewerProps {
  fileId: string;
  height?: number;
  pageNumber?: number;
}

export default function PDFViewer({
  fileId,
  height = 600,
  pageNumber,
}: PDFViewerProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="relative">
        {isLoading && (
          <Skeleton className="absolute inset-0" style={{ height }} />
        )}
        <iframe
          className="embed-responsive-item"
          src={`https://drive.google.com/file/d/${fileId}/preview`}
          width="100%"
          height={height}
          onLoad={() => setIsLoading(false)}
        />
      </div>
      {pageNumber && (
        <a
          className="text-sm text-gray-500 dark:text-gray-400 no-underline"
          href={`https://drive.google.com/uc?export=download&id=${fileId}`}
        >
          Download PDF ({pageNumber} pages) © factrecall.com
        </a>
      )}
    </>
  );
}

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
  return (
    <>
      <iframe
        className="embed-responsive-item"
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        width="100%"
        height={height}
      ></iframe>
      {pageNumber && (
        <a
          className="text-sm text-gray-500 dark:text-gray-400"
          href={`https://drive.google.com/uc?export=download&id=${fileId}`}
        >
          Download PDF ({pageNumber} pages) © factrecall.com
        </a>
      )}
    </>
  );
}

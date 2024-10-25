interface PDFViewerProps {
  fileId: string;
  height?: number;
  downloadText?: string;
}

export default function PDFViewer({
  fileId,
  height = 600,
  downloadText,
}: PDFViewerProps) {
  return (
    <>
      <iframe
        className="embed-responsive-item"
        src={`https://drive.google.com/file/d/${fileId}/preview`}
        width="100%"
        height={height}
      ></iframe>
      {downloadText && (
        <a
          className="text-sm text-gray-500 dark:text-gray-400"
          href={`https://drive.google.com/uc?export=download&id=${fileId}`}
        >
          {downloadText}
        </a>
      )}
    </>
  );
}

// ============================================================
// src/components/JsonLd.tsx
// Component chèn JSON-LD structured data an toàn
// ============================================================

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Render JSON-LD script tag an toàn trong <head>.
 * Escape HTML entities để ngăn XSS.
 */
export function JsonLd({ data }: JsonLdProps) {
  // Escape </script> để tránh XSS khi dữ liệu động
  const jsonString = JSON.stringify(data).replace(/<\/script>/gi, "<\\/script>");

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
}

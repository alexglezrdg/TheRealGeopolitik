function sanitizeBasic(html: string) {
  // Minimal sanitize: remove script tags and on* attributes
  const noScripts = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "");
  return noScripts.replace(/ on\w+="[^"]*"/gi, "");
}

export function RichTextRenderer({ html }: { html: string }) {
  const safe = sanitizeBasic(html);
  return (
    <div
      className="prose prose-lg max-w-none prose-headings:font-serif prose-img:rounded-xl"
      dangerouslySetInnerHTML={{ __html: safe }}
    />
  );
}

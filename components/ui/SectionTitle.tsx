export function SectionTitle({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  inverted?: boolean;
}) {
  const renderLines = (text: string) => text.split("\n").map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ));

  return (
    <div className="mx-auto mb-7 max-w-2xl text-center md:mb-10">
      {eyebrow && <p className={`mb-3 text-sm font-bold tracking-widest ${inverted ? "text-white" : "text-brand"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-bold leading-tight tracking-tight [text-wrap:balance] md:text-4xl ${inverted ? "text-white" : "text-ink"}`}>
        {renderLines(title)}
      </h2>
      {description && (
        <p className={`mt-4 leading-8 [text-wrap:balance] ${inverted ? "text-slate-300" : "text-slate-600"}`}>
          {renderLines(description)}
        </p>
      )}
    </div>
  );
}

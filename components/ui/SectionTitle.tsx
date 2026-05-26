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
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      {eyebrow && <p className={`mb-3 text-sm font-bold tracking-widest ${inverted ? "text-white" : "text-brand"}`}>{eyebrow}</p>}
      <h2 className={`text-3xl font-bold leading-tight tracking-tight md:text-4xl ${inverted ? "text-white" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-5 leading-8 ${inverted ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}

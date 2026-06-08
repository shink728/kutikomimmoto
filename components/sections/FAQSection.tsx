import { faqs } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FAQSection() {
  const renderLines = (text: string) => text.split("\n").map((line, index, lines) => (
    <span key={`${line}-${index}`}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ));

  return (
    <section id="faq" className="section-space">
      <Container className="max-w-4xl">
        <SectionTitle eyebrow="FAQ" title="よくあるご質問" />
        <dl className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-slate-100 px-6 py-6 md:px-8">
              <dt className="flex gap-3 font-bold text-ink">
                <span className="text-line-dark">Q.</span>
                <span>{renderLines(faq.question)}</span>
              </dt>
              <dd className="mt-4 flex gap-3 text-sm leading-7 text-slate-600">
                <span className="font-bold text-line-dark">A.</span>
                <span>{renderLines(faq.answer)}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

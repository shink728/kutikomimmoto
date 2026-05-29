import { problems } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProblemSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="CHECK"
          title="でも、口コミはなかなか増えません。"
          description="お客様が満足していても、文章を書くのが面倒だったり、何を書けばいいかわからなかったりして、投稿まで進まないことがよくあります。"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-sm font-medium leading-7 text-slate-700 shadow-sm">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-pale font-bold text-brand-dark">?</span>
              {problem}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

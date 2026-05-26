import { problems } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ProblemSection() {
  return (
    <section className="section-space">
      <Container>
        <SectionTitle
          eyebrow="CHECK"
          title="お客様の声を、取りこぼしていませんか？"
          description="満足の声があっても、投稿のきっかけや書き方がわからなければ口コミにはつながりにくいものです。"
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

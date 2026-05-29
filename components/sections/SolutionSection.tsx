import { solutionSteps } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-brand-pale/60">
      <Container>
        <SectionTitle
          eyebrow="SOLUTION"
          title="バズクチコミなら、口コミを簡単に増やせます。"
          description="アンケートに答えるだけで、AIが口コミ文章のたたき台を作成。お客様は内容を確認・編集して投稿できます。"
        />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-5">
          {solutionSteps.map((step, index) => (
            <div key={step} className="card relative border-t-4 border-t-brand text-sm leading-7 text-slate-600">
              <span className="mb-4 block text-2xl font-bold text-brand">{String(index + 1).padStart(2, "0")}</span>
              {step}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-line/15 bg-white px-6 py-4 text-sm leading-7 text-slate-600">
          特典はアンケート回答へのお礼として提供します。口コミの投稿有無や内容にかかわらず、適切な運用をご案内します。
        </p>
      </Container>
    </section>
  );
}

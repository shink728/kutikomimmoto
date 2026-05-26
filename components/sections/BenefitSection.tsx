import { benefits } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function BenefitSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[.86fr_1.14fr]">
          <SectionTitle
            eyebrow="BENEFITS"
            title="お客様の声が、次の来店と改善につながる"
            description="口コミの件数だけではなく、店舗運営に活かせるフィードバックとの接点を整えます。"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-slate-100 p-5 font-medium text-slate-700">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-line-pale text-sm font-bold text-line-dark">✓</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import { flowSteps } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FlowSection() {
  return (
    <section id="flow" className="section-space">
      <Container>
        <SectionTitle
          eyebrow="FLOW"
          title="使い方はかんたん。来店後の流れを整えるだけ。"
          description="初期設定から店内POPの準備まで支援。店舗のオペレーションを大きく変えずに始められます。"
        />
        <div className="mx-auto max-w-4xl">
          {flowSteps.map((step, index) => (
            <div key={step} className="relative flex gap-5 pb-7 last:pb-0">
              {index < flowSteps.length - 1 && <span className="absolute left-[19px] top-10 h-[calc(100%-2.5rem)] w-px bg-line/25" />}
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-promo text-sm font-black text-ink">
                {index + 1}
              </span>
              <div className="w-full rounded-2xl border border-slate-100 bg-white px-5 py-4 font-bold text-slate-700 shadow-sm">
                {step}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

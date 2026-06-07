import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionTitle } from "@/components/ui/SectionTitle";

const planItems = [
  "LINEアンケート",
  "AI口コミ文生成",
  "Google口コミ導線",
  "アンケート回答特典配布",
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-space bg-slate-50">
      <Container>
        <SectionTitle eyebrow="PRICING" title="料金プラン" />
        <article className="card relative mx-auto max-w-2xl border-promo ring-2 ring-promo">
          <h3 className="text-xl font-bold">クチコミターボ 月額プラン</h3>
          <p className="mt-5 text-sm text-slate-600">
            月額 <span className="mx-1 text-5xl font-bold text-ink">5,000</span>円
          </p>
          <ul className="my-7 grid gap-3 border-t border-slate-100 pt-6 text-sm text-slate-600 sm:grid-cols-2">
            {planItems.map((item) => (
              <li key={item}>
                <span className="mr-2 font-bold text-line">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <CTAButton>LINEから簡単申し込み</CTAButton>
        </article>
      </Container>
    </section>
  );
}

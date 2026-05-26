import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionTitle } from "@/components/ui/SectionTitle";

const plans = [
  {
    title: "ライトプラン",
    price: "4,980",
    items: ["LINEアンケート", "AI口コミ文生成", "Google口コミ導線", "アンケート回答特典配布"],
  },
  {
    title: "スタンダードプラン",
    price: "9,800",
    recommended: true,
    items: ["ライトプランの全機能", "満足度分析", "AI口コミ返信文作成", "月次レポート"],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-space bg-slate-50">
      <Container>
        <SectionTitle eyebrow="PRICING" title="料金プラン" description="店舗規模や活用範囲に応じてお選びいただけます。" />
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <article key={plan.title} className={`card relative ${plan.recommended ? "border-promo ring-2 ring-promo" : ""}`}>
              {plan.recommended && (
                <span className="absolute right-5 top-5 rounded-full bg-promo px-3 py-1 text-xs font-black text-ink">おすすめ</span>
              )}
              <h3 className="text-xl font-bold">{plan.title}</h3>
              <p className="mt-5 text-sm text-slate-600">
                月額 <span className="mx-1 text-4xl font-bold text-ink">{plan.price}</span>円〜
              </p>
              <ul className="my-7 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
                {plan.items.map((item) => <li key={item}><span className="mr-2 font-bold text-line">✓</span>{item}</li>)}
              </ul>
              <CTAButton>相談して始める</CTAButton>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-4xl rounded-3xl border border-slate-100 bg-white p-6 md:flex md:items-center md:justify-between">
          <div>
            <h3 className="font-bold">導入サポート　初期費用 30,000円〜</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              LINE公式アカウント設定、店舗用QRコード・店内POP作成、初期アンケート設計を支援します。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

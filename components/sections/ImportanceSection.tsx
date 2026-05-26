import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reasons = [
  {
    title: "来店前の判断材料になる",
    body: "お店を探しているお客様は、場所や営業時間とあわせて、実際に利用した方の感想も確認します。",
  },
  {
    title: "店舗の魅力が伝わる",
    body: "料理、接客、雰囲気などの具体的な声は、初めてのお客様が来店をイメージする助けになります。",
  },
  {
    title: "改善と再来店に活かせる",
    body: "アンケートで集めた声は、サービス改善のヒントになり、LINEを通じた再来店の接点にもなります。",
  },
];

export function ImportanceSection() {
  return (
    <section id="importance" className="section-space bg-white">
      <Container>
        <SectionTitle
          eyebrow="WHY REVIEWS MATTER"
          title="口コミは、来店前のお客様と店舗をつなぐ大切な情報です。"
          description="Googleマップでお店を検討する場面では、店舗情報だけでなく、お客様自身の体験に基づく声も選択の参考になります。"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-6 md:p-7">
              <span className="inline-flex rounded-full bg-brand-pale px-3 py-1 text-xs font-bold text-brand-dark">
                POINT {index + 1}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{reason.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-brand-pale px-6 py-5 text-center text-sm font-bold leading-7 text-ink md:text-base">
          だからこそ、満足したお客様が無理なく感想を残せる
          <span className="text-brand-dark">「投稿しやすい導線」</span>を整えることが重要です。
        </div>
      </Container>
    </section>
  );
}

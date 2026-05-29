import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reasons = [
  {
    title: "新規客に見つけてもらいやすい",
    body: "近くのお店を探す人は、Google検索やGoogleマップで候補を見ています。口コミが多いほど、お店の存在に気づいてもらいやすくなります。",
  },
  {
    title: "来店前の安心材料になる",
    body: "初めてのお店でも、実際に利用した人の感想があると安心して選びやすくなります。口コミは来店前の背中を押す材料です。",
  },
  {
    title: "お店の魅力が伝わる",
    body: "料理、接客、雰囲気、施術の満足度など、リアルな声が増えることで、写真や説明文だけでは伝わりにくい魅力も伝わります。",
  },
  {
    title: "集客力アップにつながる",
    body: "口コミが増えると、検索で見つけてもらう入口が増え、電話・経路検索・予約・来店につながるチャンスも広がります。",
  },
];

export function ImportanceSection() {
  return (
    <section id="importance" className="section-space bg-white">
      <Container>
        <SectionTitle
          eyebrow="GOOGLE MAP"
          title="Googleマップの口コミ、集めていますか？"
          description="お店探しの多くはGoogle検索やGoogleマップから始まります。口コミは、新規のお客様に選ばれるための大切な集客材料です。"
        />
        <div className="grid gap-5 lg:grid-cols-4">
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
        <div className="mt-8 grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-3xl bg-ink p-6 text-white md:p-7">
            <p className="text-sm font-bold text-line">口コミが増えると何が変わる？</p>
            <h3 className="mt-3 text-2xl font-bold leading-snug">
              Googleマップで見つけてもらいやすくなり、来店のチャンスが広がります。
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Googleでは、お店の情報や距離だけでなく、口コミ数や評価も検索結果に関わる要素として扱われます。だからこそ、来店後のお客様の声を継続的に増やすことが重要です。
            </p>
          </div>
          <div className="rounded-3xl bg-brand-pale p-6 md:p-7">
            <p className="text-sm font-bold text-brand-dark">バズクチコミでできること</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["口コミを増やす", "文章作成をラクにする", "再来店につなげる"].map((item) => (
                <p key={item} className="rounded-2xl bg-white px-4 py-4 text-center text-sm font-bold text-ink shadow-sm">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold leading-7 text-ink md:text-base">
              口コミを書いてもらうハードルを下げることで、
              <span className="text-brand-dark">Googleマップ集客と売上アップをサポート</span>します。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

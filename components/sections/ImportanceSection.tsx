import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reasons = [
  {
    title: "ローカル検索の知名度要素に関わる",
    body: "Googleのローカル検索では、関連性・距離・知名度などが考慮されます。口コミ数や評価は、知名度を判断する要素のひとつです。",
  },
  {
    title: "競合店舗との比較で見られる",
    body: "近くのお店を探すお客様は、検索結果やGoogleマップ上で複数店舗を並べ、口コミの量・評価・内容を比較します。",
  },
  {
    title: "検索キーワードとの関連が伝わる",
    body: "料理名、施術内容、接客、雰囲気などの具体的な感想が増えることで、店舗の特徴が検索ユーザーに伝わりやすくなります。",
  },
  {
    title: "表示後の来店率にも影響する",
    body: "検索結果に表示されたあとも、口コミの内容はクリック・電話・経路検索・来店判断を後押しする重要な材料になります。",
  },
];

export function ImportanceSection() {
  return (
    <section id="importance" className="section-space bg-white">
      <Container>
        <SectionTitle
          eyebrow="MEO POINT"
          title="Google検索・マップで見つけられやすい店舗づくりに、口コミは欠かせません。"
          description="MEOでは、店舗情報の整備だけでなく、実際のお客様の声が継続的に蓄積されていることも重要です。"
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
            <p className="text-sm font-bold text-line">Googleローカル検索の考え方</p>
            <h3 className="mt-3 text-2xl font-bold leading-snug">
              「関連性・距離・知名度」のうち、口コミは知名度の土台づくりに関わります。
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/78">
              Google公式ヘルプでは、ローカル検索結果は主に関連性・距離・知名度に基づくと説明されています。口コミ数や評価も知名度の要素として扱われるため、自然な口コミを継続的に集めることがMEOの土台になります。
            </p>
          </div>
          <div className="rounded-3xl bg-brand-pale p-6 md:p-7">
            <p className="text-sm font-bold text-brand-dark">バズクチコミで支援するMEO土台</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {["口コミ数の蓄積", "具体的な感想の増加", "返信・分析の習慣化"].map((item) => (
                <p key={item} className="rounded-2xl bg-white px-4 py-4 text-center text-sm font-bold text-ink shadow-sm">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 text-sm font-bold leading-7 text-ink md:text-base">
              上位表示を保証するものではありませんが、来店後の声を継続的に集める仕組みは、
              <span className="text-brand-dark">Google検索・マップで選ばれるための基盤</span>になります。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

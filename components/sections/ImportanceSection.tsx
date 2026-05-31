import { Container } from "@/components/ui/Container";

export function ImportanceSection() {
  return (
    <section id="importance" className="bg-white py-10 md:py-14">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-ink p-6 text-white shadow-card md:p-8">
          <p className="text-sm font-bold text-line">口コミが増えると何が変わる？</p>
          <h2 className="mt-3 text-2xl font-bold leading-snug md:text-3xl">
            Googleマップで見つけてもらいやすくなり、来店のチャンスが広がります。
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/78 md:text-base">
            Googleでは、お店の情報や距離だけでなく、口コミ数や評価も検索結果に関わる要素として扱われます。だからこそ、来店後のお客様の声を継続的に増やすことが重要です。
          </p>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-brand-pale/60">
      <Container>
        <SectionTitle
          eyebrow="SOLUTION"
          title="バズクチコミなら、口コミを簡単に増やせます。"
          description="来店後のアンケート回答からAIが口コミ文章を作成。お客様が確認してGoogle口コミへ進める流れを、画像でわかりやすくまとめました。"
        />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-brand/10">
          <Image
            src="/images/スキームセクション.png"
            alt="バズクチコミの口コミ生成からGoogle口コミ投稿までの流れ"
            width={887}
            height={1774}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
          />
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-2xl border border-line/15 bg-white px-6 py-4 text-sm leading-7 text-slate-600">
          特典はアンケート回答へのお礼として提供します。口コミの投稿有無や内容にかかわらず、適切な運用をご案内します。
        </p>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function SolutionSection() {
  return (
    <section id="solution" className="section-space bg-brand-pale/60">
      <Container>
        <SectionTitle
          eyebrow="SOLUTION"
          title="クチコミターボなら、口コミを簡単に増やせます。"
        />
        <div className="mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-brand/10">
          <Image
            src="/images/ステップセクション.png"
            alt="クチコミターボの口コミ生成からGoogle口コミ投稿までの流れ"
            width={887}
            height={1774}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}

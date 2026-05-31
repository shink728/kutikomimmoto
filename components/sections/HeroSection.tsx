import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-pale to-white pb-10 pt-8 md:pb-14 md:pt-12">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-white shadow-card ring-1 ring-brand/10">
          <Image
            src="/images/トップ素材.png"
            alt="BUZZクチコミのGoogle口コミ集客サポートと5ステップ説明"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) 100vw, 1120px"
            className="h-auto w-full"
          />
        </div>
        <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 rounded-[1.5rem] bg-white/95 p-3 shadow-float sm:flex-row">
          <CTAButton>まずは無料で相談する</CTAButton>
          <Link
            href="/#solution"
            className="inline-flex min-h-14 flex-1 items-center justify-center rounded-full border border-brand/20 bg-white px-8 font-bold text-brand-dark transition hover:bg-brand-pale"
          >
            仕組みを見る
          </Link>
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-pale to-white px-3 pb-8 pt-5 md:px-6 md:pb-12 md:pt-8">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-card ring-1 ring-brand/10 md:rounded-[2rem]">
          <Image
            src="/images/トップ素材.png"
            alt="BUZZクチコミのGoogle口コミ集客サポートと5ステップ説明"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 768px) 100vw, 1320px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

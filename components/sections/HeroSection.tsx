import Image from "next/image";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-pale to-white px-0 pb-8 pt-4 md:px-6 md:pb-12 md:pt-8">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative left-1/2 w-[112vw] -translate-x-1/2 overflow-hidden bg-white shadow-card ring-1 ring-brand/10 sm:w-full sm:rounded-[1.5rem] md:rounded-[2rem]">
          <Image
            src="/images/トップ素材.png"
            alt="BUZZクチコミのGoogle口コミ集客サポートと5ステップ説明"
            width={1672}
            height={941}
            priority
            sizes="(max-width: 640px) 112vw, 1320px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

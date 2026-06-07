import Image from "next/image";

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-pale to-white px-0 pb-8 pt-4 md:px-6 md:pb-12 md:pt-8">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="relative left-1/2 w-[108vw] -translate-x-1/2 bg-white shadow-card ring-1 ring-brand/10 sm:w-full sm:max-w-[864px] sm:rounded-[1.5rem] md:rounded-[2rem]">
          <div className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-promo px-5 py-2 text-base font-black leading-none text-ink shadow-promo ring-4 ring-white sm:px-8 sm:py-3 sm:text-2xl">
            業界最安値
          </div>
          <Image
            src="/images/トップ決定.png"
            alt="クチコミターボのGoogle口コミ集客サポートをまとめたトップ説明"
            width={864}
            height={1821}
            priority
            sizes="(max-width: 640px) 108vw, 864px"
            className="h-auto w-full overflow-hidden sm:rounded-[1.5rem] md:rounded-[2rem]"
          />
        </div>
      </div>
    </section>
  );
}

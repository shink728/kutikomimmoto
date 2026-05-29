import Image from "next/image";
import Link from "next/link";
import { trustPoints } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

const impactItems = [
  { label: "口コミ", value: "増やしやすい" },
  { label: "新規客", value: "来店のきっかけに" },
  { label: "売上UP", value: "集客をサポート" },
];

function PosterMockup() {
  return (
    <div className="mx-auto w-full max-w-[25rem] overflow-hidden rounded-[1.8rem] bg-white shadow-phone ring-1 ring-white/70">
      <div className="px-5 py-4">
        <div className="flex items-center gap-2 text-sm font-black text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">バ</span>
          バズクチコミ
        </div>
      </div>
      <div className="bg-brand px-5 py-3 text-center text-lg font-black text-white md:text-xl">
        Googleマップで集客したい店舗オーナー様へ
      </div>
      <div className="relative overflow-hidden bg-white px-5 pb-8 pt-7">
        <div className="relative z-10 max-w-[13rem] rounded-3xl bg-white/88 p-1">
          <p className="text-sm font-black text-ink">アンケートに答えるだけで</p>
          <h2 className="mt-3 text-4xl font-black leading-[1.05] text-ink md:text-5xl">
            口コミが
            <br />
            増える！
          </h2>
          <p className="mt-4 inline-block rounded-full bg-promo px-4 py-3 text-sm font-black leading-6 text-ink shadow-promo">
            AIが口コミ文章を
            <br />
            かんたん作成
          </p>
        </div>
        <div className="absolute -bottom-4 -right-4 h-72 w-52 overflow-hidden rounded-tl-[4rem] md:h-80 md:w-56">
          <Image
            src="/images/hero-customer-phone.png"
            alt="来店後にスマートフォンでアンケートに回答するお客様"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 24rem"
            className="object-cover object-[45%_center]"
          />
        </div>
        <div className="relative z-10 mt-10 grid grid-cols-3 gap-2 pr-24 text-center text-[11px] font-black md:pr-28">
          {["口コミUP", "新規客UP", "リピート促進"].map((item) => (
            <span key={item} className="rounded-full border-2 border-brand bg-white px-2 py-3 text-brand-dark">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-ink px-5 py-5 text-center text-xl font-black text-white">
        Googleマップ集客をまるごとサポート
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#2e3b3b] pb-16 pt-12 text-white md:pb-20 md:pt-16">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-[linear-gradient(32deg,transparent_0_42%,rgba(255,255,255,.45)_42%_45%,transparent_45%_100%),linear-gradient(118deg,transparent_0_35%,rgba(255,255,255,.35)_35%_38%,transparent_38%_100%),linear-gradient(72deg,transparent_0_58%,rgba(255,255,255,.32)_58%_61%,transparent_61%_100%)]" />
        <div className="absolute left-[6%] top-[18%] h-16 w-16 rounded-full border-[14px] border-promo-red/70 bg-white/20" />
        <div className="absolute bottom-[22%] left-[23%] h-16 w-16 rounded-full border-[14px] border-brand/70 bg-white/20" />
        <div className="absolute right-[18%] top-[28%] h-24 w-44 rounded-2xl bg-white/25" />
      </div>
      <Container className="relative grid items-center gap-8 lg:grid-cols-[.82fr_1.05fr_.86fr]">
        <div className="order-1">
          <div className="flex items-center gap-3 font-black">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand text-xl text-white shadow-lg">バ</span>
            <span className="text-2xl">バズクチコミ</span>
          </div>
          <p className="mt-8 inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-brand-dark shadow-lg">
            Googleマップの口コミ、集めていますか？
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.2rem]">
            口コミが増えれば、
            <br />
            <span className="text-promo">集客力も売上も</span>
            <br />
            変わる。
          </h1>
          <p className="mt-6 max-w-md text-base font-medium leading-8 text-white/82">
            バズクチコミは、公式LINEとAIアンケートでGoogleマップの口コミを増やしやすくする集客サポートツールです。
            お客様は質問に答えるだけ。AIが自然な口コミ文章のたたき台を作ります。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <CTAButton>無料で店舗相談をする</CTAButton>
            <Link href="/#importance" className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 font-bold text-white transition hover:bg-white/20">
              口コミが増える仕組みを見る
            </Link>
          </div>
        </div>

        <div className="order-3 lg:order-2">
          <PosterMockup />
        </div>

        <div className="order-2 rounded-[1.8rem] bg-white p-5 text-ink shadow-phone lg:order-3">
          <p className="text-sm font-black text-brand-dark">Googleマップ活用は</p>
          <h2 className="mt-2 text-3xl font-black leading-tight">
            新規来店の
            <br />
            チャンスを増やす
          </h2>
          <p className="mt-4 rounded-2xl bg-ink px-4 py-4 text-center text-sm font-black leading-6 text-white">
            口コミが増えると
            <br />
            お店を見つけてもらいやすくなります
          </p>
          <div className="mt-4 grid gap-3">
            {impactItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl bg-brand-pale px-4 py-3">
                <span className="text-sm font-bold text-slate-600">{item.label}</span>
                <span className="font-black text-brand-dark">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-500">
            検索順位や売上を保証するものではありません。Googleポリシーに配慮しながら、口コミを集めやすい流れをつくります。
          </p>
        </div>
      </Container>

      <Container className="relative mt-10">
        <div className="grid gap-3 rounded-[1.5rem] bg-white/95 p-3 text-ink shadow-float sm:grid-cols-4">
          {trustPoints.map((point) => (
            <p key={point} className="rounded-2xl bg-line-pale px-4 py-3 text-center text-xs font-black leading-5 text-brand-dark">
              {point}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

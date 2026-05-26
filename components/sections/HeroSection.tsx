import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

function PhoneMockup() {
  return (
    <div className="absolute -bottom-9 left-2 w-60 rounded-[2rem] border-[6px] border-white bg-white p-3 shadow-phone sm:left-7 sm:w-72">
      <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-slate-300" />
      <div className="rounded-2xl bg-[#ecf2f8] px-3 py-4 text-[11px] sm:text-xs">
        <p className="mb-3 text-center font-bold text-brand-dark">バズクチコミ</p>
        <p className="rounded-xl bg-white p-3 leading-5 text-slate-700">
          ご来店ありがとうございました！<br />アンケートへのご協力をお願いします。
        </p>
        <div className="ml-auto mt-3 w-fit rounded-xl bg-line px-4 py-2 font-bold text-white">
          回答する
        </div>
        <p className="mt-3 rounded-xl bg-white p-3 leading-5 text-slate-700">
          AIが感想文のたたき台を作成しました。内容を確認・編集できます。
        </p>
        <div className="mt-3 rounded-xl bg-line py-2 text-center font-bold text-white">
          口コミページへ進む
        </div>
        <div className="mt-3 rounded-lg border border-promo-dark bg-[#fff5c2] px-3 py-2 text-center font-bold text-ink">
          アンケート回答特典
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-brand-pale to-white pb-14 pt-9 md:pb-20 md:pt-14">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <p className="mb-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-dark shadow-sm">
            LINE × AIで口コミ投稿のハードルを下げる
          </p>
          <h1 className="text-4xl font-bold leading-[1.2] tracking-tight text-ink sm:text-5xl lg:text-[3.35rem]">
            来店後の感想を、
            <br />
            <span className="text-brand">自然にGoogle口コミへ。</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
            <span className="font-bold text-ink">バズクチコミ</span>は、公式LINEとAIアンケートで
            お客様自身の投稿をサポートする実店舗向けサービスです。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton>無料で店舗相談をする</CTAButton>
            <Link href="/#solution" className="inline-flex min-h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-8 font-bold text-ink transition hover:border-brand hover:text-brand-dark">
              仕組みを見る
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {["LINE登録", "アンケート", "AI下書き", "口コミ導線"].map((item, index) => (
              <div key={item} className="rounded-xl border border-brand/10 bg-white px-2 py-3 text-center text-xs font-bold text-slate-700">
                <span className="mr-1 text-brand">{index + 1}</span>{item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative mb-9 min-h-[490px] sm:min-h-[560px]">
          <div className="absolute inset-x-7 top-0 h-[420px] overflow-hidden rounded-[2rem] bg-white sm:h-[485px]">
            <Image
              src="/images/hero-store-owner.jpg"
              alt="店舗でスマートフォンからアンケート回答を確認するオーナー"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 46vw"
              className="object-cover object-[63%_center]"
            />
          </div>
          <p className="absolute right-0 top-7 rounded-full bg-line px-4 py-3 text-sm font-bold text-white shadow-lg">
            感想を集めやすい導線へ
          </p>
          <PhoneMockup />
        </div>
      </Container>
      <Container className="mt-12">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 sm:grid-cols-3">
          {["来店後の声を集める", "Google口コミへの導線を整える", "再来店の接点をつくる"].map((benefit) => (
            <p key={benefit} className="bg-white px-5 py-5 text-center text-sm font-bold text-slate-700">
              <span className="mr-2 text-line">✓</span>{benefit}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

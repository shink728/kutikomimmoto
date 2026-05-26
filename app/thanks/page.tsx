import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { CTAButton } from "@/components/ui/CTAButton";

export const metadata: Metadata = {
  title: "送信完了｜バズクチコミ",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <main className="flex min-h-[65vh] items-center bg-brand-pale/50 py-16">
      <Container className="max-w-xl">
        <div className="card px-6 py-14 text-center md:px-12">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-3xl font-bold text-white">✓</span>
          <h1 className="mt-7 text-3xl font-bold">送信が完了しました</h1>
          <p className="mt-5 leading-8 text-slate-600">
            お問い合わせありがとうございます。<br />
            内容を確認のうえ、担当者よりご連絡いたします。
          </p>
          <div className="mt-9">
            <CTAButton href="/" variant="secondary">トップページへ戻る</CTAButton>
          </div>
        </div>
      </Container>
    </main>
  );
}

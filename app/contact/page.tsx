import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "無料診断・お問い合わせ｜バズクチコミ",
  description: "バズクチコミの導入や活用方法について、店舗の状況に合わせて無料診断・ご相談をご利用いただけます。",
};

export default function ContactPage() {
  return (
    <main className="bg-brand-pale/45 py-12 md:py-20">
      <Container className="max-w-4xl">
        <div className="mb-9 text-center">
          <p className="text-sm font-bold tracking-widest text-brand">CONTACT</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">無料診断・お問い合わせ</h1>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-slate-600">
            現在のお悩みやLINE活用状況をお知らせください。店舗に合った導線づくりについてご案内します。
          </p>
        </div>
        <ContactForm />
      </Container>
    </main>
  );
}

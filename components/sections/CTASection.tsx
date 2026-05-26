import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTASection() {
  return (
    <section className="pb-14 pt-8 md:pb-16">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-brand-pale text-center text-ink">
          <div className="px-6 py-12 md:py-16">
            <p className="text-sm font-bold tracking-widest text-brand">FREE CONSULTATION</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              まずは店舗の口コミ導線を
              <br className="hidden sm:block" />無料で確認しませんか？
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-8 text-slate-600">
              店舗の業種や現在のLINE活用状況を伺い、無理のない導入方法をご案内します。
            </p>
            <div className="mt-9">
              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand px-10 text-base font-bold text-white transition hover:bg-brand-dark"
              >
                無料で相談する
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

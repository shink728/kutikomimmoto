import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CTASection({ lineUrl }: { lineUrl: string }) {
  return (
    <section className="pb-10 pt-4 md:pb-12">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-brand-pale text-center text-ink">
          <div className="px-6 py-9 md:py-12">
            <p className="text-sm font-bold tracking-widest text-brand">FREE CONSULTATION</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              まずは店舗口コミ動線を
              <br />
              無料で確認しませんか？
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-8 text-slate-600">
              店舗の業種や現在のLINE活用状況を伺い、
              <br className="hidden sm:block" />
              無理のない導入方法をご案内します。
            </p>
            <div className="mt-7">
              <Link
                href={lineUrl}
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

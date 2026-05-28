import Link from "next/link";
import { Container } from "./Container";
import { CTAButton } from "./CTAButton";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30">
      <div className="bg-brand-pale px-4 py-2 text-center text-xs font-bold text-brand-dark sm:text-sm">
        Googleポリシーに配慮｜口コミ投稿ではなくアンケート回答へのお礼として特典設計
      </div>
      <div className="border-b border-slate-100 bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-lg text-white">バ</span>
            <span className="text-lg">バズクチコミ</span>
          </Link>
          <nav className="hidden items-center gap-4 text-xs font-medium text-slate-600 lg:flex xl:gap-7 xl:text-sm">
            <Link href="/#importance" className="hover:text-line-dark">口コミの重要性</Link>
            <Link href="/#solution" className="hover:text-line-dark">仕組み</Link>
            <Link href="/#features" className="hover:text-line-dark">機能</Link>
            <Link href="/#flow" className="hover:text-line-dark">流れ</Link>
            <Link href="/#pricing" className="hover:text-line-dark">料金</Link>
            <Link href="/#faq" className="hover:text-line-dark">FAQ</Link>
          </nav>
          <div className="hidden sm:block">
            <CTAButton>無料で相談する</CTAButton>
          </div>
          <Link href="/contact" className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white sm:hidden">
            相談する
          </Link>
        </Container>
      </div>
    </header>
  );
}

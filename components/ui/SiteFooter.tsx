import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white pb-28 pt-10 md:pb-32">
      <Container className="flex flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-ink">クチコミターボ</p>
          <p className="mt-1">お客様の声と再来店をつなぐ、実店舗向けサービス</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/contact" className="hover:text-brand-dark">お問い合わせ</Link>
          <Link href="/#faq" className="hover:text-brand-dark">よくある質問</Link>
          <Link href="/legal" className="hover:text-brand-dark">特商法</Link>
          <Link href="/privacy" className="hover:text-brand-dark">プライバシーポリシー</Link>
        </div>
        <p>&copy; 2026 クチコミターボ</p>
      </Container>
    </footer>
  );
}

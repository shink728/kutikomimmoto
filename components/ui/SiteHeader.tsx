import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30">
      <div className="bg-brand-pale px-4 py-2 text-center text-xs font-bold text-brand-dark sm:text-sm">
        Googleマップの口コミを増やして、集客力アップをサポート
      </div>
      <div className="border-b border-slate-100 bg-white/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="block" aria-label="クチコミターボ トップページ">
            <Image
              src="/images/logo-kuchikomi-turbo.png"
              alt="クチコミターボ"
              width={735}
              height={150}
              priority
              sizes="(max-width: 640px) 180px, 230px"
              className="h-auto w-[180px] md:w-[230px]"
            />
          </Link>
          <nav className="hidden items-center gap-4 text-xs font-medium text-slate-600 lg:flex xl:gap-7 xl:text-sm">
            <Link href="/#importance" className="hover:text-line-dark">Googleマップ集客</Link>
            <Link href="/#solution" className="hover:text-line-dark">仕組み</Link>
            <Link href="/#features" className="hover:text-line-dark">機能</Link>
            <Link href="/#flow" className="hover:text-line-dark">流れ</Link>
            <Link href="/#pricing" className="hover:text-line-dark">料金</Link>
            <Link href="/#faq" className="hover:text-line-dark">FAQ</Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}

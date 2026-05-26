import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";

const title = "バズクチコミ｜LINEとAIでGoogle口コミへの導線を整える";
const description =
  "バズクチコミは、公式LINE・アンケート・AI文章生成を活用して、実店舗のお客様の声を集めやすくする口コミ導線サービスです。Google口コミへの導線整備、アンケート回答特典、満足度分析、再来店促進まで支援します。";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [{ url: "/images/hero-store-owner.jpg", width: 1280, height: 960, alt: "店舗でスマートフォンを確認するオーナー" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "特定商取引法に基づく表記｜クチコミターボ",
  description: "クチコミターボの特定商取引法に基づく表記です。",
};

const items = [
  ["販売事業者", "公開前のため準備中"],
  ["運営責任者", "公開前のため準備中"],
  ["所在地", "公開前のため準備中"],
  ["電話番号", "公開前のため準備中"],
  ["メールアドレス", "公開前のため準備中"],
  ["販売価格", "各プランページに記載"],
  ["商品代金以外の必要料金", "インターネット接続料金、通信料金はお客様のご負担となります。"],
  ["支払方法", "公開前のため準備中"],
  ["サービス提供時期", "お申し込み後、当社所定の手続き完了後に提供を開始します。"],
  ["キャンセル・解約", "契約内容に基づき対応します。"],
];

export default function LegalPage() {
  return (
    <main className="bg-brand-pale/45 py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-card md:p-10">
          <p className="text-sm font-bold tracking-widest text-brand">LEGAL</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">特定商取引法に基づく表記</h1>
          <dl className="mt-8 divide-y divide-slate-100 text-sm">
            {items.map(([label, value]) => (
              <div key={label} className="grid gap-2 py-5 sm:grid-cols-[12rem_1fr]">
                <dt className="font-bold text-ink">{label}</dt>
                <dd className="leading-7 text-slate-600">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </main>
  );
}

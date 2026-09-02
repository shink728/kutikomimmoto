import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "特定商取引法に基づく表記｜クチコミターボ",
  description: "クチコミターボの特定商取引法に基づく表記です。",
};

const items = [
  ["事業者名", "小寺心"],
  ["代表者名または運営責任者名", "小寺心"],
  ["所在地", "熊本県熊本市中央区上通り町5-17"],
  [
    "電話番号",
    "お問い合わせはメールにて承っております。お電話番号が必要な場合は下記メールアドレスまでご請求ください。",
  ],
  ["メールアドレス", "kutikomiturbo@gmail.com"],
  ["販売価格", "月額5,000円"],
  ["サービス提供期間", "決済完了日より1ヶ月間、以降は1ヶ月ごとの自動更新となります。"],
  [
    "サービス料金・商品代金以外に必要な費用",
    "インターネット接続料金、通信料などはお客様のご負担になります。",
  ],
  ["支払方法", "クレジットカード決済"],
  ["支払時期", "契約日を起算日として、1ヶ月ごとに自動課金されます。"],
  ["商品引渡し時期・サービス提供時期", "お申し込み完了後"],
  [
    "返品・キャンセルポリシー",
    "マイページ、お問い合わせよりいつでも解約可能です。月額課金サービスの性質上、解約後の未経過期間に対する返金は行っておりません。",
  ],
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

import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "プライバシーポリシー｜クチコミターボ",
  description: "クチコミターボのプライバシーポリシーです。",
};

const acquiredItems = [
  "氏名",
  "メールアドレス",
  "電話番号",
  "LINEアカウント情報",
  "SNSアカウント情報",
  "決済情報",
  "IPアドレス",
  "Cookie情報",
  "アクセスログ",
];

const purposes = [
  "サービス提供のため",
  "本人確認のため",
  "お問い合わせ対応のため",
  "サービス改善のため",
  "マーケティング分析のため",
  "キャンペーン情報の配信のため",
  "不正利用防止のため",
];

const externalServices = [
  "Google Analytics",
  "Google Tag Manager",
  "Meta Pixel",
  "LINE Messaging API",
  "Stripe",
  "OpenAI API",
  "Supabase",
  "Cloudflare",
  "Google Cloud",
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-2 leading-7">
          <span aria-hidden="true">・</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-brand-pale/45 py-12 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-card md:p-10">
          <p className="text-sm font-bold tracking-widest text-brand">PRIVACY POLICY</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl">プライバシーポリシー</h1>

          <div className="mt-8 space-y-8 text-sm md:text-base">
            <section>
              <h2 className="text-lg font-bold text-ink">1. 事業者情報</h2>
              <dl className="mt-4 space-y-3 text-slate-600">
                <div className="grid gap-1 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-bold text-ink">代表者名</dt>
                  <dd>小寺心</dd>
                </div>
                <div className="grid gap-1 sm:grid-cols-[8rem_1fr]">
                  <dt className="font-bold text-ink">お問い合わせ</dt>
                  <dd>
                    <Link href="/contact" className="font-bold text-brand-dark underline-offset-4 hover:underline">
                      お問い合わせフォーム
                    </Link>
                    よりご連絡ください。
                  </dd>
                </div>
              </dl>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">2. 取得する情報</h2>
              <p className="mt-3 leading-8 text-slate-600">当社は以下の情報を取得する場合があります。</p>
              <BulletList items={acquiredItems} />
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">3. 利用目的</h2>
              <BulletList items={purposes} />
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">4. 第三者提供</h2>
              <p className="mt-3 leading-8 text-slate-600">
                法令に基づく場合を除き、
                <br />
                本人の同意なく第三者へ提供しません。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">5. 外部サービス利用</h2>
              <BulletList items={externalServices} />
              <p className="mt-4 leading-8 text-slate-600">
                当社はサービス提供のため、
                <br />
                外部サービスを利用する場合があります。
                <br />
                利用者情報は各サービスのプライバシーポリシーに従って管理されます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">6. Cookieの利用</h2>
              <p className="mt-3 leading-8 text-slate-600">
                当サイトではCookieを利用しています。
                <br />
                利用者はブラウザ設定によりCookieを無効化できます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">7. 安全管理措置</h2>
              <p className="mt-3 leading-8 text-slate-600">
                当社は個人情報の漏えい、
                <br />
                滅失または毀損の防止その他安全管理のため、
                <br />
                必要かつ適切な措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">8. 開示・訂正・削除請求</h2>
              <p className="mt-3 leading-8 text-slate-600">
                本人から個人情報の開示、
                <br />
                訂正、削除等の請求があった場合、
                <br />
                法令に従い対応します。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">9. 改定について</h2>
              <p className="mt-3 leading-8 text-slate-600">本ポリシーは必要に応じて改定する場合があります。</p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink">10. 制定日・改定日</h2>
              <p className="mt-3 leading-8 text-slate-600">制定日：2026年6月8日</p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}

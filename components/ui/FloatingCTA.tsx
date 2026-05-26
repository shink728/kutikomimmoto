import Link from "next/link";

export function FloatingCTA() {
  return (
    <aside className="fixed inset-x-0 bottom-4 z-40 px-4" aria-label="お問い合わせ導線">
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full border border-slate-100 bg-white/95 p-2 shadow-float backdrop-blur">
        <Link
          href="/contact"
          className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-brand px-4 text-sm font-bold text-white transition hover:bg-brand-dark"
        >
          無料診断を申し込む
        </Link>
        <Link
          href="/contact"
          className="flex min-h-12 items-center justify-center rounded-full border border-brand px-5 text-sm font-bold text-brand-dark transition hover:bg-brand-pale"
        >
          相談する
        </Link>
      </div>
    </aside>
  );
}

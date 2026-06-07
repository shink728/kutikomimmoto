import Link from "next/link";

export function FloatingCTA() {
  return (
    <aside className="fixed inset-x-0 bottom-4 z-40 px-4" aria-label="お問い合わせ導線">
      <div className="mx-auto flex max-w-md items-center rounded-full border border-slate-100 bg-white/95 p-2 shadow-float backdrop-blur">
        <Link
          href="https://kutikomi-turbo.cotechan41.workers.dev/auth/line?ref=setup"
          className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-brand px-4 text-sm font-bold text-white transition hover:bg-brand-dark"
        >
          LINEで簡単に店舗を無料診断
        </Link>
      </div>
    </aside>
  );
}

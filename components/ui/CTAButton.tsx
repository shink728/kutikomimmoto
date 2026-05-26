import Link from "next/link";
import type { ReactNode } from "react";

export function CTAButton({
  href = "/contact",
  children = "無料で相談する",
  variant = "primary",
}: {
  href?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-lg shadow-brand/20 hover:bg-brand-dark"
      : "border border-slate-200 bg-white text-ink hover:border-brand hover:text-brand-dark";
  return (
    <Link
      href={href}
      className={`inline-flex min-h-14 items-center justify-center rounded-full px-8 text-base font-bold transition ${styles}`}
    >
      {children}
    </Link>
  );
}

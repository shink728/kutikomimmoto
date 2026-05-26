"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const fields = [
  { id: "storeName", label: "店舗名", type: "text", placeholder: "例）カフェ みどり", required: true },
  { id: "personName", label: "担当者名", type: "text", placeholder: "例）山田 太郎", required: true },
  { id: "email", label: "メールアドレス", type: "email", placeholder: "example@shop.jp", required: true },
  { id: "tel", label: "電話番号", type: "tel", placeholder: "03-1234-5678", required: true },
];

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    setSubmitting(true);
    // Submission can later be replaced with an API route or external form integration.
    router.push("/thanks");
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 p-6 md:p-9">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((field) => (
          <label key={field.id} htmlFor={field.id} className="block text-sm font-bold text-ink">
            {field.label} <span className="rounded bg-brand-pale px-1.5 py-0.5 text-xs text-brand-dark">必須</span>
            <input
              id={field.id}
              name={field.id}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              className="mt-2 block w-full rounded-xl border border-slate-200 px-4 py-3.5 font-normal outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15"
            />
          </label>
        ))}
      </div>
      <label htmlFor="industry" className="block text-sm font-bold text-ink">
        業種 <span className="rounded bg-brand-pale px-1.5 py-0.5 text-xs text-brand-dark">必須</span>
        <select
          id="industry"
          name="industry"
          required
          defaultValue=""
          className="mt-2 block w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-normal outline-none focus:border-brand focus:ring-2 focus:ring-brand/15"
        >
          <option value="" disabled>選択してください</option>
          {["飲食店", "美容室", "整体・整骨院", "エステ・サロン", "クリニック", "宿泊施設", "小売店", "その他"].map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </label>
      <label htmlFor="message" className="block text-sm font-bold text-ink">
        相談内容 <span className="rounded bg-brand-pale px-1.5 py-0.5 text-xs text-brand-dark">必須</span>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="現在のお悩みや、ご相談になりたい内容をお聞かせください。"
          className="mt-2 block w-full resize-none rounded-xl border border-slate-200 px-4 py-3.5 font-normal outline-none placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/15"
        />
      </label>
      <p className="text-sm leading-7 text-slate-500">
        送信により、ご入力内容をお問い合わせへの回答に利用することに同意いただいたものとします。
      </p>
      <button
        type="submit"
        disabled={submitting}
        className="flex min-h-14 w-full items-center justify-center rounded-full bg-brand px-8 font-bold text-white transition hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70"
      >
        {submitting ? "送信しています..." : "無料診断・相談を申し込む"}
      </button>
    </form>
  );
}

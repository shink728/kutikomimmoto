import { features } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function FeatureSection() {
  return (
    <section id="features" className="section-space bg-white">
      <Container>
        <SectionTitle eyebrow="FEATURES" title="声を集め、活かすための機能" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-card">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-pale font-bold text-brand-dark">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { industries } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function UseCaseSection() {
  const photoCases = [
    { name: "飲食店", image: "/images/usecase-restaurant.jpg", alt: "飲食店で提供される食事" },
    { name: "美容室", image: "/images/usecase-salon.jpg", alt: "美容室で接客するスタッフ" },
    { name: "整体・整骨院", image: "/images/usecase-clinic.jpg", alt: "整体院で利用者と話すスタッフ" },
  ];
  const additionalIndustries = industries.filter((industry) => !photoCases.some((item) => item.name === industry));

  return (
    <section className="section-space bg-brand-pale/45">
      <Container>
        <SectionTitle
          eyebrow="USE CASE"
          title={"さまざまな\n来店型ビジネスに"}
          description={"接客後のお客様の声を集めたい店舗で、\n無理なく活用いただけます。"}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {photoCases.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-3xl bg-white shadow-card">
              <div className="relative aspect-[4/3]">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 768px) 90vw, 30vw" className="object-cover" />
              </div>
              <p className="p-5 text-center text-lg font-bold text-ink">{item.name}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {additionalIndustries.map((industry) => (
            <span key={industry} className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm">
              {industry}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

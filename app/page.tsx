import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ImportanceSection } from "@/components/sections/ImportanceSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { UseCaseSection } from "@/components/sections/UseCaseSection";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { buildLineFriendAddUrl, faqs } from "@/lib/constants";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default async function Home({
  searchParams,
}: {
  searchParams?: Promise<{ ref?: string | string[] }>;
}) {
  const params = await searchParams;
  const lineUrl = buildLineFriendAddUrl(params?.ref);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <ImportanceSection />
      <SolutionSection />
      <UseCaseSection />
      <PricingSection lineUrl={lineUrl} />
      <FAQSection />
      <CTASection lineUrl={lineUrl} />
      <FloatingCTA lineUrl={lineUrl} />
    </main>
  );
}

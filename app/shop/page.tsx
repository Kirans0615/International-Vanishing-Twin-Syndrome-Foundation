import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "Shop" };

const PRODUCTS = [
  {
    title: "Awareness Ribbon Pin",
    price: "$8",
    image:
      "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=900&q=80",
    body: "Enamel pin in IVTSF teal. A quiet way to carry awareness.",
    badge: "Awareness",
  },
  {
    title: "Family Resource Booklet",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=80",
    body: "A 40-page printed guide for navigating a vanishing twin diagnosis. Trauma-informed, plainly written.",
    badge: "Education",
  },
  {
    title: "IVTSF Tote Bag",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
    body: "Organic cotton tote with the IVTSF wordmark. Carries our mission wherever you go.",
    badge: "Awareness",
  },
  {
    title: "Research Report Download",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
    body: "Downloadable PDF of IVTSF's most recent literature review on VTS prevalence and outcomes.",
    badge: "Research",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Shop
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              Support Our Mission
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              All proceeds support IVTSF research, education, and advocacy.
              Every item is produced thoughtfully, in keeping with our values.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <SectionReveal key={p.title} index={i}>
              <Card className="h-full overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all border-line">
                <div className="relative aspect-[4/3] bg-cloud">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="soft" className="mb-3">
                    {p.badge}
                  </Badge>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-lg font-medium text-ink leading-snug">
                      {p.title}
                    </h3>
                    <span className="font-semibold text-brand flex-shrink-0">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-5">
                    {p.body}
                  </p>
                  <Button variant="soft" className="w-full">
                    <ShoppingBag className="h-4 w-4" aria-hidden />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal>
          <p className="text-center text-sm text-muted mt-14 max-w-xl mx-auto leading-relaxed">
            This shop exists for awareness and fundraising only — not commercial
            gain. All proceeds go directly to IVTSF programs.
          </p>
        </SectionReveal>
      </section>
    </>
  );
}

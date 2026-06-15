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
    body: "Hand-finished enamel pin in our purple awareness color.",
  },
  {
    title: "Family Guide Booklet",
    price: "$14",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=900&q=80",
    body: "A 40-page printed guide for navigating a vanishing twin diagnosis.",
  },
  {
    title: "Provider Handbook",
    price: "$22",
    image:
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=900&q=80",
    body: "Clinical communication framework, conversation scripts, and resources.",
  },
  {
    title: "Memory Card Set",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1606103836293-0a063ee20566?auto=format&fit=crop&w=900&q=80",
    body: "A set of letterpress cards to honor and remember.",
  },
  {
    title: "Awareness Tote Bag",
    price: "$24",
    image:
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=900&q=80",
    body: "Organic cotton tote with the IVTSF mark in deep violet.",
  },
  {
    title: "Donor Recognition Bundle",
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80",
    body: "Pin, booklet, tote, and handwritten thank-you note from our team.",
  },
];

export default function ShopPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Shop
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-5">
              Awareness, educational, and memorial items.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              Every item is produced thoughtfully. All proceeds support IVTSF&apos;s
              mission of research, education, and family support.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <SectionReveal key={p.title} index={i}>
              <Card className="h-full overflow-hidden hover:shadow-soft hover:-translate-y-1 transition-all">
                <div className="relative aspect-[4/3] bg-brand-paper">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-brand-ink">
                      {p.title}
                    </h3>
                    <span className="text-lg font-bold text-brand">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed mb-5">
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

        <p className="text-center text-sm text-brand-muted mt-14">
          All proceeds support IVTSF&apos;s mission.
        </p>
      </section>
    </>
  );
}

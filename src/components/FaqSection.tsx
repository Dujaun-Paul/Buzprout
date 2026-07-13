import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { FAQS } from "../data/faq";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 section-muted">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">FAQ</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-3">Common questions</h2>
          <p className="text-muted-foreground text-sm">
            Straight answers on how we work, what things cost, and what happens after you reach out.
          </p>
        </div>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-card shadow-soft overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/20 transition-colors duration-150 gap-4"
              >
                <span className="text-sm font-medium text-foreground">{faq.q}</span>
                {openFaq === i ? (
                  <Minus size={15} className="text-primary shrink-0" />
                ) : (
                  <Plus size={15} className="text-muted-foreground shrink-0" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

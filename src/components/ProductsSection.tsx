import { ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "../data/products";

const STATUS_LABELS = {
  live: "Live",
  beta: "Beta",
  "coming-soon": "Coming soon",
} as const;

export default function ProductsSection() {
  return (
    <section id="products" className="py-28 px-6 section-muted">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-xs text-primary uppercase tracking-widest font-medium mb-4">
            Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            Software born from<br />real client problems.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Client work reveals patterns. We're turning the best ones into products that help more businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PRODUCTS.map((product) => (
            <div
              key={product.name}
              className="flex flex-col p-7 rounded-2xl border border-border bg-card shadow-soft"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    product.status === "live"
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {STATUS_LABELS[product.status]}
                </span>
              </div>
              <p className="text-sm text-primary font-medium mb-3">{product.tagline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {product.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {product.url ? (
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4"
                >
                  Visit {product.name} <ArrowUpRight size={14} />
                </a>
              ) : (
                <span className="text-sm text-muted-foreground">On the roadmap</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

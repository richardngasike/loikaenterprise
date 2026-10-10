import Image from "next/image";
import { PRODUCTS } from "../lib/site";

export default function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our range</span>
          <h2>Garments we stitch and print.</h2>
          <p>
            From single custom pieces to bulk production, every garment is made to
            the specification you approve.
          </p>
        </div>

        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <article key={product.title} className="product-card">
              <div className="media">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 22vw"
                />
              </div>
              <div className="product-body">
                <h3>{product.title}</h3>
                <p>{product.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

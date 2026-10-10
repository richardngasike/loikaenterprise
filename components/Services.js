import Image from "next/image";
import { SERVICES } from "../lib/site";

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Our services</span>
          <h2>Everything your garments need, from one team.</h2>
          <p>
            We handle stitching, branding and printing in-house, then deliver the
            finished order to you.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.key} className="service-card">
              <div className="media">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 22vw"
                />
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

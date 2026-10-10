import Image from "next/image";
import { IMAGES } from "../lib/site";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner-bg">
        <Image
          src={IMAGES.banner}
          alt="Sewing machine stitching fabric in a production workshop"
          fill
          sizes="100vw"
        />
      </div>
      <div className="banner-overlay" aria-hidden="true" />
      <div className="container">
        <div className="banner-content">
          <span className="eyebrow">Ready when you are</span>
          <h2>Dressing your team in clothes that represent your brand.</h2>
          <p>
            Send us your garment type, quantity and artwork. We will come back to you
            with a clear quote and a production timeline.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start your order
          </a>
        </div>
      </div>
    </section>
  );
}

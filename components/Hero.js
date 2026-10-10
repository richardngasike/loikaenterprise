import Image from "next/image";
import { FaTshirt, FaPrint, FaCut, FaTruck } from "react-icons/fa";
import { SITE, IMAGES } from "../lib/site";

const highlights = [
  { icon: FaCut, text: "Stitching and embroidery" },
  { icon: FaTshirt, text: "Branded uniforms" },
  { icon: FaPrint, text: "Custom cloth printing" },
  { icon: FaTruck, text: "Delivery to your door" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">{SITE.tagline}</span>
          <h1>Quality garments, stitched and printed to your brand.</h1>
          <p className="hero-text">{SITE.description}</p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Request a quote
            </a>
            <a href="#services" className="btn btn-outline-light">
              View services
            </a>
          </div>

          <ul className="hero-highlights">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={18} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-media">
          <Image
            src={IMAGES.hero}
            alt="Racks of finished garments ready for delivery"
            fill
            priority
            sizes="(max-width: 860px) 92vw, 540px"
          />
        </div>
      </div>
    </section>
  );
}

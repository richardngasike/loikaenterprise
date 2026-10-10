import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SITE, SERVICES } from "../lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              {SITE.brandMain} <span>{SITE.brandSub}</span>
            </a>
            <p>{SITE.description}</p>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.key}>
                  <a href="#services">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="footer-link">
                  <FaPhoneAlt size={13} aria-hidden="true" /> {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="footer-link">
                  <FaEnvelope size={13} aria-hidden="true" /> {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

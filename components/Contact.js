"use client";

import { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SITE, SERVICES } from "../lib/site";

const initialState = {
  name: "",
  contact: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceLabel =
      SERVICES.find((s) => s.key === form.service)?.title || "General enquiry";

    const subject = encodeURIComponent(`Enquiry: ${serviceLabel} - ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\n` +
        `Phone / Email: ${form.contact}\n` +
        `Service: ${serviceLabel}\n\n` +
        `${form.message}`
    );

    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Contact us</span>
          <h2>Tell us what you need.</h2>
          <p>
            Send us your garment type, quantity and branding details and we will come
            back to you with a quote. You can also reach us directly.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt size={16} aria-hidden="true" />
            </div>
            <div>
              <h3>Phone</h3>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope size={16} aria-hidden="true" />
            </div>
            <div>
              <h3>Email</h3>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="contact">Phone or email</label>
              <input
                id="contact"
                name="contact"
                type="text"
                required
                value={form.contact}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="service">Service needed</label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a service
              </option>
              {SERVICES.map((s) => (
                <option key={s.key} value={s.key}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Garment type, quantity, colours, sizes and delivery location"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send enquiry
          </button>
          <p className="form-note">
            Submitting opens your email app with your enquiry addressed to {SITE.email}.
          </p>
        </form>
      </div>
    </section>
  );
}

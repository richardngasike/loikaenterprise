"use client";

import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { SITE } from "../lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header id="top" className="navbar">
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close} aria-label={SITE.name}>
          {SITE.brandMain} <span>{SITE.brandSub}</span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={close}>
            Get a quote
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>
    </header>
  );
}

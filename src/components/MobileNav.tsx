"use client";

import { useState, useEffect } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        className="nav-hamburger"
        onClick={() => setOpen(!open)}
        aria-label="メニュー"
        aria-expanded={open}
      >
        <span className={`hamburger-line ${open ? "open" : ""}`} />
        <span className={`hamburger-line ${open ? "open" : ""}`} />
      </button>

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <ul className="mobile-menu-links">
          {["services", "team", "process", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

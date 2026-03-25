"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

      {mounted && createPortal(
        <div className={`mobile-menu ${open ? "active" : ""}`}>
          <button
            className="mobile-menu-close"
            onClick={() => setOpen(false)}
            aria-label="メニューを閉じる"
          >
            <span className="hamburger-line open" />
            <span className="hamburger-line open" />
          </button>
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
        </div>,
        document.body
      )}
    </>
  );
}

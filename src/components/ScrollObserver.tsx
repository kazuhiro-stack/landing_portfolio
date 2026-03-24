"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".observe-fade").forEach((el) => {
      observer.observe(el);
    });

    document.querySelectorAll(".team-card").forEach((card, i) => {
      (card as HTMLElement).style.transitionDelay = `${i * 0.15}s`;
      card.classList.add("observe-fade");
      observer.observe(card);
    });

    document.querySelectorAll(".process-step").forEach((step, i) => {
      (step as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
      step.classList.add("observe-fade");
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

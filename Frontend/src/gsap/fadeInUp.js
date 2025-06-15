import { gsap } from "gsap";

export function fadeInUp(target, options = {}) {
  gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out", ...options }
  );
}
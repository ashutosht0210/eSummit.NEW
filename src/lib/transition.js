import { gsap } from "gsap";

export function playPageTransition(onMid) {
  const overlay = document.querySelector(".page-transition-overlay");
  if (!overlay) {
    onMid();
    return;
  }
  const tl = gsap.timeline();
  tl.set(overlay, { y: "100%" })
    .to(overlay, { y: "0%", duration: 0.6, ease: "power4.inOut" })
    .add(() => onMid())
    .to(overlay, { y: "-100%", duration: 0.7, ease: "power4.inOut" }, "+=0.1")
    .set(overlay, { y: "100%" });
}

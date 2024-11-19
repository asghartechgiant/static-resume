import gsap from "gsap";

// Animate logo on page load
gsap.from(".logo", {
  duration: 2,
  opacity: 0,
  scale: 0.5,
  rotation: 360,
  ease: "elastic.out(1, 0.5)",
});

// Animate profile picture
gsap.from(".picture-resume img", {
  duration: 1.5,
  opacity: 0,
  y: -50,
  ease: "power2.out",
});

// Animate name
gsap.from(".name", {
  duration: 1.5,
  opacity: 0,
  x: -100,
  delay: 0.5,
  ease: "power2.out",
});

// Animate contact info
gsap.from(".contact-info ul li", {
  duration: 1,
  opacity: 0,
  x: 50,
  stagger: 0.3,
  ease: "power2.out",
});

// Animate experience and skills sections
gsap.from(".experience", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  delay: 1,
  ease: "power2.out",
  stagger: 0.3,
});

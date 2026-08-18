gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  const tl = gsap.timeline({defaults:{ease:"power3.out"}});

  tl.from(".navbar", {y:-40, opacity:0, duration:.7})
    .from(".hero-content .reveal", {y:35, opacity:0, duration:.65, stagger:.1}, "-=.35")
    .from(".profile-card", {scale:.88, opacity:0, rotateY:-12, duration:1}, "-=.55")
    .from(".floating-tag", {scale:0, opacity:0, duration:.45, stagger:.12}, "-=.5");

  gsap.to(".orbit-one", {
    rotation:360,
    duration:22,
    repeat:-1,
    ease:"none"
  });

  gsap.to(".orbit-two", {
    rotation:-360,
    duration:30,
    repeat:-1,
    ease:"none"
  });

  gsap.to(".profile-card", {
    y:-10,
    duration:2.2,
    repeat:-1,
    yoyo:true,
    ease:"sine.inOut"
  });

  gsap.utils.toArray(".reveal").forEach((el) => {
    if (el.closest(".hero")) return;
    gsap.from(el, {
      scrollTrigger:{
        trigger:el,
        start:"top 88%",
        toggleActions:"play none none reverse"
      },
      y:35,
      opacity:0,
      duration:.75,
      ease:"power3.out"
    });
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.querySelector("#navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  window.addEventListener("scroll", () => {
    document.querySelector("#mainNav").classList.toggle("scrolled", window.scrollY > 30);
  });
});

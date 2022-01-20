let timeline = gsap.timeline({ defaults: { Easings: Expo.easeOut } });
timeline
  .from(".background", {
    scale: 0.6,
    duration: 2,
    opacity: 0,
    ease: Expo.easeOut,
    delay: 0.2,
  })
  .to(
    ".textReveal",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      stagger: 0.3,
      duration: 1,
    },
    "-=2.9"
  )
  .to(".textReveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    y: -200,
    duration: 0.2,
    stagger: 0.2,
    delay: 0.2,
  })
  .to(".textReveal", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    stagger: 0.3,
    delay: 0.5,
    duration: 0.3,
  })
  .to("svg", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    y: -200,
    delay: 0.1,
  })
  .to(
    ".location",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      stagger: 0.3,
      opacity: 1,
      duration: 1,
      delay: 0.1,
    },
    "-=1.8"
  );

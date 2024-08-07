

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".container",
        start: "top 0",
        end: "bottom 0",
        scrub: true,
        pin: true,
    },
});

tl.to(
    ".top",
    {
        y: -500,
        duration: 1,
    },
    "a"
);

tl.to(
    ".end",
    {
        y: 500,
        duration: 1,
    },
    "a"
);

const HeroAnimation = {
    initial: {
        opacity: 0,
        y: 20,
    },
    view: {
        opacity: 1,
        y: 0,
    },
    transition: {
        delay: 0.2,
    },
    cta_hover: {
        backgroundColor: "var(--color-custom-3)",
        color: "var(--color-custom-1)",
        boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
        scale: 1.05,
    },
    cta_tap: {
        scale: 0.95,
    },
};

const SlideAnimation = {
    initial: {
        opacity: 0,
        x: 100,
    },
    view: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -100,
    },
};

export { HeroAnimation,SlideAnimation };

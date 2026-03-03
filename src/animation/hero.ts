import { Variants } from "motion";
import { smoothSpring } from "./general";

const HeroAnimation: Variants = {
    initial: { opacity: 0, y: 24 },
    view: {
        opacity: 1,
        y: 0,
        transition: smoothSpring,
    },
    container: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.14,
            delayChildren: 0.1,
        },
    },
    sec_cta_hover: {
        backgroundColor: "hsla(0, 2%, 9%, 1)",
        border: "1px solid hsla(45, 85%, 53%, 1)",
        y: -2,
    },
    cta_hover: {
        backgroundColor: "hsla(45, 85%, 53%, 1)",
        boxShadow: "0 10px 24px hsla(45, 85%, 53%, 0.55)",
        y: -2,
        scale: 1.03,
    },
    cta_tap: {
        scale: 0.97,
    },
};

const SlideAnimation = {
    initial: {
        opacity: 0,
        x: 60,
    },
    view: {
        opacity: 1,
        x: 0,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -60,
    },
};

export { HeroAnimation,SlideAnimation };

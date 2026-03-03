import { Variants } from "motion";

const navItemMotion: Variants = {
    hover: {
        color: "var(--color-gold)",
        y: -1,
    },
    tap: {
        scale: 0.97,
    },
};

const drawerMotion: Variants = {
    hidden: {
        x: "100%",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
};

export {drawerMotion, navItemMotion}
import { Variants } from "motion";

const cardVariants: Variants = {
    initial: {
        y: 34,
        opacity: 0,
        scale: 0.98,
    },
    view: (index) => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            delay: index * 0.1,
            type: "spring",
            stiffness: 120,
            damping: 18,
        },
    }),
    hover: {
        y: -6,
        scale: 1.02,
        boxShadow: "0 18px 35px -30px hsla(45, 65%, 23%, 0.95)",
        transition: {
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
        }
    },
};

const buttonVariant: Variants = {
    btn_hover: {
        background: "hsla(45, 65%, 53%, 1)",
        color: "hsla(180, 6%, 3%, 1)",
        y: -2,
    },
    tap: {
        scale: 0.95,
    },
};

const iconVariant = {
    btn_hover: {
        x: 15,
        transition: {
            type: "spring",
            stiffness: 250,
            duration: 0.3,
        },
    },
};

export {cardVariants, buttonVariant, iconVariant}

import { Variants } from "motion";

const footerChildVariant: Variants = {
    initial: { opacity: 0, x: -50 },
    view: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100,
        },
    },
};

const inputVariants: Variants = {
    animate: (focus) => ({
        borderColor: focus
            ? "var(--color-dark-text)"
            : "var(--color-dark-text)",
        boxShadow: focus
            ? "0 0 8px rgba(37, 99, 235, 0.4)"
            : "0 0 0 rgba(0,0,0,0)",
    }),
};

const FooterCardVariant: Variants = {
    hover: {
        backgroundColor: "var(--color-gold)",
        border: "1px solid var(--custom-gold)",
        scale: 1.1,
        transition: {
            type: "spring",
            stiffness: 300,
        },
    },
    tap: {},
    exit: {
        scale: 0,
    },
};

const FooterLinkVariant: Variants = {
    hover: {
        // background: "var(--color-custom-2)",
        color: "var(--color-gold)",
        scale: 1.02,
        transition: {
            delay: 0.2,
            stiffness: 100,
            type: "spring",
        },
    },
    tap: {
        scale: 0.95,
    },
};


export { footerChildVariant, inputVariants, FooterCardVariant, FooterLinkVariant };

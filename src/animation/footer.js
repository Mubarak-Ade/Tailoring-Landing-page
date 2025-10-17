const footerChildVariant = {
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

const inputVariants = {
    animate: (focus) => ({
        borderColor: focus
            ? "var(--color-custom-5)"
            : "var(--color-custom-2)",
        boxShadow: focus
            ? "0 0 8px rgba(37, 99, 235, 0.4)"
            : "0 0 0 rgba(0,0,0,0)",
    }),
};

const FooterCardVariant = {
    hover: {
        backgroundColor: "var(--color-custom-2)",
        border: "1px solid var(--custom-color-1)",
        scale: 1.1,
    },
    tap: {},
    transition: {
        type: "spring",
        stiffness: 300,
    },
    exit: {
        scale: 0,
    },
};

const FooterLinkVariant = {
    hover: {
        background: "var(--color-custom-2)",
        color: "var(--color-white)",
        scale: 1.02,
    },
    tap: {
        scale: 0.95,
    },
    transition: {
        delay: 0.2,
        stiffness: 100,
        type: "spring",
    },
};


export { footerChildVariant, inputVariants, FooterCardVariant, FooterLinkVariant };

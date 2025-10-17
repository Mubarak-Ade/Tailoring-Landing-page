const containerVariant = {
    initial: { opacity: 0, y: 50 },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.5,
            when: "beforeChildren",
        },
        viewport: { once: true, amount: "all" },
    },
};

export { containerVariant };

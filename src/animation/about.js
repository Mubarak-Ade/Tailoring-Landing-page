// animation/aboutVariants.js

export const imageVariants = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    animate: {
        borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 50% 70% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
    },
    transition: {
        scale: { duration: 1, type: "spring", stiffness: 100 },
        opacity: { duration: 1 },
        borderRadius: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const dividerVariants = {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
    transition: { duration: 1, type: "spring", stiffness: 300 },
};

export const titleVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 300 },
};

export const textVariants = {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.3, duration: 0.5, type: "spring", stiffness: 300 },
};

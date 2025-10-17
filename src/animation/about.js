const BorderAnimation = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "40% 60% 70% 30% / 50% 70% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
    },
    view: {
        opacity: 1,
        scale: 1,
    },
    transition: {
        scale: {
            duration: 1,
            type: "spring",
            stiffness: 100,
        },
        opacity: {
            duration: 1,
        },
        borderRadius: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const DividerAnimation = {
    
}


export {BorderAnimation}
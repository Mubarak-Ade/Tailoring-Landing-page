import { Variants } from 'motion';

const smoothSpring = {
    type: 'spring',
    stiffness: 120,
    damping: 18,
    mass: 0.8,
} as const;

const containerVariant: Variants = {
    initial: { opacity: 0, y: 40 },
    view: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.16,
            when: 'beforeChildren',
        },
    },
};

const itemVariant: Variants = {
    initial: { opacity: 0, y: 24 },
    view: {
        opacity: 1,
        y: 0,
        transition: smoothSpring,
    },
};

export { containerVariant, itemVariant, smoothSpring };

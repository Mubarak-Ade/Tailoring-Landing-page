// animation/aboutVariants.js

import { Transition, Variants } from 'motion';
import { smoothSpring } from './general';

const imageTransition = {
    scale: smoothSpring,
    opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} satisfies Transition;

export const imageVariants = {
    initial: { opacity: 0, scale: 0.88, y: 24, transition: imageTransition },
    view: { opacity: 1, scale: 1, y: 0, transition: imageTransition },
    animate: {
        borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 70% 30% / 50% 70% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
        y: [0, -8, 0],
        transition: {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
} satisfies Variants;

export const dividerVariants = {
    initial: { scale: 0 },
    view: { scale: 1 },
};
export const sharedTransition: Transition = {
    ...smoothSpring,
    delay: 0.08,
};

export const titleVariants = {
    initial: { opacity: 0, y: 20 },
    view: { opacity: 1, y: 0 },
};

export const cardVariant:Variants = {
        hover: {
            backgroundColor: "hsla(120, 1%, 15%, 1)",
            border: "0.5px solid hsla(45, 65%, 53%, 1)",
            boxShadow: "0 5px 15px hsla(45, 65%, 23%, 1)",
            scale: 1.03,
            y: -4,
            transition: {
                type: "spring",
                stiffness: 260,
            },
        },
        tap: {},
        exit: {
            scale: 0,
        },
    };

export const textVariants = {
    initial: { opacity: 0, x: 20 },
    view: { opacity: 1, x: 0 },
};

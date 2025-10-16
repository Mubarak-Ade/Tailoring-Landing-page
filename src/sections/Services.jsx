import { HiOutlineScissors, HiScissors } from "react-icons/hi";
import { GiAmpleDress, GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import React from "react";
import { AnimatePresence, motion } from "motion/react";


const Services = () => {
    const cardVariant = {
        hover: {
            backgroundColor: "var(--color-custom-5)",
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

    return (
        <div className="px-6 py-3">
            <AnimatePresence>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.1,
                        type: "spring",
                        stiffness: 200,
                    }}
                    className="grid grid-cols-4 text-xs [&_span]:border-2 [&_span]:border-custom-1 [&_span]:cursor-pointer [&_span]:text-custom-1 [&_span]:flex [&_span]:flex-col [&_span]:items-center [&_span]:size-25 [&_span]:justify-center [&_span]:rounded-xl [&_span]:gap-2 m-10 align-middle gap-10 justify-center"
                >
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiAmpleDress className="text-5xl" />
                        <p className="font-semibold">Dress</p>
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiSewingMachine className="text-5xl" />
                        <p className="font-semibold">Sewing</p>
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiSewingNeedle className="text-5xl" />
                        <p className="font-semibold">Needle Work</p>
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <HiScissors className="text-5xl" />
                        <p className="font-semibold">Cut</p>
                    </motion.span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Services;

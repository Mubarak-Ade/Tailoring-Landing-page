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
                    className="flex font-playfair text-xs align-middle gap-5 justify-center"
                >
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className="border-2 size-18 text-center lg:size-25 mt-5 border-custom-1 cursor-pointer text-custom-1 flex flex-col items-center justify-center rounded-xl gap-2 lg:mt-10"
                    >
                        <GiAmpleDress className="lg:text-5xl text-2xl" />
                        <p className="font-semibold">Dress</p>
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className="border-2 size-18 text-center lg:size-25 mt-5 border-custom-1 cursor-pointer text-custom-1 flex flex-col items-center justify-center rounded-xl gap-2 lg:mt-10"
                    >
                        <GiSewingMachine className="lg:text-5xl text-2xl" />
                        <p className="font-semibold">Sewing</p>
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=" border-2 size-18 text-center lg:size-25 mt-5 border-custom-1 cursor-pointer text-custom-1 flex flex-col items-center justify-center rounded-xl gap-2 lg:mt-10"
                    >
                        <GiSewingNeedle className="lg:text-5xl text-2xl" />
                        <p className="font-semibold">Needle Work</p>
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=" border-2 size-18 text-center lg:size-25 mt-5 border-custom-1 cursor-pointer text-custom-1 flex flex-col items-center justify-center rounded-xl gap-2 lg:mt-10"
                    >
                        <HiScissors className="lg:text-5xl text-2xl" />
                        <p className="font-semibold">Cut</p>
                    </motion.span>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Services;

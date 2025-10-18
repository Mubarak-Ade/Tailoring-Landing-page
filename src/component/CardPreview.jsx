import { FaX } from "react-icons/fa6";
import React, { useState } from "react";
import { galleryData } from "../data";
import { AnimatePresence, motion } from "motion/react";

const CardPreview = ({ currentIndex, setCurrentIndex }) => {
    // if (currentIndex === null) return null;

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex items-center justify-center flex-col h-full fixed bg-custom-1/10 z-200 top-0 left-0 "
                >
                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1,
                            type: "spring",
                            stiffness: 200,
                            ease: "easeIn",
                        }}
                        className="flex relative items-center flex-col h-160 rounded-xl shadow-2xl z-110 px-6 py-8 bg-linear-100 from-60% from-custom-1 to-custom-2 overflow-hidden max-w-2xl"
                    >
                        <h1 className="text-white font-montserrat text-3xl font-bold">
                            {galleryData[currentIndex].title}
                        </h1>
                        <p className="text-sm font-open-sans text-center mx-10 mt-2 text-white">
                            {galleryData[currentIndex].details}
                        </p>
                        <div className="w-80 mt-2 shadow-[0_5px_18px] shadow-black/50 rounded-xl flex flex-col  items-center">
                            <div
                                className="overflow-hidden h-50 flex items-center justify-center w-full rounded-t-xl p-4 bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${galleryData[currentIndex].image})`,
                                }}
                            ></div>
                            <ul className="text-white px-5 mt-4 list-disc">
                                <h6 className="text-xl font-sour-gummy text-white font-bold">
                                    More Detail
                                </h6>
                                {galleryData[currentIndex].more.map(
                                    (more, index) => (
                                        <li
                                            className="text-sm font-poppins mt-2 mx-4"
                                            key={index}
                                        >
                                            {more}
                                        </li>
                                    )
                                )}
                            </ul>
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "var(--color-custom-5)",
                                    color: "var(--color-custom-1)",
                                }}
                                whileTap={{
                                    scale: 0.9,
                                }}
                                transition={{
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 100,
                                }}
                                className="text-custom-1 font-open-sans cursor-pointer w-40 text-base font-bold rounded-lg px-6 py-2 m-4 bg-custom-2"
                            >
                                Book Now
                            </motion.button>
                        </div>
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "var(--color-custom-5)",
                                color: "var(--color-custom-1)",
                            }}
                            whileTap={{
                                scale: 0.9,
                            }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                            onClick={() => setCurrentIndex(null)}
                            className="text-xs rounded-full shadow-2xl cursor-pointer bg-custom-1 p-2 top-0 right-0 m-2 text-white absolute"
                        >
                            <FaX />
                        </motion.span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CardPreview;

import { FaX } from "react-icons/fa6";
import React, { useState } from "react";
import { galleryData } from "../data";
import { AnimatePresence, motion } from "motion/react";

const CloseButton = ({ onClick }) => (
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
        onClick={onClick}
        className="text-xs rounded-full shadow-2xl cursor-pointer bg-custom-1 p-2 top-0 right-0 m-2 text-white absolute"
    >
        <FaX />
    </motion.span>
);

const BookButton = () => (
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
        className="text-white font-open-sans cursor-pointer lg:w-40 w-full text-base font-bold rounded-lg px-6 py-2 my-4 bg-gradient-to-r from-custom-2 to-custom-1"
    >
        Book Now
    </motion.button>
);

const CardPreview = ({ currentIndex, onSelect }) => {
    if (currentIndex === null) return null;

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full flex backdrop-blur-sm items-center justify-center flex-col h-full fixed bg-custom-1/10 z-200 inset-0"
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
                        }}
                        className="flex relative items-center md:h-160 flex-col h-full lg:h-160 rounded-xl shadow-lg z-110 px-6 py-4 bg-linear-100 from-60% from-custom-1 to-custom-2 overflow-hidden max-w-3xl "
                    >
                        <h1 className="text-white font-montserrat m-auto lg:mt-2 text-2xl lg:text-3xl font-bold">
                            {galleryData[currentIndex].title}
                        </h1>
                        <p className="text-sm font-open-sans text-center mx-10 text-white">
                            {galleryData[currentIndex].details}
                        </p>
                        <div className="w-80 mt-2 lg:mt-4 shadow-[0_5px_18px] shadow-black/50 rounded-xl flex flex-col  items-center">
                            <div
                                className="overflow-hidden h-60 flex items-center w-full rounded-t-xl bg-contain bg-center"
                                style={{
                                    backgroundImage: `url(${galleryData[currentIndex].image})`,
                                }}
                            ></div>
                            <div className="px-5 mt-2">
                                <h6 className="text-xl font-sour-gummy text-white font-bold mb-2">
                                    More Detail
                                </h6>
                                <ul className="text-white list-inside space-y-2 mx-4 list-disc">
                                    {galleryData[currentIndex].more.map(
                                        (more, index) => (
                                            <li
                                                className="text-sm font-poppins"
                                                key={index}
                                            >
                                                {more}
                                            </li>
                                        )
                                    )}
                                </ul>
                                <BookButton />
                            </div>
                        </div>
                        <CloseButton onClick={() => onSelect(null)} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CardPreview;

import { BsArrowRight } from "react-icons/bs";
import React from "react";
import Image from "../assets/images/mo.png";
import Image1 from "../assets/images/mockimage.png";
import Image2 from "../assets/images/mockimage1.png";
import Image3 from "../assets/images/mockimage2.png";
import Image4 from "../assets/images/mockimage3.png";
import { AnimatePresence, motion } from "motion/react";

const Gallery = () => {
    const images = [Image, Image1, Image2, Image3, Image4];

    const cardVariants = (index) => ({
        initial: {
            y: 20 * index,
            opacity: 0,
        },
        view: {
            y: 0,
            opacity: 1,
        },
        hover: {
            background:
                "linear-gradient(120deg, var(--color-custom-2), var(--color-custom-1)",
            color: "var(--color-white)",
        },
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            durantion: 2,
        },
    });

    const imageVariant = {
        initial: {},
        hover: {
            scale: 1.2,
        },
        transition: {
            type: "spring",
            stiffness: 150,
            durantion: 1,
        },
    };

    const buttonVariant = {
        initial: {},
        hover: {
            background: "var(--color-custom-1)",
        },
        transition: {
            type: "spring",
            stiffness: 200,
            durantion: 1,
        },
        tap: {
            scale: .9
        }
    };

    const iconVariant = {
        hover: {
            x: 120,
        },
        transition: {
            type: "spring",
            stiffness: 250,
            durantion: 1,
        },
    };

    return (
        <div className="px-6 bg-white/80 py-6">
            <h1 className="text-5xl font-bold mt-5">Gallery</h1>
            <div className="grid grid-cols-3 place-items-center mt-10 gap-5">
                <AnimatePresence mode="wait">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            layoutId={index}
                            variants={cardVariants(index)}
                            initial="initial"
                            whileInView="view"
                            whileHover="hover"
                            transition="transition"
                            className="overflow-hidden w-80 border-2 border-custom-1 rounded-2xl flex flex-col"
                        >
                            <div className="bg-linear-120 from-custom-2 to-custom-1 w-full rounded-t-xl p-4 flex items-center justify-center">
                                <motion.img
                                    variants={imageVariant}
                                    src={image}
                                    alt={image}
                                    className="w-50 h-60"
                                />
                            </div>
                            <h1 className="text-2xl m-2 font-bold">
                                Dress Making
                            </h1>
                            <p className="m-2">
                                Tailored to fit your every detail and ocassion
                            </p>
                            <motion.button
                                variants={buttonVariant}
                                whileTap="tap"
                                className="text-sm rounded-xl cursor-pointer text-white font-bold bg-custom-2 px-6 m-2 py-4 flex gap-5 items-center"
                            >
                                View Detail{" "}
                                <motion.span variants={iconVariant}>
                                    <BsArrowRight size={20} />
                                </motion.span>
                            </motion.button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Gallery;

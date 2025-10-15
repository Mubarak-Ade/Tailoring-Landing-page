import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Image from "../assets/images/mockimage.png";
import Image1 from "../assets/images/mockimage1.png";
import Image2 from "../assets/images/mockimage2.png";
import { AnimatePresence, motion } from "motion/react";
import Lottie from "lottie-react";
import sewingAnimate from "../Sewing.json";

const Hero = () => {
    const [slideCurrent, setSlideCurrent] = useState(0);
    const slideImage = [Image, Image1, Image2];

    const handleNextBtn = () => {
        setSlideCurrent((prev) => (prev + 1) % slideImage.length);
    };

    const handlePrevBtn = () => {
        setSlideCurrent(
            (prev) => (prev - 1 + slideImage.length) % slideImage.length
        );
    };

    useEffect(() => {
        const interviewId = setInterval(() => {
            handleNextBtn();
        }, 3000);
        return () => clearInterval(interviewId);
    }, []);

    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.div layout className="flex relative pt-20 relative">
                    <div className="bg-hero bg-cover bg-center absolute inset-0 h-full w-full"></div>
                    <div className="absolute bg-custom-1/80 inset-0 "></div>
                    <div className="flex-1 px-10 py-8 z-50">
                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.2,
                            }}
                            className="text-6xl mt-10 font-bold text-start text-white"
                        >
                            <span className="text-custom-3">
                                Tailored to Perfection
                            </span>{" "}
                            - Crafted just for you
                        </motion.h1>
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: 0.3,
                            }}
                            className="text-xl mt-10 text-gray-100 text-start"
                        >
                            Bespoke suits, dresses, and alterations that bring
                            out your best fit
                        </motion.p>
                        <motion.button
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            whileHover={{
                                backgroundColor: "var(--color-custom-3)",
                                color: "var(--color-white)",
                                boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            transition={{
                                // delay: 0.4,
                                duration: 0.5,
                                stiffness: 200,
                                type: "spring",
                            }}
                            className="mt-5 cursor-pointer rounded-xl px-4 text-custom-3 border border-custom-3 font-semibold py-2"
                        >
                            Book a Fitting
                        </motion.button>
                    </div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        className="size-150 overflow-hidden flex relative"
                    >
                        <AnimatePresence>
                            <motion.img
                                layout
                                key={slideImage[slideCurrent]}
                                initial={{
                                    opacity: 0,
                                    x: 100,
                                }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    x: -100,
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                src={slideImage[slideCurrent]}
                                className="size-120"
                                alt=""
                            />
                        </AnimatePresence>
                    </motion.div>
                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        whileInView={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{
                            scale: {
                                duration: 0.8,
                                type: "spring",
                                stiffness: 300,
                            },
                            opacity: {
                                duration: 0.5,
                            },
                        }}
                        className="size-40 -bottom-20 left-1/2 -translate-x-1/2 rounded-full bg-white absolute"
                    >
                        <Lottie animationData={sewingAnimate} />
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Hero;

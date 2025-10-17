import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Image from "../assets/images/mockimage.png";
import Image1 from "../assets/images/mockimage1.png";
import Image2 from "../assets/images/mockimage2.png";
import { AnimatePresence, motion } from "motion/react";
import { HeroAnimation, SlideAnimation } from "../animation/hero";

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
            <motion.div
                layout
                name="hero"
                className="relative min-h-screen overflow-hidden bg-linear-to-l from-custom-1 via-custom-2 to-custom-1"
            >
                <div className="bg-hero opacity-10 z-2 bg-cover bg-center absolute bg-fixed inset-0 h-full w-full"></div>
                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex items-center gap-12">
                        <div className="flex-1 text-center">
                            <motion.div
                                initial="initial"
                                variants={HeroAnimation}
                                whileInView="view"
                            >
                                <h1 className="text-6xl mb-6 font-bold text-left text-white">
                                    <span className="text-custom-3 mb-2 block">
                                        Tailored to Perfection -
                                    </span>
                                    <span className="text-5xl">
                                        Crafted just for you
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.p
                                initial="initial"
                                variants={HeroAnimation}
                                whileInView="view"
                                transition={{
                                    delay: 0.3,
                                }}
                                className="text-xl mb-10 mx-0 text-gray-100 text-start"
                            >
                                Bespoke suits, dresses, and alterations that
                                bring out your best fit
                            </motion.p>
                            <motion.button
                                initial="initial"
                                variants={HeroAnimation}
                                whileInView="view"
                                whileHover="cta_hover"
                                whileTap="cta_tap"
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
                            {/* <motion.div
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
                                className="size-40 mt-6 rounded-full bg-white"
                            >
                                <Lottie animationData={sewingAnimate} />
                            </motion.div> */}
                        </div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            variants={SlideAnimation}
                            whileInView="view"
                            className="flex-1 relative w-full max-w-2xl px-10"
                        >
                            <div className="aspect-[4/5] h-180 w-160 m-4 relative overflow-hidden rounded-2xl shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        layout
                                        key={slideImage[slideCurrent]}
                                        initial="initial"
                                        animate="animate"
                                        exit="exite"
                                        variants={SlideAnimation}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        src={slideImage[slideCurrent]}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        alt=""
                                    />
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;

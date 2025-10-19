import { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "../component/Navbar";
import Image from "../assets/images/mockimage.png";
import Image1 from "../assets/images/mockimage1.png";
import Image2 from "../assets/images/mockimage2.png";
import { AnimatePresence, motion } from "motion/react";
import { HeroAnimation, SlideAnimation } from "../animation/hero";

const Hero = () => {
    const [slideCurrent, setSlideCurrent] = useState(0);
    const slideImage = useMemo(() => [Image, Image1, Image2], []);

    const changeSlide = useCallback(
        (direction = 1) => {
            setSlideCurrent((prev) => (prev + direction) % slideImage.length);
        },
        [slideImage.length]
    );

    useEffect(() => {
        const interviewId = setInterval(() => {
            changeSlide(1);
        }, 3000);
        return () => clearInterval(interviewId);
    }, [changeSlide]);

    return (
        <>
            <Navbar />
            <motion.section
                layout
                name="hero"
                className="relative min-h-screen overflow-hidden bg-gradient-to-l from-custom-1 via-custom-2 to-custom-1"
            >
                <div className="bg-hero opacity-10 z-2 bg-cover bg-center absolute bg-fixed inset-0 h-full w-full"></div>
                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-12">
                        <div className="flex-1 text-center">
                            <motion.div
                                initial="initial"
                                variants={HeroAnimation}
                                whileInView="view"
                            >
                                <h1 className="lg:text-6xl text-5xl mb-6 font-bold text-left text-white">
                                    <span className="text-custom-3 font-roboto mb-2 block">
                                        Tailored to Perfection -
                                    </span>
                                    <span className="lg:text-5xl text-4xl font-montserrat">
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
                                className="text-xl font-poppins mb-10 mx-0 text-gray-100 text-start"
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
                                className="lg:mt-5 m-4 cursor-pointer rounded-xl px-4 text-custom-3 border border-custom-3 font-semibold py-2"
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
                            className="flex- relative w-full max-w-2xl p-8"
                        >
                            <div className="aspect-[4/5] lg:h-180 w-full  relative overflow-hidden rounded-2xl shadow-2xl">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        layout
                                        key={slideImage[slideCurrent]}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={SlideAnimation}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeInOut",
                                        }}
                                        src={slideImage[slideCurrent]}
                                        className="absolute inset-0 w-full h-full object-contain"
                                        alt="Tailoring Showcase"
                                    />
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Hero;

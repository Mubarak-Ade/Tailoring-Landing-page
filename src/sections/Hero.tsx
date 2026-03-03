import { useCallback, useEffect, useMemo, useState } from 'react';
import Navbar from '../component/Navbar/Navbar';
import Image from '../assets/cloth_images/MidnightAzureTunicSetImage.png';
import Image1 from '../assets/cloth_images/autumn-leaf-two-piece.jpeg';
import Image2 from '../assets/cloth_images/midnight-floral-wrap.jpeg';
import Image3 from '../assets/cloth_images/rose-blush-evening-gown.jpeg';
import Image4 from '../assets/cloth_images/ruby-panel-lace-dress.png';
import Image5 from '../assets/cloth_images/ocean-bloom-ankara-gown.png';
// import Image2 from '../assets/images/mockimage2.png';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HeroAnimation, SlideAnimation } from '../animation/hero';
import { smoothSpring } from '../animation/general';

const Hero = () => {
    const [slideCurrent, setSlideCurrent] = useState(0);
    const slideImage = useMemo(() => [Image, Image1, Image2, Image3, Image4, Image5], []);

    const changeSlide = useCallback(
        (direction = 1) => {
            setSlideCurrent((prev) => (prev + direction) % slideImage.length);
        },
        [slideImage.length],
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
                id="home"
                className="relative p-5 flex items-center justify-between min-h-screen overflow-hidden pt-24 bg-gradient-to-tr from-brown via-dark-fg to-dark-bg"
            >
                {/* <div className="bg-hero opacity-10 z-2 bg-cover bg-center absolute bg-fixed inset-0 h-full w-full"></div> */}
                <div className="container mx-auto px-6 relative z-20">
                    <div className="flex lg:flex-row flex-col-reverse items-center gap-12">
                        <motion.div
                            className="flex-1"
                            initial="initial"
                            whileInView="container"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={HeroAnimation}
                        >
                            <h4 className="text-metallic-gold bg-metallic-gold/20 px-4 py-2 w-fit rounded-full font-poppins text-sm uppercase tracking-wider mb-2">
                                Bespoke Excellent
                            </h4>
                            <motion.div
                                initial="initial"
                                whileInView="view"
                                variants={HeroAnimation}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                <h1 className="lg:text-7xl text-5xl mb-6 text-left text-white font-serif">
                                    Tailored to -
                                    <span className="text-transparent bg-linear-to-tr from-amber-500 to-amber-200 bg-clip-text italic">
                                        Perfection
                                    </span>
                                </h1>
                            </motion.div>
                            <motion.p
                                initial="initial"
                                variants={HeroAnimation}
                                whileInView="view"
                                transition={{
                                    ...smoothSpring,
                                    delay: 0.12,
                                }}
                                viewport={{ once: true, amount: 0.4 }}
                                className="text-lg font-poppins mb-10 mx-0 text-silver text-start"
                            >
                                Crafted just for you. Bespoke suits, dresses, and alterations that
                                bring out your best fit and style in the most sophisticated way.
                            </motion.p>
                            <div className="flex md:flex-row flex-col gap-4 justify-start">
                                <motion.button
                                    initial="initial"
                                    variants={HeroAnimation}
                                    whileInView="view"
                                    whileHover="cta_hover"
                                    whileTap="cta_tap"
                                    transition={{
                                        ...smoothSpring,
                                    }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    className=" cursor-pointer rounded-full px-10 py-5 text-dark-bg font-bold bg-metallic-gold"
                                >
                                    Book a Fitting
                                </motion.button>
                                <motion.button
                                    initial="initial"
                                    variants={HeroAnimation}
                                    whileInView="view"
                                    whileHover="sec_cta_hover"
                                    whileTap="cta_tap"
                                    transition={{
                                        ...smoothSpring,
                                    }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    className=" cursor-pointer rounded-full px-12 py-4 text-white font-bold bg-transparent border border-silver"
                                >
                                    View Gallery
                                </motion.button>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            variants={SlideAnimation}
                            whileInView="view"
                            viewport={{
                                once: true,
                            }}
                            animate={{
                                y: [0, -6, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                            className="w-full max-w-xl p-8 flex items-center justify-center"
                        >
                            <div className="aspect-square lg:h-150 w-full bg-brown/20 max-w-lg  relative overflow-hidden rounded-t-full shadow-2xl">
                                <AnimatePresence>
                                    <motion.img
                                        key={slideImage[slideCurrent]}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        variants={SlideAnimation}
                                        transition={{
                                            duration: 1,
                                            ease: "easeInOut",
                                        }}
                                        src={slideImage[slideCurrent]}
                                        className="absolute inset-0 w-full h-full object-cover"
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

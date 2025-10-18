import { motion } from "motion/react";
import React from "react";

const CTASection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-linear-to-r from-custom-1 to-[#2D82B7] overflow-hidden relative text-center"
        >
            <div className="h-full w-full absolute bg-[url(./assets/images/cta_image.png)] bg-cover bg-center bg-fixed opacity-20 z-1"></div>
            <motion.div
                whileInView={{
                    scale: [0.8, 1],
                    y: [-20, 0],
                }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                }}
                className="z-50 h-100 relative flex items-center justify-center flex-col gap-8"
            >
                <h1 className="text-custom-3 md:text-5xl text-3xl font-bold font-playfair">
                    Your next perfect fit is one booking away.
                </h1>
                <p className="md:text-lg text-base px-5 text-white font-poppins">
                    Collaborate with us to design exquisite, custom attire that
                    embodies your unique elegance.
                </p>
                <motion.button
                    whileHover={{
                        background:
                            "linear-gradient(60deg, var(--color-custom-1), var(--color-custom-2))",
                        color: "var(--color-white)",
                        boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                    }}
                    className="bg-linear-60 font-open-sans from-custom-2 to-custom-1 cursor-pointer text-custom-4 font-bold px-6 max-w-100 text-lg rounded-2xl py-4"
                >
                    Book a fitting
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default CTASection;

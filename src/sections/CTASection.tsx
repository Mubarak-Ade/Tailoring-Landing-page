import { motion } from 'motion/react';
import React from 'react';

const CTASection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-linear-to-r from-dark-fg to-dark-bg overflow-hidden relative text-center"
        >
            <div className="h-full w-full absolute bg-[url(./assets/images/cta_image.png)] bg-cover bg-center bg-fixed opacity-20 z-1"></div>
            <motion.div
                whileInView={{
                    scale: [0.8, 1],
                    y: [-20, 0],
                }}
                transition={{
                    duration: 1,
                    type: 'spring',
                    stiffness: 100,
                }}
                viewport={{ once: true, amount: 0.5 }}
                className="z-50 h-100 relative flex items-center justify-center flex-col gap-8"
            >
                <h1 className="text-white md:text-5xl text-3xl font-bold font-playfair">
                    Your next perfect fit is one booking away.
                </h1>
                <p className="md:text-lg text-base px-5 text-dark-text font-poppins">
                    Collaborate with us to design exquisite, custom attire that embodies your unique
                    elegance.
                </p>
                <motion.button
                    whileHover={{
                        background:
                            'linear-gradient(60deg, var(--color-custom-1), var(--color-custom-2))',
                        color: 'var(--color-white)',
                        boxShadow: '0 10px 30px rgba(255,255,255,0.2)',
                    }}
                    whileTap={{
                        scale: 0.9,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                    }}
                    className="bg-gold font-open-sans cursor-pointer text-dark-fg font-bold px-6 max-w-100 text-sm rounded-full py-3"
                >
                    Book a fitting
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default CTASection;

import React, { useState } from 'react';
import { footerChildVariant, inputVariants } from '../../animation/footer';
import { motion } from 'motion/react';

export const FooterForm = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.div variants={footerChildVariant} className="">
            <h2 className="text-2xl font-bold text-white">News Letter</h2>
            <p className="m-2 text-white">
                Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <form action="" className="mt-5">
                <motion.input
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    variants={inputVariants}
                    animate="animate"
                    custom={isFocused}
                    type="email"
                    name="email"
                    placeholder="Enter your Email address"
                    className="outline-none shadow-2xl border bg-dark-bg/50 h-12 rounded-xl text-white w-full px-4 py-2"
                    id=""
                />
                <motion.button
                    whileTap={{
                        scale: 0.95,
                    }}
                    whileHover={{
                        scale: 1.02,
                        boxShadow: '0 0 15px var(--color-gold)',
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                    }}
                    type="submit"
                    className="cursor-pointer w-full mt-2 bg-gold rounded-xl h-12 shadow-2xl text-sm text-white font-bold"
                >
                    Subscribe
                </motion.button>
            </form>
        </motion.div>
    );
};

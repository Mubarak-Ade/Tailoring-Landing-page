import React, { useMemo } from 'react';
import { FooterCardVariant, footerChildVariant } from '../../animation/footer';
import { motion } from 'motion/react';
import { GiAmpleDress, GiSewingMachine, GiSewingNeedle } from 'react-icons/gi';
import { HiScissors } from 'react-icons/hi';

export const FooterInfo = () => {
    const icons = useMemo(() => [GiAmpleDress, GiSewingMachine, GiSewingNeedle, HiScissors], []);

    return (
        <motion.div variants={footerChildVariant} className="max-w-md w-full">
            <h2 className="text-white font-bold text-3xl">About us</h2>
            <p className="text-white">
                We are master tailors dedicated to creating bespoke garments that perfectly express
                your individual style and personality. Every stitch tells your story.
            </p>
            <div className="flex mt-5 w-full gap-4 [&_span]:p-2 [&_span]:cursor-pointer [&_span]:w-10 [&_span]:h-10 [&_span]:flex [&_span]:items-center [&_span]:flex-col [&_span]:justify-center [&_span]:border [&_span]:border-dark-text [&_span]:rounded-full ">
                {icons.map((icon) => {
                    const Icon = icon;
                    return (
                        <motion.span
                            variants={FooterCardVariant}
                            whileTap="tap"
                            whileHover="hover"
                            exit="exit"
                            className=""
                        >
                            <Icon className="text-xl text-white" />
                        </motion.span>
                    );
                })}
            </div>
        </motion.div>
    );
};

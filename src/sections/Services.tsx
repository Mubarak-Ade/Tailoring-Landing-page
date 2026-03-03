import { HiOutlineScissors, HiScissors } from 'react-icons/hi';
import { GiAmpleDress, GiSewingMachine, GiSewingNeedle } from 'react-icons/gi';
import React from 'react';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { cardVariant } from '../animation/about';

const Services = () => {
    const services = [
        {
            icon: GiAmpleDress,
            label: 'Dress',
        },
        {
            icon: GiSewingMachine,
            label: 'Sewing',
        },
        {
            icon: GiSewingNeedle,
            label: 'Needle Work',
        },
        {
            icon: HiScissors,
            label: 'Cut',
        },
    ] as { icon: LucideIcon; label: string }[];

    return (
        <div className="mt-10">
            <AnimatePresence>
                <motion.ul
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.1,
                        type: 'spring',
                        stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 grid-cols-2 gap-5 font-playfair text-xs"
                >
                    {services.map(({ label, icon: Icon }) => (
                        <motion.li
                            variants={cardVariant}
                            key={label}
                            whileTap="tap"
                            whileHover="hover"
                            exit="exit"
                            className="border text-center max-w-xs h-40 w-full border-iron-grey cursor-pointer text-white flex flex-col items-center justify-center rounded-3xl gap-2"
                        >
                            <span className="p-4 rounded-full border border-silver/20 bg-iron-grey">
                                <Icon className="lg:text-5xl text-gold text-2xl" />
                            </span>
                            <p className="font-semibold">{label}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            </AnimatePresence>
        </div>
    );
};

export default Services;

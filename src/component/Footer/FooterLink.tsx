import { motion } from 'motion/react';
import React, { useMemo } from 'react';
import { footerChildVariant, FooterLinkVariant } from '../../animation/footer';
import { Link } from 'react-scroll';

export const FooterLink = () => {
    const link = useMemo(() => ['home', 'about', 'gallery', 'testimonial', 'contact'], []);

    return (
        <motion.div variants={footerChildVariant} className="flex flex-col items-start">
            <h2 className="text-2xl text-white font-bold">Quick Links</h2>
            <ul className="text-white w-50">
                {link.map((link) => (
                    <Link
                        to="hero"
                        smooth={true}
                        offset={50}
                        delay={100}
                        spy={true}
                        duration={500}
                        key={link}
                    >
                        <motion.li
                            variants={FooterLinkVariant}
                            whileHover="hover"
                            whileTap="tap"
                            className="cursor-pointer rounded-xl py-2"
                        >
                            {link}
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </motion.div>
    );
};

import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { GiAmpleDress, GiSewingMachine, GiSewingNeedle } from 'react-icons/gi';
import { HiScissors } from 'react-icons/hi';
import { Link } from 'react-scroll';
import {
    FooterCardVariant,
    FooterLinkVariant,
    footerChildVariant,
    inputVariants,
} from '../animation/footer';
import { containerVariant } from '../animation/general.js';
import { FooterInfo } from '../component/Footer/FooterInfo';
import { FooterLink } from '../component/Footer/FooterLink';
import { FooterForm } from '../component/Footer/FooterForm';

const Footer = () => {
    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            viewport={{once: true, amount: 0.5}}
            className="flex flex-wrap gap-10 border-t border-black/20  overflow-hidden bg-dark-fg px-8 py-6"
        >
            <FooterInfo />
            <FooterLink />
            <FooterForm />
        </motion.section>
    );
};

export default Footer;

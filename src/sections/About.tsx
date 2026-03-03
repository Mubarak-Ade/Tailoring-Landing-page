import { motion } from 'motion/react';
import { memo } from 'react';
import {
    dividerVariants,
    imageVariants,
    sharedTransition,
    textVariants,
    titleVariants,
} from '../animation/about';
import { containerVariant } from '../animation/general';
import Image from '../assets/images/mock.png';
import Services from './Services';

const About = () => {
    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            viewport={{ once: true }}
            id="about"
            className="bg-onyx flex lg:flex-row flex-col h-full items-center justify-center gap-10 px-6 py-2"
        >
            <motion.div
                initial="initial"
                animate="animate"
                whileInView={'view'}
                viewport={{ once: true }}
                variants={imageVariants}
                className="bg-white w-full max-w-md rounded-full overflow-hidden flex items-center justify-center"
            >
                <img
                    src={Image}
                    alt="Tailor Craftmanship"
                    className=" object-center"
                    loading="lazy"
                />
            </motion.div>
            <motion.span
                variants={dividerVariants}
                initial="initial"
                whileInView="view"
                viewport={{ once: true }}
                transition={{ duration: 1, type: 'spring', stiffness: 300 }}
                className="w-2 bg-gold hidden lg:block h-50 p-1 rounded-t-sm rounded-b-sm"
            ></motion.span>
            <motion.div className="flex-1 flex flex-col lg:p-10">
                <h4 className="text-lg font-semibold font-inter text-metallic-gold">WHO ARE WE</h4>
                <motion.h1
                    variants={titleVariants}
                    transition={sharedTransition}
                    initial="initial"
                    whileInView={'view'}
                    viewport={{ once: true }}
                    className="text-5xl font-playfair text-white font-semibold font-stretch-100% mt-5"
                >
                    Crafting Your Unique Style
                </motion.h1>
                <motion.p
                    transition={sharedTransition}
                    variants={textVariants}
                    initial="initial"
                    whileInView={'view'}
                    viewport={{ once: true }}
                    className="text-lg font-light  font-inter mt-10 flex-1 text-silver"
                >
                    With over 10 years of experience, Anike Tailoring combines craftsmanship and
                    precision to deliver outfits that fit your style and personality. Each piece is
                    made with care, from the first stitch to the final button.
                </motion.p>
                <Services />
            </motion.div>
        </motion.section>
    );
};

export default memo(About);

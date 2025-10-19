import React, { memo } from "react";
import Image from "../assets/images/mock.png";
import { motion } from "motion/react";
import Services from "./Services";
import { containerVariant } from "../animation/general";
import { BorderAnimation, dividerVariants, imageVariants, textVariants, titleVariants } from "../animation/about";

const About = () => {
    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            name="about"
            className="bg-custom-4 flex lg:flex-row flex-col items-center justify-center gap-10 overflow-hidden px-6 py-2"
        >
            <motion.div
                {...imageVariants}
                className="flex-1 bg-custom-5 size-full rounded-full overflow-hidden flex items-center justify-center"
            >
                <img src={Image} alt="Tailor Craftmanship" className=" object-center" loading="lazy" />
            </motion.div>
            <motion.span
                {...dividerVariants}
                className="w-2 bg-custom-1 hidden lg:block h-50 p-1 rounded-t-sm rounded-b-sm"
            ></motion.span>
            <motion.div className="flex-1 h-100 items-center justify-center flex flex-col p-10">
                <motion.h1
                    {...titleVariants}
                    className="text-5xl font-roboto text-custom-1 font-bold text-center mt-10"
                >
                    About Us
                </motion.h1>
                <motion.p
                    {...textVariants}
                    className="text-xl lg:p-0 md:p-4 p-10 font-poppins mt-10 flex-1 text-custom-1"
                >
                    With over 10 years of experience, Anike Tailoring combines
                    craftsmanship and precision to deliver outfits that fit your
                    style and personality. Each piece is made with care, from
                    the first stitch to the final button.
                </motion.p>
                <Services />
            </motion.div>
        </motion.section>
    );
};

export default memo(About);

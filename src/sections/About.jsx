import React from "react";
import Image from "../assets/images/mock.png";
import { motion } from "motion/react";

const About = () => {
    return (
        <div className="bg-custom-4 flex items-center justify-center gap-10 overflow-hidden px-6 py-2">
            <motion.div
                layout
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    borderRadius: [
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                        "40% 60% 70% 30% / 50% 70% 30% 60%",
                        "60% 40% 30% 70% / 60% 30% 70% 40%",
                    ],
                }}
                whileInView={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    scale: {
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                    },
                    opacity: {
                        duration: 1,
                    },
                    borderRadius: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                }}
                className="flex-1 bg-custom-5 size-full rounded-full overflow-hidden flex items-center justify-center"
            >
                <img
                    src={Image}
                    alt=""
                    className=" object-center"
                />
            </motion.div>
            <motion.span
                initial={{
                    scale: 0,
                }}
                whileInView={{
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 300,
                }}
                className="w-2 bg-custom-1 h-50 p-1 rounded-t-sm rounded-b-sm"
            ></motion.span>
            <motion.div className="flex-1 h-100 items-center justify-center flex flex-col p-10">
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300,
                    }}
                    className="text-5xl text-custom-1 font-bold text-center mt-10"
                >
                    About Us
                </motion.h1>
                <motion.p
                    initial={{
                        opacity: 0,
                        x: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 300,
                    }}
                    className="text-xl mt-10 flex-1 text-custom-1"
                >
                    With over 10 years of experience, AIM Tailoring combines
                    craftsmanship and precision to deliver outfits that fit your
                    style and personality. Each piece is made with care, from
                    the first stitch to the final button.
                </motion.p>
            </motion.div>
        </div>
    );
};

export default About;

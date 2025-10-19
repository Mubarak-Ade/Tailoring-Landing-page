import { BsArrowRight } from "react-icons/bs";
import React, { useState } from "react";
import Image from "../assets/images/Gemini_Generated_Image_2bykny2bykny2byk.png";
import Image1 from "../assets/images/Gemini_Generated_Image_6s6hic6s6hic6s6h.png";
import Image2 from "../assets/images/Gemini_Generated_Image_948cco948cco948c.png";
import Image3 from "../assets/images/Gemini_Generated_Image_9iqv4y9iqv4y9iqv.png";
import Image4 from "../assets/images/Gemini_Generated_Image_o2nhnho2nhnho2nh.png";
import Image5 from "../assets/images/Gemini_Generated_Image_qvzzm7qvzzm7qvzz.png";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { containerVariant } from "../animation/general";
import { galleryData } from "../data";
import CardPreview from "../component/CardPreview";

const Gallery = () => {
    const variant = {
        initial: {
            opacity: 0,
        },
        view: {
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                durantion: 2,
                ease: "easeInO",
                staggerChildren: 0.5,
                when: "beforeChildren",
            },
        },
    };

    const cardVariants = {
        initial: {
            y: 20,
            opacity: 0,
        },
        view: (index) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                duration: 1,
            },
        }),
        hover: {
            background:
                "linear-gradient(120deg, var(--color-custom-2), var(--color-custom-1)",
            color: "var(--color-white)",
            scale: 1.05,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        },
    };

    const imageVariant = {
        initial: {},
        hover: {
            scale: 1.2,
        },
        transition: {
            type: "spring",
            stiffness: 150,
            durantion: 1,
        },
    };

    const buttonVariant = {
        hover: {
            background: "var(--color-custom-1)",
            color: "var(--color-white)",
            transition: {
                durantion: 1,
            },
        },
        tap: {
            scale: 0.95,
        },
    };

    const iconVariant = {
        hover: {
            x: 15,
            transition: {
                type: "spring",
                stiffness: 250,
                durantion: 1,
            },
        },
    };

    const [currentIndex, setCurrentIndex] = useState(null);

    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            name="gallery"
            viewport={{
                once: true,
                amount: 0.2,
                margin: "0px 0px -100px 0px",
            }}
            className="px-6 py-6"
        >
            <div className="text-center">
                <h1 className="text-4xl font-open-sans font-bold mt-5 text-white">
                    Our Gallery
                </h1>
                <p className="text-white text-xl font-playfair mt-5">
                    Explore our exquisite collection of custom-tailored
                    masterpieces
                </p>
            </div>
            <motion.div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-10 gap-5">
                {galleryData.map((gallery) => (
                    <motion.div
                        key={gallery.id}
                        initial="initial"
                        variants={cardVariants}
                        whileInView="view"
                        whileHover="hover"
                        custom={gallery.id}
                        className="overflow-hidden w-90 border-2 border-custom-1 rounded-2xl flex flex-col"
                    >
                        <div
                            style={{ backgroundImage: `url(${gallery.image})` }}
                            className="overflow-hidden h-70 flex items-center justify-center w-full rounded-t-xl p-4 bg-contain bg-center"
                        ></div>
                        <div className="p-6 text-white">
                            <h1 className="text-2xl font-montserrat m-2 font-bold">
                                {gallery.title}
                            </h1>
                            <p className="m-2 text-base font-poppins">
                                {gallery.description}
                            </p>
                        </div>
                        <div
                            onClick={() => setCurrentIndex(gallery.id)}
                            className="flex items-center px-4 py-2 justify-between border-t- bg-custom-1/40 border-custom-1"
                        >
                            <motion.button
                                variants={buttonVariant}
                                whileHover="hover"
                                whileTap="tap"
                                className="text-sm font-open-sans rounded-xl cursor-pointer text-custom-1 font-bold bg-custom-2 px-6 m-2 py-4 flex gap-2 items-center"
                            >
                                View Detail
                                <motion.span variants={iconVariant}>
                                    <BsArrowRight size={20} />
                                </motion.span>
                            </motion.button>
                            {/* <h6 className="text-xl text-white font-bold">
                                ₦100,000
                            </h6> */}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <CardPreview
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
            />
        </motion.section>
    );
};

export default Gallery;

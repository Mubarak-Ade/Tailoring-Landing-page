import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "../data";

const Testimonial = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBtn = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevBtn = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const containerVariant = {
        initial: { opacity: 0, y: 50 },
        view: { opacity: 1, y: 0 },
        transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: .5,
            when: "beforeChildren",
        },
    };

    const cardVariant = {
        initial: {
            // scale: 0,
            y: 50,
        },
        view: (i) => ({
            scale: [0.8, 1],
            y: 0,
            transition: {
                delay: i * 0.025,
                duration: .5,
                type: "spring",
                stiffness: 100
            }
        }),
        hover: {
            background: "var(--color-custom-5)",
            boxShadow: "var(--shadow-2xl) var(--color-custom-1)",
            scale: 1.05,
        },
    };

    const textVariant = {
        hover: {
            color: "var(--color-custom-1)",
        },
    };

    return (
        <motion.section
            variants={containerVariant}
            initial="initial"
            whileInView="view"
            name="testimonial"
            className="bg-gradient-to-br flex items-center flex-col from-custom-2 lg:p-4"
        >
            <h1 className="text-4xl font-roboto font-bold m-2 text-white text-center">
                Client testimonial
            </h1>
            <motion.div
                whileInView={{ scale: [0.8, 1] }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="flex rounded-3xl shadow-2xl flex-col w-4/5 m-10 items-center bg-custom-1/90 p-4 lg:px-12 lg:py-8"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "anticipate" }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex lg:flex-row items-center flex-col md:grid-cols-3 gap-4 lg:mt-8 overflow-hidden lg:items-start text-start"
                    >
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="size-30 rounded-full  border-4 border-custom-5"
                        />
                        <div className="flex flex-col lg:items-start items-center gap-2">
                            <div className="flex text-yellow-400 text-2xl">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className="text-white font-roboto text-sm text-start mt-4 italic">
                                " {testimonials[currentIndex].feedback} "
                            </p>
                            <p className="text-custom-5 font-poppins font-bold mt-5">
                                {testimonials[currentIndex].name}
                            </p>
                            <p className="text-white">
                                {testimonials[currentIndex].location}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-evenly w-full m-4 text-4xl text-custom-4/90">
                    <span onClick={prevBtn} className="cursor-pointer">
                        <BsFillArrowLeftCircleFill />
                    </span>
                    <span onClick={nextBtn} className="cursor-pointer">
                        <BsFillArrowRightCircleFill />
                    </span>
                </div>
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <motion.span
                            whileInView={{
                                width: index === currentIndex ? 32 : 8,
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setCurrentIndex(index)}
                            key={index}
                            className={`h-2 rounded-2xl ${
                                index === currentIndex ? "w-8" : "w-2"
                            } bg-custom-5 lg:mt-10 cursor-pointer`}
                        ></motion.span>
                    ))}
                </div>
            </motion.div>
            <div className="grid md:grid-cols-2 grid-cols-1 p-4 lg:grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        initial="initial"
                        whileHover="hover"
                        whileInView="view"
                        variants={cardVariant}
                        custom={index}
                        key={testimonial.id}
                        className={`border-2 shadow-2xl ${
                            index === currentIndex
                                ? "border-custom-5 border-4"
                                : "border-custom-4"
                        } rounded-3xl cursor-pointer bg-custom-1/50 px-6 py-3`}
                    >
                        <div className="flex text-yellow-400 m-2 text-2xl">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className="text-sm m-2 font-poppins text-white italic">
                            {testimonial.feedback}
                        </p>
                        <motion.div className="m-2 text-white">
                            <motion.h4
                                variants={textVariant}
                                className="font-bold text-custom-5"
                            >
                                {testimonial.name}
                            </motion.h4>
                            <p className="text-xs">{testimonial.location}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Testimonial;

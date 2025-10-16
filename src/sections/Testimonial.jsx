import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import React, { useState } from "react";
import testinialImage from "../assets/images/testimonial/edo.png";
import testinialImage2 from "../assets/images/testimonial/hausa.png";
import testinialImage3 from "../assets/images/testimonial/igbo.png";
import testinialImage4 from "../assets/images/testimonial/yoruba.png";
import testinialImage5 from "../assets/images/testimonial/yoruba1.png";
import { AnimatePresence, motion } from "motion/react";

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "Aisha Bello",
            location: "lagos, Nigeria",
            feedback:
                "Brought my Ankara fabric and had no idea what to make. Mubarak turned it into a stunning gown that fits like it was made by angels. The finishing is perfect — everyone at my event asked who my tailor was!",
            image: testinialImage2,
        },
        {
            id: 2,
            name: "Fatima Yusuf",
            location: "Kano, Nigeria",
            feedback:
                "I sent my measurements online and got my dress delivered in a week! Perfect fit. I love how the tailor listens and suggests styles that flatter your body shape. 10/10 service.",
            image: testinialImage5,
        },
        {
            id: 3,
            name: "Folake Adebayo",
            location: "Ibadan, Nigeria",
            feedback:
                "I wanted something simple yet traditional for my engagement. The Adire gown Mubarak made was a masterpiece — bold blue patterns, elegant flow, and so comfortable. My family couldn’t stop praising it!",
            image: testinialImage4,
        },
        {
            id: 4,
            name: "Chinwe Okafor",
            location: "Enugu, Nigeria",
            feedback:
                "I wore the George wrapper Mubarak tailored for my brother’s wedding — the beadwork, the fitting, everything screamed class! I’ve found my lifetime tailor",
            image: testinialImage3,
        },
        {
            id: 5,
            name: "Zainab Kolawole",
            location: "Abuja, Nigeria",
            feedback:
                "Professional, punctual, and creative! My corporate suits always come out neat and classy. The attention to detail is unmatched — I’ve never looked this confident in my outfits.",
            image: testinialImage,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBtn = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevBtn = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const cardVariant = {
        hover: {
            background: "var(--color-custom-5)",
            boxShadow: "var(--shadow-2xl) var(--color-custom-1)", 
            scale: 1.05
        },
    };

    const textVariant = {
        hover: {
            color: "var(--color-custom-1)",
        },
    };

    return (
        <div className="bg-gradient-to-br flex items-center flex-col from-custom-2 p-4">
            <h1 className="text-4xl font-bold m-2 text-white text-center">
                Client testimonial
            </h1>
            <motion.div
                whileInView={{ scale: [0.8, 1] }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="flex rounded-3xl shadow-2xl flex-col w-4/5 m-10 items-center bg-custom-1/90 px-12 py-8"
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "anticipate" }}
                        exit={{ opacity: 0, x: -50 }}
                        className="flex md:grid-cols-3 gap-4 mt-8 overflow-hidden items-start text-start"
                    >
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="size-30 rounded-full  border-4 border-custom-5"
                        />
                        <div className="">
                            <div className="flex text-yellow-400 text-2xl">
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <p className="text-white text-start mt-4 italic">
                                "{testimonials[currentIndex].feedback}"
                            </p>
                            <p className="text-custom-5 font-bold mt-5">
                                {testimonials[currentIndex].name}
                            </p>
                            <p className="text-white">
                                {testimonials[currentIndex].location}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
                <div className="flex gap-10 text-4xl text-custom-4/90">
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
                            } bg-custom-5 mt-10 cursor-pointer`}
                        ></motion.span>
                    ))}
                </div>
            </motion.div>
            <div className="grid grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        whileHover="hover"
                        variants={cardVariant}
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
                        <p className="text-sm m-2 text-white italic">
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
        </div>
    );
};

export default Testimonial;

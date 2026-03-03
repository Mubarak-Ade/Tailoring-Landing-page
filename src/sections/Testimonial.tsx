import { AnimatePresence, motion } from "motion/react";
import { memo, useCallback, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { TestimonialCard } from "../component/Testimonial/TestimonialCard";
import { MainCard } from "../component/Testimonial/TestimonialMainCard";
import { testimonials } from "../data";

const containerVariant = {
    initial: { opacity: 0, y: 50 },
    view: { opacity: 1, y: 0 },
    transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "beforeChildren",
    },
};


export const StarRating = memo(() => (
    <div className="text-yellow-400 text-2xl flex ">
        {Array.from({ length: 5 }).map((_, index) => (
            <AiFillStar key={index} />
        ))}
    </div>
));

interface IndicatorProps {
    currentIndex: number,
    onSelect: (id: number) => void
}

const Indicator = ({ currentIndex, onSelect } : IndicatorProps) => (
    <div className="flex gap-2">
        {testimonials.map((_, index) => (
            <motion.span
                whileInView={{
                    width: index === currentIndex ? 32 : 8,
                }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelect(index)}
                key={index}
                className={`h-2 rounded-2xl ${
                    index === currentIndex ? "w-8" : "w-2"
                } bg-custom-5 cursor-pointer`}
            ></motion.span>
        ))}
    </div>
);



const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBtn = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevBtn = useCallback(() => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    }, []);

    return (
        <motion.section
            variants={containerVariant}
            initial="initial"
            whileInView="view"
            id="testimonial"
            className="bg-brown flex items-center flex-col p-4"
        >
            <h1 className="text-4xl font-roboto font-bold m-2 text-white text-center">
                Client Love
            </h1>
            <motion.div
                whileInView={{ scale: [0.8, 1] }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className="max-w-4xl w-full bg-onyx rounded-3xl p-10"
            >
                <AnimatePresence mode="wait">
                    <MainCard testimonials={testimonials} currentIndex={currentIndex} />
                </AnimatePresence>
                <div className="flex justify-evenly w-full mt-5 text-4xl text-gold">
                    <span onClick={prevBtn} className="cursor-pointer">
                        <BsFillArrowLeftCircleFill />
                    </span>
                    <span onClick={nextBtn} className="cursor-pointer">
                        <BsFillArrowRightCircleFill />
                    </span>
                </div>
                <Indicator
                    currentIndex={currentIndex}
                    onSelect={setCurrentIndex}
                />
            </motion.div>
            <div className="grid md:grid-cols-2 grid-cols-1 p-4 mt-5 lg:grid-cols-3 gap-4">
                <TestimonialCard currentIndex={currentIndex} />
            </div>
        </motion.section>
    );
};

export default memo(Testimonial);

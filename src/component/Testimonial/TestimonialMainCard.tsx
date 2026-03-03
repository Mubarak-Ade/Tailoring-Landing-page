import { motion } from "motion/react";
import { StarRating } from "../../sections/Testimonial";
import { Testimonial } from "../../types/content";



export const MainCard = ({ currentIndex, testimonials } : {currentIndex: number, testimonials: Testimonial[]}) => (
    <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
        exit={{ opacity: 0, x: -50 }}
        className="flex lg:flex-row items-center flex-col md:grid-cols-3 gap-10  overflow-hidden lg:items-item-center text-start"
    >
        {/* <StarRating /> */}
        <img
            src={testimonials[currentIndex]?.image}
            alt={testimonials[currentIndex]?.name}
            className="size-30 rounded-full  border-4 border-custom-5"
        />
        <div className="flex flex-col lg:items-start items-center gap-2">
            <StarRating />
            <p className="text-white font-roboto text-xl text-start mt-2 italic">
                 {testimonials[currentIndex]?.feedback} 
            </p>
            <p className="text-white font-poppins font-bold mt-5">
                {testimonials[currentIndex]?.name}
            </p>
            <p className="text-white">{testimonials[currentIndex]?.location}</p>
        </div>
    </motion.div>
);
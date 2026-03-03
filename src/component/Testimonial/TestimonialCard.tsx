import { motion } from "motion/react";
import { testimonials } from "../../data";
import { cardVariant, textVariants } from "../../animation/about";
import { StarRating } from "../../sections/Testimonial";

export const TestimonialCard = ({ currentIndex } : {currentIndex: number}) => (
    <>
        {testimonials.map((testimonial, index) => (
            <motion.div
                initial="initial"
                whileHover="hover"
                whileInView="view"
                variants={cardVariant}
                custom={index}
                key={testimonial.id}
                className={`border shadow-2xl ${
                    index === currentIndex
                        ? "border-gold border-4"
                        : "border"
                } rounded-3xl cursor-pointer bg-dark-fg px-6 py-3`}
            >
                <StarRating />
                <p className="text-sm m-2 font-poppins text-white italic">
                    {testimonial.feedback}
                </p>
                <motion.div className="m-2 text-white">
                    <motion.h4
                        variants={textVariants}
                        className="font-bold text-custom-5"
                    >
                        {testimonial.name}
                    </motion.h4>
                    <p className="text-xs">{testimonial.location}</p>
                </motion.div>
            </motion.div>
        ))}
    </>
);
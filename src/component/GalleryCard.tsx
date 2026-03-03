import { memo } from "react";
import { Gallery } from "../types/content";
import { motion } from "motion/react";
import { buttonVariant, cardVariants } from "../animation/gallery";

interface Props {
    gallery: Gallery,
    index: number,
    onSelect: (id: number) => void
}

export const GalleryCard = memo(({ gallery, onSelect, index } : Props) => {
    return (
        <motion.div
            key={gallery.id}
            variants={cardVariants}
            whileInView="view"
            whileHover="hover"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden w-full border-custom-1 bg-onyx rounded-2xl flex flex-col"
        >
            <div

                className="overflow-hidden aspect-square flex items-center justify-center rounded-t-xl bg-center"
            >
                <img src={gallery.image} alt={gallery.image} className="w-full object-cover h-full" />
            </div>
            <div className="p-8 space-y-3 text-white">
                <h1 className="text-xl font-playfair">
                    {gallery.title}
                </h1>
                <p className="text-sm h-15 leading-relaxed text-silver font-inter">
                    {gallery.description}
                </p>
                <motion.button
                    variants={buttonVariant}
                    whileHover="btn_hover"
                    whileTap="tap"
                onClick={() => onSelect(gallery.id)}

                    className="font-open-sans rounded-2xl 
                    cursor-pointer text-white font-semibold border border-iron-grey 
                    w-full
                 px-6 py-3 text-center flex gap-2 items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    View Details
                </motion.button>
            </div>
        </motion.div>
    );
});

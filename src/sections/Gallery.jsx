import { BsArrowRight } from "react-icons/bs";
import { memo, useMemo, useState } from "react";
import { motion } from "motion/react";
import { containerVariant } from "../animation/general";
import { galleryData } from "../data";
import CardPreview from "../component/CardPreview";

const cardVariants = {
    initial: {
        y: 50,
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

const buttonVariant = {
    hover: {
        background: "var(--color-custom-1)",
        color: "var(--color-white)",
        transition: {
            duration: 0.3,
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
            duration: 0.3,
        },
    },
};

const GalleryCard = memo(({ gallery, onSelect, index }) => {
    return (
        <motion.div
            key={gallery.id}
            variants={cardVariants}
            whileInView="view"
            whileHover="hover"
            custom={index}
            viewport={{ once: true, amount: 0.3 }}
            className="overflow-hidden lg:w-90 border-2 border-custom-1 rounded-2xl flex flex-col"
        >
            <div
                style={{ backgroundImage: `url(${gallery.image})` }}
                className="overflow-hidden bg-cover h-72 flex items-center justify-center w-full rounded-t-xl p-4 bg-center"
            ></div>
            <div className="p-6 space-y-3 text-white">
                <h1 className="text-2xl font-montserrat font-bold">
                    {gallery.title}
                </h1>
                <p className="text-sm md:text-base leading-relaxed text-gray-200 font-poppins">
                    {gallery.description}
                </p>
            </div>
            <div
                onClick={() => onSelect(gallery.id)}
                className="flex items-center px-4 py-2 justify-between border-t- bg-custom-1/40 border-custom-1"
            >
                <motion.button
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                    className="text-sm font-open-sans rounded-xl 
                    cursor-pointer text-white font-bold bg-gradient-to-r 
                    w-full md:w-auto
                    from-custom-2 to-custom-1 px-6 py-4 flex gap-2 items-center transition-all duration-300 shadow-md hover:shadow-lg"
                >
                    View Detail
                    <motion.span variants={iconVariant}>
                        <BsArrowRight size={20} />
                    </motion.span>
                </motion.button>
            </div>
        </motion.div>
    );
});

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const card = useMemo(
        () =>
            galleryData.map((gallery, index) => (
                <GalleryCard
                    gallery={gallery}
                    key={gallery.id}
                    index={index}
                    onSelect={setCurrentIndex}
                />
            )),
        []
    );

    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            name="gallery"
            viewport={{
                once: true,
                amount: 0.1,
                // margin: "0px 0px -100px 0px",
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
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl lg:grid-cols-3 place-items-center mx-auto gap-6 md:gap-8">
                {card}
            </motion.div>
            <CardPreview
                currentIndex={currentIndex}
                onSelect={setCurrentIndex}
            />
        </motion.section>
    );
};

export default Gallery;

import { motion } from "motion/react";
import { useMemo, useState } from "react";
import { containerVariant } from "../animation/general";
import CardPreview from "../component/CardPreview";
import { GalleryCard } from "../component/GalleryCard";
import { galleryData } from "../data";

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState<null | number>(null);
    const card = useMemo(
        () =>
            galleryData.map((gallery, index) => (
                <GalleryCard
                    gallery={gallery}
                    key={gallery.id}
                    index={gallery.id}
                    onSelect={(id: number) => setCurrentIndex(id)}
                />
            )),
        []
    );

    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            id="gallery"
            viewport={{
                once: true,
                amount: 0.1,
                // margin: "0px 0px -100px 0px",
            }}
            className="px-6 py-6"
        >
            <div className="flex items-center flex-col justify-center text-center mt-10">
                <h4 className="text-gold italic font-semibold text-lg">Our Portfolio</h4>
                <h1 className="text-4xl font-playfair mt-5 text-white">
                    Curated Masterpieces
                </h1>
                <p className="text-silver text-base text-wrap font-inter font-light max-w-2xl w-full mt-5">
                    Explore our exquisite collection of custom-tailored masterpieces, designed to make a sophisticated yet unforgettable statement.
                </p>
            </div>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl lg:grid-cols-3 items-stretch place-items-center mx-auto gap-6 md:gap-8 my-15">
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

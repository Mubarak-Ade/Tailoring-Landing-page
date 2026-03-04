import { FaX } from 'react-icons/fa6';
import { galleryData } from '../data';
import { AnimatePresence, motion } from 'motion/react';
import { WhatsAppLink } from '../utils/custom';

const CloseButton = ({ onClick }: { onClick: () => void }) => (
    <motion.span
        whileHover={{
            scale: 1.03,
            backgroundColor: 'var(--color-custom-5)',
            color: 'var(--color-custom-1)',
            y: -1,
        }}
        whileTap={{
            scale: 0.96,
        }}
        transition={{
            duration: 0.35,
            type: 'spring',
            stiffness: 180,
        }}
        onClick={onClick}
        className="text-xs rounded-full shadow-2xl cursor-pointer bg-custom-1 p-2 top-0 right-0 m-2 text-white absolute"
    >
        <FaX />
    </motion.span>
);

const BookButton = ({title} : {title: string | undefined}) => {
    const whatsappUrl = WhatsAppLink(title);
    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            whileHover={{
                scale: 1.03,
                background: 'hsla(45, 85%, 53%, 1)',
                boxShadow: '0 4px 20px hsla(45, 85%, 53%, 1)',
            }}
            className="mt-4 rounded-xl w-full max-w-xs text-center bg-metallic-gold px-5 py-4 font-poppins text-sm font-semibold text-dark-bg"
        >
            Book Now
        </motion.a>
    );
};
interface CardPreviewProps {
    currentIndex: number | null;
    onSelect: (id: number | null) => void;
}

const CardPreview = ({ currentIndex, onSelect }: CardPreviewProps) => {
    if (currentIndex === null) return null;

    return (
        <AnimatePresence>
            {currentIndex !== null && (
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
                    exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full max-w-2xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex backdrop-blur-sm items-center justify-center flex-col h-full fixed bg-custom-1/10 z-200"
                >
                    <motion.div
                        initial={{
                            scale: 0.94,
                            y: 24,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1,
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            scale: 0.96,
                            y: 16,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.45,
                            type: 'spring',
                            stiffness: 180,
                            damping: 20,
                        }}
                        className="flex relative items-center md:h-160 flex-col h-full rounded-xl shadow-lg z-110 px-6 py-4 bg-brown overflow-hidden max-w-3xl "
                    >
                        <h1 className="text-white font-montserrat text-2xl lg:text-3xl font-bold">
                            {galleryData[currentIndex]?.title}
                        </h1>
                        <p className="text-sm lg:text-base md:mx-10 mt-5 font-open-sans text-center text-white">
                            {galleryData[currentIndex]?.details}
                        </p>
                        <div className="max-w-xs mt-5 relative w-full h-full shadow-[0_5px_18px] overflow-hidden shadow-black/50 rounded-xl flex flex-col  items-center">
                            <div className=" h-full flex items-center w-full rounded-t-xl">
                                <img
                                    className='size-full object-cover'
                                    src={galleryData[currentIndex]?.image}
                                    alt={galleryData[currentIndex]?.title}
                                />
                            </div>
                            <div className="p-5 mt-2 absolute bottom-0 bg-brown/50">
                                <h6 className="text-xl font-sour-gummy text-white font-bold mb-2">
                                    More Detail
                                </h6>
                                <ul className="text-white list-inside space-y-2 md:text-base text-xs mx-4 list-disc">
                                    {galleryData[currentIndex]?.more.map((more, index) => (
                                        <li className="font-poppins" key={index}>
                                            {more}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                                <BookButton title={galleryData[currentIndex]?.title} />
                        <CloseButton onClick={() => onSelect(null)} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CardPreview;

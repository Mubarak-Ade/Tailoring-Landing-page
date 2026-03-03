import { AnimatePresence, motion } from 'motion/react';
import React from 'react';
import { drawerMotion } from '../../animation/navbar';
import { Link } from 'react-scroll';
import { X } from 'lucide-react';
interface Props {
    showNav: boolean;
    closeMobileMenu: () => void;
    navList: string[];
}

export const MobileNav = ({ showNav, closeMobileMenu, navList }: Props) => {
    return (
        <AnimatePresence>
            {showNav && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                        onClick={closeMobileMenu}
                    />

                    <motion.aside
                        variants={drawerMotion}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed right-0 top-0 z-50 flex h-screen w-[80%] max-w-xs flex-col bg-dark-fg p-6 shadow-2xl lg:hidden"
                    >
                        <div className="mb-8 flex items-center justify-between">
                            <span className="font-montserrat text-lg font-semibold text-white">
                                Menu
                            </span>
                            <button
                                type="button"
                                className="rounded-md cursor-pointer p-2 text-white"
                                onClick={closeMobileMenu}
                                aria-label="Close menu"
                            >
                                <X size={22} />
                            </button>
                        </div>

                        <ul className="space-y-3">
                            {navList.map((navItem) => (
                                <motion.li
                                    whileHover={{
                                        backgroundColor: 'hsla(45, 85%, 53%, 1)',
                                        color: 'hsla(50, 0%, 10%, 1)',
                                        borderRadius: "10px"
                                    }}
                                    key={navItem}
                                >
                                    <Link
                                        to={navItem}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="block cursor-pointer rounded-md px-4 py-2 font-poppins text-base capitalize text-white"
                                        onClick={closeMobileMenu}
                                    >
                                        {navItem}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className="mt-8 rounded-xl bg-metallic-gold px-5 py-3 font-poppins text-sm font-semibold text-dark-bg"
                        >
                            Book Now
                        </button>
                    </motion.aside>
                </>
            )}
        </AnimatePresence>
    );
};

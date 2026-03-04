import React from 'react';
import Logo from '../../assets/images/logo-H.png';
import { motion } from 'motion/react';
import { navItemMotion } from '../../animation/navbar';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { WhatsAppLink } from '../../utils/custom';

interface Props {
    navList: string[];
    showNav: boolean;
    onShowNav: () => void;
}

export const DesktopNav = ({ navList, showNav, onShowNav }: Props) => {
    const whatsappUrl = WhatsAppLink();

    return (
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
                <img
                    src={Logo}
                    alt="House Of Silah logo"
                    className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12"
                />
                <h1 className="font-montserrat text-lg font-semibold text-white sm:text-2xl">
                    House Of Silah
                </h1>
            </div>

            <div className="hidden items-center gap-5 lg:flex">
                {navList.map((navItem) => (
                    <Link
                        key={navItem}
                        to={navItem}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        activeClass="text-gold"
                        className="cursor-pointer"
                    >
                        <motion.span
                            variants={navItemMotion}
                            whileHover="hover"
                            whileTap="tap"
                            className="block rounded-md px-3 py-2 font-poppins text-sm capitalize text-silver font-medium transition-colors"
                        >
                            {navItem}
                        </motion.span>
                    </Link>
                ))}

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
                    className="ml-4 hidden lg:block rounded-full text-center bg-metallic-gold px-8 py-3 font-medium cursor-pointer text-sm font-inter text-dark-bg"
                >
                    Book Now
                </motion.a>
            </div>

            <button
                type="button"
                className="rounded-md cursor-pointer p-2 text-white lg:hidden"
                onClick={onShowNav}
                aria-label={showNav ? 'Close menu' : 'Open menu'}
                aria-expanded={showNav}
            >
                {showNav ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
};

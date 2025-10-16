import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { delay, motion, scale } from "motion/react";

const Navbar = () => {
    const [stickyNav, setStickyNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setStickyNav(true);
            } else {
                setStickyNav(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const buttonVariant = {
        hover: {
            background: "var(--color-custom-1)",
            color: "var(--color-white)",
            scale: 1.05,
        },
        tap: {
            scale: 0.9,
        },
        transition: {
            delay: 0.2,
            stiffness: 100,
            type: "spring",
        },
    };

    return (
        <div
            className={`flex items-center ${
                stickyNav ? "bg-linear-to-r from-custom-1 via-custom-2 to-custom-1 shadow-2xl" : "bg-transparent"
            } z-[100] fixed h-20 w-full px-10 py-2 overflow-hidden`}
        >
            <div className="flex flex-1 items-center gap-4 text-white">
                <img src={Logo} alt="" className="size-20 rounded-full" />
                <h1 className="text-3xl font-bold">Anike Fashion</h1>
            </div>
            <ul className="text-white flex-1 flex items-center gap-2">
                <motion.li
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className="cursor-pointer rounded-xl  px-4 py-2"
                >
                    Home
                </motion.li>
                <motion.li
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className="cursor-pointer rounded-xl  px-4 py-2"
                >
                    About
                </motion.li>
                <motion.li
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className="cursor-pointer rounded-xl  px-4 py-2"
                >
                    Gallery
                </motion.li>
                <motion.li
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className="cursor-pointer rounded-xl  px-4 py-2"
                >
                    Testimonial
                </motion.li>
                <motion.li
                    variants={buttonVariant}
                    whileHover="hover"
                    whileTap="tap"
                    transition="transition"
                    className="cursor-pointer rounded-xl  px-4 py-2"
                >
                    Contact
                </motion.li>
            </ul>
            <motion.button
                whileTap={{
                    scale: 0.9,
                }}
                whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255,255,255,0.2)",
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                }}
                className="rounded-xl cursor-pointer bg-custom-2 text-white px-6 py-3"
            >
                Book Now
            </motion.button>
        </div>
    );
};

export default Navbar;

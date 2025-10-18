import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { AnimatePresence, delay, motion, scale } from "motion/react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
    const [stickyNav, setStickyNav] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const isDesktop = useMediaQuery({minWidth: 768})

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
            background: "var(--color-custom-2)",
            // boxShadow: "0 10px 30px rgba(7, 0, 77, 0.4)",
            color: "var(--color-custom-4)",
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

    const navlist = ["home", "about", "gallery", "testimonial", "contact"];

    const mobileMenu = {
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50,
            },
        },
        close: {
            opacity: 0,
            x: -50,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <div
            className={`flex items-center ${
                stickyNav
                    ? "bg-linear-to-r from-custom-1 via-custom-2 to-custom-1 shadow-2xl"
                    : "bg-transparent"
            } z-100 backdrop-blur-sm fixed container justify-between top-0 left-0 right-0 h-20 min-w-full px-2 lg:px-5 py-2`}
        >
            <div className="flex items-center gap-2 text-white">
                <img
                    src={Logo}
                    alt=""
                    className="lg:size-20 md:size-15 size-12 rounded-full"
                />
                <h1 className="lg:text-5xl text-3xl md:text-4xl font-bold font-sour-gummy">
                    Anike Fashion
                </h1>
            </div>
            <AnimatePresence>
                {(showNav || isDesktop) && (
                    <motion.ul
                        layout
                        key="nav"
                        variants={!isDesktop ? mobileMenu : {}}
                        initial={!isDesktop ? "close" : false}
                        animate={!isDesktop ? (showNav ? "open" : "close") : false}
                        exit={!isDesktop ? "close" : false}
                        className={`text-white gap-5 lg:p-0 p-5 lg:opacity-100 font-semibold max-w-3xl lg:h-0 h-screen font-open-sans flex lg:static absolute top-0 left-0 w-9/12 md:w-1/2 lg:w-full lg:bg-custom-1 bg-linear-to-t from-custom-2 to-custom-1 ${
                            showNav ? "opacity-100" : "opacity-0 lg:opacity-100"
                        } lg:flex-row flex-col lg:items-center lg:gap-2`}
                    >
                        <div className="lg:hidden flex items-center gap-4 text-white">
                            <img
                                src={Logo}
                                alt=""
                                className="size-20 rounded-full"
                            />
                            <h1 className="text-2xl md:text-3xl font-bold font-montserrat">
                                Anike Fashion
                            </h1>
                        </div>
                        {navlist.map((nav, index) => (
                            <Link
                                to={nav}
                                smooth={true}
                                offset={50}
                                delay={100}
                                spy={true}
                                duration={500}
                            >
                                <motion.li
                                    key={index}
                                    variants={buttonVariant}
                                    whileHover="hover"
                                    whileTap="tap"
                                    transition="transition"
                                    className="cursor-pointer capitalize rounded-xl  px-4 py-2"
                                >
                                    {nav}
                                </motion.li>
                            </Link>
                        ))}
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
                            className="rounded-xl lg:mt-0 mt-5 lg:ml-15 lg:w-30 text-center font-semibold font-poppins cursor-pointer lg:bg-custom-2 bg-custom-1 text-white p-3 lg:py-2.5"
                        >
                            Book Now
                        </motion.button>
                    </motion.ul>
                )}
            </AnimatePresence>
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
                className="lg:hidden m-2 text-3xl cursor-pointer text-white"
                onClick={() => setShowNav(!showNav)}
            >
                {showNav ? <X /> : <Menu />}
            </motion.button>
        </div>
    );
};

export default Navbar;

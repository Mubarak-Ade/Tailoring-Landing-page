import { motion } from "motion/react";
import React, { useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { GiAmpleDress, GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import { HiScissors } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
import { Link } from "react-scroll";
import { containerVariant } from "../animation/general.js";
import { FooterCardVariant, FooterLinkVariant, footerChildVariant } from "../animation/footer.js";
import { contactInfo } from "../data";
import { inputVariants } from "../animation/footer.js";

const Footer = () => {

    const [isFocused, setIsFocused] = useState(false);

    return (
        <motion.section
            initial="initial"
            whileInView="view"
            variants={containerVariant}
            className="grid grid-cols-2 gap-5 overflow-hidden bg-linear-to-l px-8 py-6 from-custom-1 via-custom-2 to-custom-1"
        >
            <motion.div variants={footerChildVariant} className="px-6 py-4">
                <h2 className="text-white font-bold text-3xl">About us</h2>
                <p className="text-white">
                    We are master tailors dedicated to creating bespoke garments
                    that perfectly express your individual style and
                    personality. Every stitch tells your story.
                </p>
                <div className="flex mt-5 w-full gap-4 [&_span]:p-2 [&_span]:cursor-pointer [&_span]:w-10 [&_span]:h-10 [&_span]:flex [&_span]:items-center [&_span]:flex-col [&_span]:justify-center [&_span]:border [&_span]:border-custom-2 [&_span]:rounded-full ">
                    <motion.span
                        variants={FooterCardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiAmpleDress className="text-xl text-white" />
                    </motion.span>
                    <motion.span
                        variants={FooterCardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiSewingMachine className="text-xl text-white" />
                    </motion.span>
                    <motion.span
                        variants={FooterCardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiSewingNeedle className="text-xl text-white" />
                    </motion.span>
                    <motion.span
                        variants={FooterCardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <HiScissors className="text-xl text-white" />
                    </motion.span>
                </div>
            </motion.div>
            <motion.div variants={footerChildVariant} className="">
                <h2 className="text-2xl px-6 py-4 text-white font-bold">
                    Quick Links
                </h2>
                <ul className="text-white w-80">
                    <Link
                        to="hero"
                        smooth={true}
                        offset={50}
                        delay={100}
                        spy={true}
                        duration={500}
                    >
                        <motion.li
                            variants={FooterLinkVariant}
                            whileHover="hover"
                            whileTap="tap"
                            transition="transition"
                            className="cursor-pointer rounded-xl  px-4 py-2"
                        >
                            Home
                        </motion.li>
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        offset={50}
                        delay={100}
                        spy={true}
                        duration={500}
                    >
                        <motion.li
                            variants={FooterLinkVariant}
                            whileHover="hover"
                            whileTap="tap"
                            transition="transition"
                            className="cursor-pointer rounded-xl  px-4 py-2"
                        >
                            About
                        </motion.li>
                    </Link>
                    <Link
                        to="gallery"
                        smooth={true}
                        offset={50}
                        delay={100}
                        spy={true}
                        duration={500}
                    >
                        <motion.li
                            variants={FooterLinkVariant}
                            whileHover="hover"
                            whileTap="tap"
                            transition="transition"
                            className="cursor-pointer rounded-xl  px-4 py-2"
                        >
                            Gallery
                        </motion.li>
                    </Link>
                    <Link
                        to="testimonial"
                        smooth={true}
                        offset={50}
                        delay={100}
                        spy={true}
                        duration={500}
                    >
                        <motion.li
                            variants={FooterLinkVariant}
                            whileHover="hover"
                            whileTap="tap"
                            transition="transition"
                            className="cursor-pointer rounded-xl  px-4 py-2"
                        >
                            Testimonial
                        </motion.li>
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        offset={50}
                        delay={100}
                        spy={true}
                        duration={500}
                    >
                        <motion.li
                            variants={FooterLinkVariant}
                            whileHover="hover"
                            whileTap="tap"
                            transition="transition"
                            className="cursor-pointer rounded-xl  px-4 py-2"
                        >
                            Contact
                        </motion.li>
                    </Link>
                </ul>
            </motion.div>
            <motion.div variants={footerChildVariant} className="">
                <h2 className="text-2xl font-bold mt-5 text-white">
                    Contact Info
                </h2>
                {contactInfo.map((contact) => (
                    <div
                        key={contact.id}
                        className="mt-2 flex items-center gap-2 text-white"
                    >
                        <span className="text-lg rounded-full bg-custom-2/40 p-2 border border-custom-2">
                            <contact.icon />
                        </span>
                        <div className="">
                            <p>{contact.content}</p>
                        </div>
                    </div>
                ))}
            </motion.div>
            <motion.div variants={footerChildVariant} className="">
                <h2 className="text-2xl font-bold text-white">News Letter</h2>
                <p className="m-2 text-white">
                    Subscribe to receive updates on new collections and
                    exclusive offers.
                </p>
                <form action="" className="mt-5">
                    <motion.input
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        variants={inputVariants}
                        animate="animate"
                        custom={isFocused}
                        type="email"
                        name="email"
                        placeholder="Enter your Email address"
                        className="border-2 outline-none shadow-2xl shadow-custom-1 border-custom-2 bg-white/10 h-12 rounded-xl text-white w-120 px-4 py-2"
                        id=""
                    />
                    <motion.button
                        whileTap={{
                            scale: 0.95,
                        }}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 0 15px var(--color-custom-2)",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}
                        type="submit"
                        className="cursor-pointer  w-120 mt-2 bg-gradient-to-l  from-custom-2 to-custom-1 rounded-xl h-12 shadow-2xl text-xl text-white font-bold"
                    >
                        Subscribe
                    </motion.button>
                </form>
            </motion.div>
        </motion.section>
    );
};

export default Footer;

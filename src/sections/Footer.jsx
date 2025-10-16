import { motion } from "motion/react";
import React from "react";
import { BsClockFill } from "react-icons/bs";
import { GiAmpleDress, GiSewingMachine, GiSewingNeedle } from "react-icons/gi";
import { HiScissors } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";

const Footer = () => {

    const contactInfo = [
            {
                id: 0,
                icon: TbLocationFilled,
                content: "123 Fashion Avenue, Garki, Abuja",
            },
            {
                id: 1,
                icon: ImPhone,
                content: "+234 (0) 123 456 7890",
            },
            {
                id: 2,
                icon: MdEmail,
                content: "info@bespoketailor.com",
            },
            {
                id: 3,
                icon: BsClockFill,
                content: "Mon - Sat: 9:00 AM - 6:00 PM",
            },
        ];

    const cardVariant = {
        hover: {
            backgroundColor: "var(--color-custom-2)",
            border: "1px solid var(--custom-color-1)",
            scale: 1.1,
        },
        tap: {},
        transition: {
            type: "spring",
            stiffness: 300,
        },
        exit: {
            scale: 0,
        },
    };

    const buttonVariant = {
        hover: {
            background: "var(--color-custom-2)",
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
        <div className="grid grid-cols-2 gap-5 overflow-hidden bg-linear-to-l px-8 py-6 from-custom-1 via-custom-2 to-custom-1">
            <div className="px-6 py-4">
                <h2 className="text-custom-2 font-bold text-3xl">About us</h2>
                <p className="text-white">
                    We are master tailors dedicated to creating bespoke garments
                    that perfectly express your individual style and
                    personality. Every stitch tells your story.
                </p>
                <div className="flex mt-5 w-full gap-4 [&_span]:p-2 [&_span]:cursor-pointer [&_span]:w-10 [&_span]:h-10 [&_span]:flex [&_span]:items-center [&_span]:flex-col [&_span]:justify-center [&_span]:border [&_span]:border-custom-2 [&_span]:rounded-full ">
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiAmpleDress className="text-xl text-white" />
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiSewingMachine className="text-xl text-white" />
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <GiSewingNeedle className="text-xl text-white" />
                    </motion.span>
                    <motion.span
                        variants={cardVariant}
                        whileTap="tap"
                        whileHover="hover"
                        transition="transition"
                        exit="exit"
                        className=""
                    >
                        <HiScissors className="text-xl text-white" />
                    </motion.span>
                </div>
            </div>
            <div className="">
                <h2 className="text-2xl px-6 py-4 text-custom-2 font-bold">
                    Quick Links
                </h2>
                <ul className="text-white">
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
            </div>
            <div className="">
                <h2 className="text-2xl font-bold mt-5 text-white">Contact Info</h2>
                {contactInfo.map((contact) => (
                        <div key={contact.id} className="mt-2 flex items-center gap-2 text-white">
                            <span className="text-lg rounded-full bg-custom-2/40 p-2 border border-custom-2">
                                <contact.icon />
                            </span>
                            <div className="">
                                <p>{contact.content}</p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="">
                <h2 className="text-2xl font-bold text-white">News Letter</h2>
                <p className="m-2 text-white">Subscribe to receive updates on new collections and exclusive offers.</p>
                <form action="" className="mt-5">
                    <input type="email" name="email" placeholder="Enter your Email address" className="border-2 shadow-2xl shadow-custom-1 border-custom-2 bg-white/10 h-12 rounded-xl text-white w-120 px-4 py-2" id="" />
                    <button type="submit" className="w-120 mt-2 bg-custom-2 rounded-xl h-12 shadow-2xl shadow-custom-2 text-xl text-white font-bold">Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;

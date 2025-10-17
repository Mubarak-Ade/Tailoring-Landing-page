import { motion } from "motion/react";
import { containerVariant } from "../animation/general";
import { contactInfo } from "../data";

const Contact = () => {

    return (
        <motion.section
            initial="initial"
            whileInView="view"
            name="contact"
            variants={containerVariant}
            className="py-16 px-6 bg-custom-2 flex items-center justify-center flex-col"
        >
            <motion.div
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: .8,
                    type: "spring",
                    stiffness: 200,
                }}
                className="flex mt-8 w-full bg-linear-45 from-custom-1 to-custom-2 rounded-4xl overflow-hidden"
            >
                {/* Contact form or details can be added here */}
                <div className="flex-1 px-8 py-14">
                    <h2 className="text-4xl font-bold text-custom-3 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-white text-xl">
                        We're here to bring your vision to life with bespoke
                        tailoring that reflects your unique style and
                        personality.
                    </p>
                    {contactInfo.map((contact) => (
                        <motion.div
                            layout
                            key={contact.id}
                            whileHover={{
                                x: 20,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            transition={{
                                ease: "linear",
                            }}
                            className="mt-8 flex gap-4 cursor-pointer text-white"
                        >
                            <span className="text-2x rounded-full bg-custom-2/40 p-4 border border-custom-2">
                                <contact.icon />
                            </span>
                            <div className="">
                                <h4>{contact.head}</h4>
                                <p>{contact.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="bg-custom-4 flex-1 px-6 py-6">
                    <h1 className="text-3xl font-bold text-custom-1">
                        Schedule a Consultation
                    </h1>
                    <form className="flex flex-col gap-4 max-w-lg mx-auto mt-8">
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="p-3 border-2 border-custom-2 bg-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 border-2 border-custom-2 bg-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="p-3 border-2 border-custom-2 bg-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">
                                Message
                            </label>
                            <textarea
                                placeholder="Message"
                                className="p-3 border-2 border-custom-2 bg-white rounded-xl h-32"
                            ></textarea>
                        </div>
                        <motion.button
                            whileTap={{
                                scale: 0.95,
                            }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 30px rgba(255,255,255,0.5)",
                            }}
                            type="submit"
                            className="bg-linear-90 from-custom-2 to-custom-1 text-white py-4 cursor-pointer rounded-2xl hover:bg-custom-2 transition"
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;

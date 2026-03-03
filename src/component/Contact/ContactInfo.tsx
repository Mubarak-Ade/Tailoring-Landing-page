import { motion } from "motion/react";
import { contactInfo } from "../../data";

export const ContactInfo = () => (
    <div className="flex-1 lg:px-8 py-14">
        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-white text-sm max-w-100">
            We're here to bring your vision to life with bespoke tailoring that
            reflects your unique style and personality.
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
                className="mt-8 flex items-center gap-4 cursor-pointer text-white"
            >
                <span className="text-xl rounded-full bg-dark-bg/20 text-gold h-14 p-4 w-14 lg:w-15 lg:h-15 flex items-center justify-center border border-gold">
                    <contact.icon />
                </span>
                <div className="flex-1 ">
                    <h4>{contact.head}</h4>
                    <p>{contact.content}</p>
                </div>
            </motion.div>
        ))}
    </div>
);

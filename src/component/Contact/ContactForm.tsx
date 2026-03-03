import { motion } from "motion/react";

export const ContactForm = () => (
    <form className="flex flex-col font-poppins gap-4  mx-auto mt-8">
        <div className="flex flex-col w-full text-dark-text gap-2">
            <label className="font-bold text-sm">Name</label>
            <input
                type="text"
                placeholder="Name"
                className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl"
            />
        </div>
        <div className="flex flex-col text-dark-text gap-2">
            <label className="font-bold text-sm">Email</label>
            <input
                type="email"
                placeholder="Email"
                className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl"
            />
        </div>
        <div className="flex flex-col text-dark-text gap-2">
            <label className="font-bold text-sm">Phone Number</label>
            <input
                type="text"
                placeholder="Phone Number"
                className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl"
            />
        </div>
        <div className="flex flex-col text-dark-text gap-2">
            <label className="font-bold text-sm">Message</label>
            <textarea
                placeholder="Message"
                className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl h-32"
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
            className="bg-gold  py-4 cursor-pointer rounded-2xl text-dark-bg transition"
        >
            Send Message
        </motion.button>
    </form>
);
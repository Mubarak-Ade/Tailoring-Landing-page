import { motion } from 'motion/react';
import { log } from 'node:console';
import { useState } from 'react';
import axios from "axios"

type Contact = {name: string, email: string, message: string}

export const ContactForm = () => {
    const [contact, setContact] = useState<Contact>({
        name: "",
        email: "",
        message: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    const handleOnChange = (field: string, value: string) => {
        setContact(prev => ({...prev, [field]: value}))
        
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            const res = await axios.post("https://send-message-tsfn.onrender.com/send", contact)
            setIsLoading(false)
            alert(res.data?.message)
        } catch (error) {
            console.error(error)
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col font-poppins gap-4  mx-auto mt-8">
            <div className="flex flex-col w-full text-dark-text gap-2">
                <label className="font-bold text-sm">Name</label>
                <input
                    type="text"
                    value={contact.name}
                    onChange={(e) => handleOnChange("name", e.target.value)}
                    placeholder="Name"
                    className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl"
                />
            </div>
            <div className="flex flex-col text-dark-text gap-2">
                <label className="font-bold text-sm">Email</label>
                <input
                    type="email"
                    value={contact.email}
                    onChange={(e) => handleOnChange("email", e.target.value)}
                    placeholder="Email"
                    className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl"
                />
            </div>
            <div className="flex flex-col text-dark-text gap-2">
                <label className="font-bold text-sm">Message</label>
                <textarea
                    placeholder="Message"
                    onChange={(e) => handleOnChange("message", e.target.value)}
                    value={contact.message}
                    className="p-3 border border-dark-text bg-dark-bg/20 rounded-xl h-32"
                ></textarea>
            </div>
            <motion.button
                whileTap={{
                    scale: 0.95,
                }}
                whileHover={{
                    scale: 1.02,
                    boxShadow: '0 10px 30px hsla(45, 85%, 53%, 1)',
                }}
                disabled={isLoading}
                type="submit"
                className={` ${isLoading ? "bg-gold/20 cursor-wait" : "bg-gold cursor-pointer"} py-4 rounded-2xl text-dark-bg transition`}
            >
                {isLoading ? "Message is Being Deliver" : "Send Message"}
            </motion.button>
        </form>
    );
};

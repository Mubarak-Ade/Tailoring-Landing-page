import { BsClockFill } from "react-icons/bs";
import { TbLocationFilled } from "react-icons/tb";
import { ImPhone } from "react-icons/im";
import React from "react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    const contactInfo = [
        {
            id: 0,
            icon: TbLocationFilled,
            head: "Visit Our Studio",
            content: "123 Fashion Avenue, Garki, Abuja",
        },
        {
            id: 1,
            icon: ImPhone,
            head: "Call Us",
            content: "+234 (0) 123 456 7890",
        },
        {
            id: 2,
            icon: MdEmail,
            head: "Email Us",
            content: "info@bespoketailor.com",
        },
        {
            id: 3,
            icon: BsClockFill,
            head: "Business Hours",
            content: "Mon - Sat: 9:00 AM - 6:00 PM",
        },
    ];

    return (
        <div className="px-16 py-10 bg-custom-2 flex items-center justify-center flex-col">
            <div className="flex mt-8 w-full bg-linear-45 from-custom-1 to-custom-2 rounded-4xl overflow-hidden">
                {/* Contact form or details can be added here */}
                <div className="flex-1 px-8 py-4">
                    <h2 className="text-4xl font-bold text-custom-3 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-white text-xl">
                        We're here to bring your vision to life with bespoke
                        tailoring that reflects your unique style and
                        personality.
                    </p>
                    {contactInfo.map((contact) => (
                        <div key={contact.id} className="mt-8 flex gap-4 text-white">
                            <span className="text-2x rounded-full bg-custom-2/40 p-4 border border-custom-2">
                                <contact.icon />
                            </span>
                            <div className="">
                                <h4>{contact.head}</h4>
                                <p>{contact.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-custom-4 flex-1 px-6 py-4">
                    <h1 className="text-3xl font-bold text-custom-1">
                        Schedule a Consultation
                    </h1>
                    <form className="flex flex-col gap-4 max-w-lg mx-auto mt-8">
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="p-3 border-2 border-custom-5 bg-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-3 border-2 border-custom-5 bg-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="p-3 border-2 border-custom-5 bg-white rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col text-custom-1 gap-2">
                            <label className="font-bold text-base">
                                Message
                            </label>
                            <textarea
                                placeholder="Message"
                                className="p-3 border-2 border-custom-5 bg-white rounded-xl h-32"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-linear-90 from-custom-2 to-custom-1 text-white p-3 rounded-2xl hover:bg-custom-2 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

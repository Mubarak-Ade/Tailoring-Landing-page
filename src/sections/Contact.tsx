import { motion } from "motion/react";
import { containerVariant } from "../animation/general";
import { contactInfo } from "../data";
import { ContactInfo } from "../component/Contact/ContactInfo";
import { ContactForm } from "../component/Contact/ContactForm";




const Contact = () => {
    return (
        <motion.section
            initial="initial"
            whileInView="view"
            id="contact"
            variants={containerVariant}
            viewport={{ once: true, amount: 0.4 }}
            className="py-8 bg-dark-fg font-montserrat flex items-center justify-center flex-col"
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
                    duration: 0.8,
                    type: "spring",
                    stiffness: 200,
                }}
                className="flex flex-col-reverse p-5 lg:flex-row mt-8 w-full bg-transparent overflow-hidden"
            >
                {/* Contact Info */}

                <ContactInfo />

                <div className="bg-dark-fg shadow-[0_0_15px] flex-1 px-6 py-6 rounded-4xl max-w-lg">
                    <h1 className="text-2xl font-bold text-white">
                        Schedule a Consultation
                    </h1>
                    <ContactForm />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Contact;

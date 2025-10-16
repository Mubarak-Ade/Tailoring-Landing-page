import React from "react";

const CTASection = () => {
    return (
        <div className="bg-linear-to-r from-custom-1 to-[#2D82B7] overflow-hidden relative text-center">
            <div className="h-full w-full absolute bg-[url(./assets/images/cta_image.png)] bg-cover bg-center bg-fixed opacity-20 z-1"></div>
            <div className="z-50 h-100 relative flex items-center justify-center flex-col gap-8">
                <h1 className="text-custom-3 text-5xl font-bold">
                    Your next perfect fit is one booking away.
                </h1>
                <p className="text-xl text-white">
                    Collaborate with us to design exquisite, custom attire that
                    embodies your unique elegance.
                </p>
                <button className="bg-custom-5 text-custom-1 font-bold px-6 w-100 text-lg rounded-full py-4">
                    Book a fitting
                </button>
            </div>
        </div>
    );
};

export default CTASection;

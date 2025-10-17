import React, { useState } from "react";
import { BsClockFill } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { TbLocationFilled } from "react-icons/tb";
import testinialImage from "./assets/images/testimonial/edo.png";
import testinialImage2 from "./assets/images/testimonial/hausa.png";
import testinialImage3 from "./assets/images/testimonial/igbo.png";
import testinialImage4 from "./assets/images/testimonial/yoruba.png";
import testinialImage5 from "./assets/images/testimonial/yoruba1.png";
import Image from "./assets/images/Gemini_Generated_Image_2bykny2bykny2byk.png";
import Image1 from "./assets/images/Gemini_Generated_Image_6s6hic6s6hic6s6h.png";
import Image2 from "./assets/images/Gemini_Generated_Image_948cco948cco948c.png";
import Image3 from "./assets/images/Gemini_Generated_Image_9iqv4y9iqv4y9iqv.png";
import Image4 from "./assets/images/Gemini_Generated_Image_o2nhnho2nhnho2nh.png";
import Image5 from "./assets/images/Gemini_Generated_Image_qvzzm7qvzzm7qvzz.png";

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

const testimonials = [
    {
        id: 1,
        name: "Aisha Bello",
        location: "lagos, Nigeria",
        feedback:
            "Brought my Ankara fabric and had no idea what to make. Mubarak turned it into a stunning gown that fits like it was made by angels. The finishing is perfect — everyone at my event asked who my tailor was!",
        image: testinialImage2,
    },
    {
        id: 2,
        name: "Fatima Yusuf",
        location: "Kano, Nigeria",
        feedback:
            "I sent my measurements online and got my dress delivered in a week! Perfect fit. I love how the tailor listens and suggests styles that flatter your body shape. 10/10 service.",
        image: testinialImage5,
    },
    {
        id: 3,
        name: "Folake Adebayo",
        location: "Ibadan, Nigeria",
        feedback:
            "I wanted something simple yet traditional for my engagement. The Adire gown Mubarak made was a masterpiece — bold blue patterns, elegant flow, and so comfortable. My family couldn’t stop praising it!",
        image: testinialImage4,
    },
    {
        id: 4,
        name: "Chinwe Okafor",
        location: "Enugu, Nigeria",
        feedback:
            "I wore the George wrapper Mubarak tailored for my brother’s wedding — the beadwork, the fitting, everything screamed class! I’ve found my lifetime tailor",
        image: testinialImage3,
    },
    {
        id: 5,
        name: "Zainab Kolawole",
        location: "Abuja, Nigeria",
        feedback:
            "Professional, punctual, and creative! My corporate suits always come out neat and classy. The attention to detail is unmatched — I’ve never looked this confident in my outfits.",
        image: testinialImage,
    },
];

const galleryData = [
    {
        id: 0,
        image: Image,
        title: "The Royal Ankara",
        category: "Dress Making",
        description: "A bold statement of heritage and grace.",
        details:
            "A bold statement of heritage and grace. This Ankara masterpiece blends traditional motifs with modern silhouettes — perfect for the queen in every woman.",
        more: [
            "Handcrafted from premium Ankara fabric with intricate patterns.",
            "Fitted bodice with a regal, flowing skirt silhouette.",
            "Perfect balance of tradition and modern fashion.",
        ],
    },
    {
        id: 1,
        image: Image1,
        title: "Golden Hour Elegance",
        category: "Evening Dress",
        description: "Crafted for moments that demand attention.",
        details:
            "Crafted for moments that demand attention. The soft gold tones and fitted waistline accentuate confidence, charm, and timeless femininity.",
        more: [
            "Made from satin-gold fabric that catches every beam of light.",
            "Elegant waistline designed to accentuate natural curves.",
            "Ideal for evening galas and high-profile events.",
        ],
    },
    {
        id: 2,
        image: Image2,
        title: "The Heritage Gown",
        description: "A rich fusion of African artistry and modern tailoring.",
        details:
            "A rich fusion of African artistry and modern tailoring. Every pleat and stitch tells a story of culture, confidence, and sophistication.",
        more: [
            "A blend of traditional African prints and couture tailoring.",
            "Detailed pleating crafted to enhance structure and flow.",
            "Designed to represent confidence, culture, and class.",
        ],
    },
    {
        id: 3,
        image: Image3,
        title: "Emerald Majesty",
        description:
            "Inspired by the strength and elegance of African royalty.",
        details:
            "Inspired by the strength and elegance of African royalty. This emerald creation captures power in every fold, radiating boldness with a soft finish.",
        more: [
            "Emerald-green fabric symbolizing royalty and strength.",
            "Soft yet structured design for commanding presence.",
            "Ideal for formal occasions and grand entrances.",
        ],
    },
    {
        id: 4,
        image: Image4,
        title: "The Classic Silhouette",
        description: "Simplicity elevated to luxury.",
        details:
            "Simplicity elevated to luxury. A beautifully structured gown that flatters every curve, blending minimalism with authentic African detailing.",
        more: [
            "Minimalist design elevated with subtle African craftsmanship.",
            "Form-fitting silhouette for timeless elegance.",
            "A wardrobe essential for both classic and modern events.",
        ],
    },
    {
        id: 5,
        image: Image5,
        title: "Sunset Radiance",
        description: "A vibrant piece designed to glow as the sun sets.",
        details:
            "A vibrant piece designed to glow as the sun sets. The warm palette and intricate beadwork make this dress a celebration of both culture and creativity.",
        more: [
            "Warm sunset-inspired hues with intricate bead detailing.",
            "Crafted to shimmer beautifully in evening light.",
            "Celebrates African artistry through modern design.",
        ],
    },
];
export { contactInfo, testimonials, galleryData };

import React, { useState } from 'react';
import { BsClockFill } from 'react-icons/bs';
import { ImPhone } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { TbLocationFilled } from 'react-icons/tb';
import testinialImage from './assets/images/testimonial/edo.png';
import testinialImage2 from './assets/images/testimonial/hausa.png';
import testinialImage3 from './assets/images/testimonial/igbo.png';
import testinialImage4 from './assets/images/testimonial/yoruba.png';
import testinialImage5 from './assets/images/testimonial/yoruba1.png';
import MidnightAzureTunicSetImage from './assets/cloth_images/MidnightAzureTunicSetImage.png';
import MidnightFloralWrapImage from './assets/cloth_images/midnight-floral-wrap.jpeg';
import AutumnLeafTwoPieceImage from './assets/cloth_images/autumn-leaf-two-piece.jpeg';
import RoseBlushEveningGownImage from './assets/cloth_images/rose-blush-evening-gown.jpeg';
import RubyPanelLaceDressImage from './assets/cloth_images/ruby-panel-lace-dress.png';
import OceanBloomAnkaraGownImage from './assets/cloth_images/ocean-bloom-ankara-gown.png';
import { Contact, Gallery, Testimonial } from './types/content';

const contactInfo: Contact[] = [
    {
        id: 0,
        icon: TbLocationFilled,
        head: 'Visit Our Studio',
        content: '123 Duste Sokale Junction, Abuja',
    },
    {
        id: 1,
        icon: ImPhone,
        head: 'Call Us',
        content: '+234 (0) 8140163554',
    },
    {
        id: 2,
        icon: ImPhone,
        head: 'Our Second Line',
        content: '+234 (0) 8032838165',
    },
    {
        id: 3,
        icon: MdEmail,
        head: 'Email Us',
        content: 'adeshinaibrahim571@gmail.com',
    },
    {
        id: 4,
        icon: BsClockFill,
        head: 'Business Hours',
        content: 'Mon - Sat: 9:00 AM - 6:00 PM',
    },
];

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Aisha Bello',
        location: 'lagos, Nigeria',
        feedback:
            'Brought my Ankara fabric and had no idea what to make. Anike turned it into a stunning gown that fits like it was made by angels. The finishing is perfect — everyone at my event asked who my tailor was!',
        image: testinialImage2,
    },
    {
        id: 2,
        name: 'Fatima Yusuf',
        location: 'Kano, Nigeria',
        feedback:
            'I sent my measurements online and got my dress delivered in a week! Perfect fit. I love how the tailor listens and suggests styles that flatter your body shape. 10/10 service.',
        image: testinialImage5,
    },
    {
        id: 3,
        name: 'Folake Adebayo',
        location: 'Ibadan, Nigeria',
        feedback:
            'I wanted something simple yet traditional for my engagement. The Adire gown Anike made was a masterpiece — bold blue patterns, elegant flow, and so comfortable. My family couldn’t stop praising it!',
        image: testinialImage4,
    },
    {
        id: 4,
        name: 'Chinwe Okafor',
        location: 'Enugu, Nigeria',
        feedback:
            'I wore the George wrapper Anike tailored for my brother’s wedding — the beadwork, the fitting, everything screamed class! I’ve found my lifetime tailor',
        image: testinialImage3,
    },
    {
        id: 5,
        name: 'Zainab Kolawole',
        location: 'Abuja, Nigeria',
        feedback:
            'Professional, punctual, and creative! My corporate suits always come out neat and classy. The attention to detail is unmatched — I’ve never looked this confident in my outfits.',
        image: testinialImage,
    },
];

const galleryData: Gallery[] = [
    {
        id: 0,
        image: MidnightAzureTunicSetImage,
        title: 'Midnight Azure Tunic Set',
        category: 'Contemporary Co-ord',
        description:
            'Deep navy two-piece ensemble featuring architectural puff sleeves and wide-leg trousers.',
        details:
            'A sophisticated dark navy set crafted from structured fabric. The top features a round neckline and dramatic lantern sleeves with ribbon tie details at the cuffs, paired with fluid, floor-length wide-leg trousers for a seamless, elongated silhouette.',
        more: [
            'Exaggerated lantern sleeves with adjustable ribbon ties at the wrist.',
            'Tailored tunic top with subtle side-button detailing and cinched waist.',
            'High-waisted, full-length trousers with a relaxed, wide-leg cut.',
        ],
    },
    {
        id: 1,
        image: MidnightFloralWrapImage,
        title: 'Midnight Floral Wrap Dress',
        category: 'Long Dress',
        description: 'Dark floral wrap-style dress with soft gathering and full skirt.',
        details:
            'This long-sleeve floral dress combines a graceful V-neck wrap bodice with a gathered waist and flowing hem, making it perfect for classy events and dinner outings.',
        more: [
            'Elegant wrap-inspired front with flattering waist emphasis.',
            'Soft drape for comfort and all-day wear.',
            'Ideal for birthdays, dinners, and guest appearances.',
        ],
    },
    {
        id: 2,
        image: AutumnLeafTwoPieceImage,
        title: 'Autumn Leaf Two-Piece Set',
        category: 'Casual Luxe Set',
        description: 'Structured leaf-print tunic paired with wide-leg black trousers.',
        details:
            'A modern two-piece outfit featuring a warm-toned leaf motif top with gentle volume sleeves and crisp, wide-leg trousers for a polished day-to-evening look.',
        more: [
            'Straight-cut tunic for a clean, tailored finish.',
            'Comfortable wide-leg pants for balance and movement.',
            'Great for work events, brunch, and smart-casual styling.',
        ],
    },
    {
        id: 3,
        image: RoseBlushEveningGownImage,
        title: 'Rose Blush Evening Gown',
        category: 'Evening Dress',
        description: 'Soft blush floral gown with gathered bodice and flowing length.',
        details:
            'A romantic full-length gown in muted rose tones, designed with a flattering V-neckline, long sleeves, and a cinched waist that shapes beautifully.',
        more: [
            'Lightweight floral fabric with premium finishing.',
            'Gathered waistline for a feminine silhouette.',
            'Perfect for receptions, church events, and formal gatherings.',
        ],
    },
    {
        id: 4,
        image: RubyPanelLaceDressImage,
        title: 'Ruby Panel Lace Dress',
        category: 'Traditional Dress',
        description: 'Red traditional dress with contrast paneling and lace accents.',
        details:
            'This dress blends bold ruby tones with geometric panel placement and intricate trim lines to create a clean, regal traditional silhouette.',
        more: [
            'Defined bodice with decorative black lace center panel.',
            'Long sleeves and full length for elegant coverage.',
            'Excellent choice for cultural celebrations and ceremonies.',
        ],
    },
    {
        id: 5,
        image: OceanBloomAnkaraGownImage,
        title: 'Ocean Bloom Ankara Gown',
        category: 'Ankara Gown',
        description: 'Blue floral Ankara gown with layered diagonal panel design.',
        details:
            'A vibrant blue floor-length gown crafted with mixed floral panels that sweep diagonally across the bodice and skirt for a bold couture-inspired finish.',
        more: [
            'Rich Ankara print with coordinated pattern blocking.',
            'Structured shape with flared sleeves for presence.',
            'Perfect for owambe, weddings, and celebratory events.',
        ],
    },
];
export { contactInfo, testimonials, galleryData };

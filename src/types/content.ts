import { IconType } from 'react-icons/lib';

export interface Contact {
    id: number;
    icon: IconType;
    head: string;
    content: string;
}

export interface Testimonial {
     id: number,
        name: string,
        location: string,
        feedback: string
        image: string,
}

export interface Gallery {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
    details: string;
    more: string[];
}


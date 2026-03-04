export const WhatsAppLink = (title?: string) => {
    const phone = '2348140163554'; // put this in env in production
    const message = `Hi, I saw your website and i want to know more!`;
    const msg = `Hi, I saw your website and i will like to get the ${title}`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(title ? msg : message)}`;
    return whatsappUrl;
};

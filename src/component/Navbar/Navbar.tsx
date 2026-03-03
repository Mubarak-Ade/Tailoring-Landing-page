import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { drawerMotion, navItemMotion } from "../../animation/navbar";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";

const navList = ["home", "about", "gallery", "testimonial", "contact"];

const Navbar = () => {
    const [stickyNav, setStickyNav] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => setStickyNav(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = showNav ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [showNav]);

    useEffect(() => {
        const closeOnDesktop = () => {
            if (window.innerWidth >= 1024) setShowNav(false);
        };

        window.addEventListener("resize", closeOnDesktop);
        return () => window.removeEventListener("resize", closeOnDesktop);
    }, []);

    const closeMobileMenu = () => setShowNav(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                stickyNav ? "bg-dark-bg/15 shadow-md backdrop-blur-md" : "bg-dark-bg/70"
            }`}
        >
            <DesktopNav onShowNav={() => setShowNav(prev => !prev)} navList={navList} showNav={showNav} />
            <MobileNav closeMobileMenu={closeMobileMenu} navList={navList} showNav={showNav} />
        </header>
    );
};

export default Navbar;

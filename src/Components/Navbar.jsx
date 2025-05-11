import { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.2,
            when: "beforeChildren",
            ease: [0.42, 0, 1, 1],
            duration: 0.5,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
        height: "100vh",
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            when: "beforeChildren",
        },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.09,
            staggerDirection: -1,
            when: "afterChildren",
        },
    },
};

const mobileLinkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", to: "/" },
        { name: "Services", to: "/services" },
        { name: "About", to: "/about" },
        { name: "Features", to: "/features" },
        { name: "Contact", to: "/contact" },
    ];

    return (
        <motion.header
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="fixed w-full bg-gradient-to-r from-primary to-secondary shadow-lg z-50"
        >
            <div className="max-w-7xl mx-auto px-4 py-3 md:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo with proper animation */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.a
                            href="#"
                            className="text-2xl font-heading text-light flex items-center"
                            initial={{ x: -100 }}
                            animate={{ x: 0 }}
                            transition={{ type: "spring", stiffness: 200 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.span
                                initial={{ rotate: -300, scale: 0 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="inline-block mr-1"
                            >
                                🚀
                            </motion.span>
                            AnimaX
                        </motion.a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <motion.ul
                            className="flex space-x-6"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            {navItems.map((item) => (
                                <motion.li
                                    key={item.name}
                                    variants={itemVariants}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link
                                        to={item.to}
                                        className="text-light hover:text-accent font-sans transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden text-light text-xl"
                        onClick={() => setIsOpen(!isOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        variants={itemVariants}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </motion.button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="md:hidden overflow-hidden"
                        >
                            <ul className="flex flex-col space-y-4 py-4 px-2 mt-6">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.name}
                                        variants={mobileLinkVariants}
                                    >
                                        <Link
                                            to={item.to}
                                            className="block text-light hover:text-accent py-2 text-lg font-sans border-b border-white/30"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
};

export default Navbar;
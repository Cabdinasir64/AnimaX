import { delay, motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { useScroll, useTransform } from "framer-motion";

const HeroSection = ({ startAnimation }) => {
    // Scroll-linked transformations
    const { scrollYProgress } = useScroll();
    const Y = useTransform(scrollYProgress, [0, 1], [-90, 1000]);
    // Parent container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.5,
                delayChildren: 0.2,
            },
        },
    };

    // Directional item variants
    const itemVariants = {
        hidden: (direction) => {
            switch (direction) {
                case "top":
                    return { y: -30, opacity: 0 };
                case "bottom":
                    return { y: 30, opacity: 0 };
                case "left":
                    return { x: -30, opacity: 0 };
                default:
                    return { opacity: 0, scale: 0.3 };
            }
        },
        visible: {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],

            },
        },
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={startAnimation ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark/5 to-secondary/10 z-0"
            />

            {/* Animated dots */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cdn.pixabay.com/photo/2022/06/21/14/30/background-7275953_1280.jpg')] opacity-20" />
            </div>

            {/* Content */}
            <motion.div
                initial="hidden"
                animate={startAnimation ? "visible" : "hidden"}
                variants={containerVariants}
                className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-32"
            >
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        variants={itemVariants}
                        custom="top"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
                    >
                        <span className="text-accent font-sans text-sm font-medium">
                            New Feature Released
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        variants={itemVariants}
                        custom="left"
                        className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-dark tracking-tight"
                    >
                        Build <span className="text-primary">Modern</span> Apps
                        <br />
                        With <span className="text-secondary">Ease</span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={itemVariants}
                        custom="left"
                        className="mt-6 text-lg md:text-xl text-dark/80 max-w-3xl mx-auto font-sans"
                    >
                        AnimaX helps you create beautiful, responsive interfaces with React
                        and Tailwind CSS. Accelerate your development with our ready-to-use
                        components.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={containerVariants}
                        className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                    >
                        <motion.a
                            variants={itemVariants}
                            custom="bottom"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            href="#get-started"
                            className="px-8 py-3 rounded-lg bg-primary text-light font-sans font-medium shadow-lg hover:shadow-primary/30 transition-all"
                        >
                            Get Started
                        </motion.a>
                        <motion.a
                            variants={itemVariants}
                            custom="bottom"
                            whileHover={{ y: -3, scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            href="#learn-more"
                            className="px-8 py-3 rounded-lg border-2 border-dark/10 text-dark font-sans font-medium hover:border-primary/30 transition-all flex items-center gap-2 justify-center"
                        >
                            Learn More <FaChevronRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    style={{ y: Y }}
                    variants={itemVariants}
                    className="mt-16 md:mt-24 relative"
                >
                    <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                        <div className="aspect-w-16 aspect-h-9  bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4 md:p-8">
                            <img
                                src="https://cdn.pixabay.com/photo/2017/08/01/09/07/mobile-2563782_1280.jpg"
                                alt=""
                                loading="lazy"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </div>
                    </div>

                    {/* Decorative blurs */}
                    <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-xl" />
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-secondary/10 blur-xl" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

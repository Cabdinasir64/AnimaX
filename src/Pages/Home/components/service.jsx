import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaCode, FaMobile, FaServer, FaChartLine, FaPalette, FaCloud } from "react-icons/fa";

const Services = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Scroll-linked transformations
    const y1 = useTransform(scrollYProgress, [0, 1], [200, -400]);
    const y2 = useTransform(scrollYProgress, [0, 1], [250, -500]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.2]);

    const services = [
        {
            title: "Web Development",
            description: "High-performance websites with modern frameworks like Next.js and React.",
            icon: <FaCode className="text-primary text-4xl" />,
            color: "from-primary/10 to-primary/5"
        },
        {
            title: "Mobile Apps",
            description: "Cross-platform mobile applications for iOS and Android.",
            icon: <FaMobile className="text-secondary text-4xl" />,
            color: "from-secondary/10 to-secondary/5"
        },
        {
            title: "Backend Solutions",
            description: "Scalable server architecture and database design.",
            icon: <FaServer className="text-accent text-4xl" />,
            color: "from-accent/10 to-accent/5"
        },
        {
            title: "UI/UX Design",
            description: "Beautiful interfaces that enhance user experience.",
            icon: <FaPalette className="text-primary text-4xl" />,
            color: "from-primary/10 to-primary/5"
        },
        {
            title: "Data Analytics",
            description: "Actionable insights from your business data.",
            icon: <FaChartLine className="text-secondary text-4xl" />,
            color: "from-secondary/10 to-secondary/5"
        },
        {
            title: "Cloud Services",
            description: "Reliable cloud infrastructure and deployment.",
            icon: <FaCloud className="text-accent text-4xl" />,
            color: "from-accent/10 to-accent/5"
        }
    ];

    return (
        <section id="services" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
            {/* Background elements with scroll effects */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute inset-0 bg-gradient-to-br from-white to-light/30 pointer-events-none z-10"
            />

            <motion.div
                style={{ y: y2 }}
                className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2015/04/21/12/16/mac-733178_1280.jpg')] opacity-10 pointer-events-none z-5"
            />

            <div className="max-w-7xl mx-auto relative z-40">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 text-sm font-sans rounded-full bg-primary/10 text-primary mb-6"
                    >
                        Our Services
                    </motion.span>

                    <motion.h2
                        whileInView={{ y: [30, 0], opacity: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-6"
                    >
                        Solutions <span className="text-primary">Tailored</span> For You
                    </motion.h2>

                    <motion.p
                        whileInView={{ y: [20, 0], opacity: [0, 1] }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-3xl mx-auto text-lg text-dark/70 font-sans"
                    >
                        We deliver comprehensive digital solutions designed to drive your business forward.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: index * 0.1,
                                    duration: 0.6,
                                    type: "spring",
                                    stiffness: 100
                                }
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -10,
                                transition: {
                                    type: "spring",
                                    stiffness: 200
                                }
                            }}
                            className={`bg-gradient-to-br ${service.color} p-8 rounded-xl shadow-lg border border-light/10`}
                        >
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-heading font-semibold text-dark mb-3">{service.title}</h3>
                            <p className="text-dark/70 font-sans mb-6">{service.description}</p>
                            <motion.button
                                whileHover={{ x: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-primary font-sans font-medium flex items-center gap-2"
                            >
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
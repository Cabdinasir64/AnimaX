import { motion } from "framer-motion";
import { FaLightbulb, FaRocket, FaUsers, FaChartLine, FaHandshake, FaCode, FaPalette } from "react-icons/fa";

const About = () => {
    const viewportSettings = {
        once: true,
        amount: 0.8,
        margin: "0px"
    };

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-x-hidden"
        >
            <div className="max-w-7xl mx-auto">
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        whileInView={{ y: [-20, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 text-sm font-sans rounded-full bg-primary/10 text-primary mb-6"
                    >
                        Our Story
                    </motion.span>

                    <motion.h2
                        whileInView={{ y: [30, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-5xl font-heading font-bold text-dark mb-6"
                    >
                        Crafting Digital <span className="text-primary">Excellence</span>
                    </motion.h2>

                    <motion.p
                        whileInView={{ y: [20, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="max-w-3xl mx-auto text-lg text-dark/70 font-sans"
                    >
                        We transform ideas into impactful digital experiences through
                        innovative design and cutting-edge development.
                    </motion.p>
                </motion.div>

                {/* Mission Section */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-28"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8 }}
                        className="relative h-96 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10"
                    >
                        <img src="https://cdn.pixabay.com/photo/2015/01/08/18/23/white-board-593309_1280.jpg" alt="Our Vison" loading="lazy" className="w-full h-full object-cover" />
                    </motion.div>

                    <motion.div
                        whileInView={{ x: [100, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-heading font-bold text-dark">
                            Our Mission
                        </h3>
                        <p className="text-dark/80 font-sans">
                            To empower businesses through digital innovation that drives
                            measurable results and creates meaningful connections with their
                            audience.
                        </p>
                        <p className="text-dark/80 font-sans">
                            We combine technical expertise with creative thinking to solve
                            complex challenges with elegant, user-centered solutions.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    className="mb-28"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            {
                                value: "200+",
                                label: "Projects",
                                icon: <FaRocket className="text-primary" />,
                            },
                            {
                                value: "100%",
                                label: "Client Satisfaction",
                                icon: <FaLightbulb className="text-accent" />,
                            },
                            {
                                value: "25+",
                                label: "Team Members",
                                icon: <FaUsers className="text-secondary" />,
                            },
                            {
                                value: "5+",
                                label: "Years Experience",
                                icon: <FaChartLine className="text-primary" />,
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 100,
                                    },
                                }}
                                viewport={viewportSettings}
                                whileHover={{ y: -5 }}
                                className="bg-light p-6 rounded-xl text-center border border-light/20"
                            >
                                <div className="text-3xl mb-3">{stat.icon}</div>
                                <h3 className="text-2xl font-heading font-bold text-dark mb-1">
                                    {stat.value}
                                </h3>
                                <p className="text-dark/60 font-sans">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Values Section */}
                <motion.div
                    className="mb-28"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h3
                        whileInView={{ y: [30, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-heading font-bold text-dark mb-16 text-center"
                    >
                        Our Core Values
                    </motion.h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Collaboration",
                                description:
                                    "We believe in working closely with our clients to achieve shared success.",
                                icon: <FaHandshake className="text-primary text-4xl mb-4" />,
                            },
                            {
                                title: "Technical Excellence",
                                description:
                                    "Our solutions are built on robust, scalable technologies that stand the test of time.",
                                icon: <FaCode className="text-secondary text-4xl mb-4" />,
                            },
                            {
                                title: "Design Innovation",
                                description:
                                    "We create interfaces that delight users while driving business objectives.",
                                icon: <FaPalette className="text-accent text-4xl mb-4" />,
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: index * 0.15,
                                        duration: 0.6,
                                        type: "spring",
                                        stiffness: 100,
                                    },
                                }}
                                viewport={viewportSettings}
                                whileHover={{
                                    y: -10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                    },
                                }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-light/20"
                            >
                                {value.icon}
                                <h3 className="text-xl font-heading font-semibold text-dark mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-dark/70 font-sans">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h3
                        whileInView={{ y: [30, 0], opacity: [0, 1] }}
                        viewport={viewportSettings}
                        transition={{ duration: 0.6 }}
                        className="text-3xl font-heading font-bold text-dark mb-16 text-center"
                    >
                        Meet The Team
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { name: "Alex Johnson", role: "CEO & Founder", image: "👨‍💼" },
                            { name: "Sarah Williams", role: "Design Director", image: "👩‍🎨" },
                            { name: "Michael Chen", role: "Lead Developer", image: "👨‍💻" },
                            { name: "Emily Davis", role: "Project Manager", image: "👩‍💼" },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: index * 0.1,
                                        duration: 0.5,
                                        type: "spring",
                                    },
                                }}
                                viewport={viewportSettings}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-md text-center border border-light/20"
                            >
                                <div className="text-6xl mb-4">{member.image}</div>
                                <h4 className="text-xl font-heading font-bold text-dark mb-1">
                                    {member.name}
                                </h4>
                                <p className="text-dark/60 font-sans">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
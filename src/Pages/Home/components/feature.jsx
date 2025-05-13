import { motion } from "framer-motion";
import { FiZap, FiLayers, FiCode, FiBarChart2, FiLock, FiGlobe } from "react-icons/fi";

const Features = () => {
  const features = [
    {
      icon: <FiZap className="text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for performance with instant load times and smooth interactions.",
      delay: 0.1
    },
    {
      icon: <FiLayers className="text-secondary" />,
      title: "Modular Design",
      description: "Component-based architecture for easy customization and scalability.",
      delay: 0.2
    },
    {
      icon: <FiCode className="text-accent" />,
      title: "Clean Code",
      description: "Semantic, well-structured code that's easy to maintain and extend.",
      delay: 0.3
    },
    {
      icon: <FiBarChart2 className="text-primary" />,
      title: "Analytics Ready",
      description: "Built-in integration with major analytics platforms for data-driven decisions.",
      delay: 0.4
    },
    {
      icon: <FiLock className="text-secondary" />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your data and users.",
      delay: 0.5
    },
    {
      icon: <FiGlobe className="text-accent" />,
      title: "Global CDN",
      description: "Content delivered instantly worldwide through our distributed network.",
      delay: 0.6
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6"
          >
            Why Choose Us
          </motion.span>
          
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Built for <span className="text-primary">Modern</span> Needs
          </motion.h2>
          
          <motion.p
            whileInView={{ opacity: [0, 1] }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Experience the perfect blend of performance, aesthetics, and functionality.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                transition: {
                  delay: feature.delay,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }
              }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { type: "spring", stiffness: 300 }
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all"
            >
              <motion.div
                whileInView={{ scale: [0.8, 1], rotate: [-15, 0] }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay + 0.1, type: "spring" }}
                className="flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6 text-2xl"
              >
                {feature.icon}
              </motion.div>
              
              <motion.h3
                whileInView={{ x: [-20, 0], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay + 0.2 }}
                className="text-xl font-bold text-gray-900 mb-3"
              >
                {feature.title}
              </motion.h3>
              
              <motion.p
                whileInView={{ opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay + 0.3 }}
                className="text-gray-600"
              >
                {feature.description}
              </motion.p>
              
              <motion.div
                whileInView={{ width: [0, 80], opacity: [0, 1] }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay + 0.5, duration: 0.5 }}
                className="h-px bg-gradient-to-r from-primary to-transparent mt-6 w-10"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:shadow-primary/30 transition-all"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
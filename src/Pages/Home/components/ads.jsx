import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowRight, FiTwitter, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AdsSection = () => {
  const adRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP animations for the ad section
    gsap.from(textRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    });

    // Floating animation for the main ad card
    gsap.to(adRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  const ads = [
    {
      title: "Lightning Fast",
      description: "60fps animations that won't slow you down",
      icon: "⚡"
    },
    {
      title: "Pixel Perfect",
      description: "Crisp visuals at any screen size",
      icon: "🎯"
    },
    {
      title: "Developer Friendly",
      description: "Clean API with TypeScript support",
      icon: "👨‍💻"
    }
  ];

  return (
    <>
      {/* Ads Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1], 
                y: [0, -100],
                x: [0, i % 2 === 0 ? 50 : -50]
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              className="absolute text-6xl opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            >
              {["⚡", "🎯", "👨‍💻"][i % 3]}
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div ref={textRef} className="text-center mb-16">
            <motion.span
              whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary mb-6"
            >
              Why AnimaX?
            </motion.span>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Transform Your <span className="text-primary">Digital Presence</span>
            </h2>
            
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Join thousands of developers creating stunning animations with our platform
            </p>
          </div>

          {/* Main Ad Card */}
          <motion.div
            ref={adRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-gray-100 mb-16 max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Ready to <span className="text-primary">elevate</span> your animations?
                </h3>
                <p className="text-gray-600 mb-6">
                  AnimaX provides the tools you need to create professional-grade animations with minimal code. Perfect for React, Next.js, and all modern frameworks.
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-primary text-white font-medium rounded-lg flex items-center gap-2"
                >
                  Get Started <FiArrowRight />
                </motion.button>
              </div>
              <div className="hidden md:block flex-1">
                <div className="relative h-64 w-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl overflow-hidden">
                  {/* Animated mockup */}
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    className="absolute inset-4 bg-white rounded shadow-sm border border-gray-200 flex items-center justify-center"
                  >
                    <div className="text-center p-4">
                      <div className="text-4xl mb-4">🚀</div>
                      <p className="text-sm text-gray-500">Your amazing animation here</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ads.map((ad, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all"
              >
                <div className="text-4xl mb-4">{ad.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{ad.title}</h3>
                <p className="text-gray-600">{ad.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">AnimaX</h3>
              <p className="text-gray-400 mb-6">
                The modern animation toolkit for React developers.
              </p>
              <div className="flex gap-4">
                {[FiTwitter, FiGithub, FiLinkedin, FiMail].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "Examples", "Updates"]
              },
              {
                title: "Resources",
                links: ["Documentation", "Tutorials", "Blog", "Community"]
              },
              {
                title: "Company",
                links: ["About", "Careers", "Contact", "Legal"]
              }
            ].map((column, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-6">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                    >
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400"
          >
            <p>© {new Date().getFullYear()} AnimaX. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default AdsSection;
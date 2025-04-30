import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import HtmlLogo from "../assets/HtmlLogo.png";
import CssLogo from "../assets/CssLogo.png";
import ReactLogo from "../assets/ReactLogo.png";
import GsapLogo from "../assets/GsapLogo.png";
import AnimeJsLogo from "../assets/AnimeJsLogo.png";
import BubbleLogo from "../assets/BubbleLogo.png";
import TailwindCssLogo from "../assets/TailwindCssLogo.png";
import JavaScriptLogo from "../assets/JavaScriptLogo.png";

const Experience = () => {
  const [totalWidth, setTotalWidth] = useState(0);
  const containerRef = useRef();
  const itemRef = useRef();

  const technologies = [
    { name: "AWS", image: HtmlLogo },
    { name: "CSS3", image: CssLogo },
    { name: "React.js", image: TailwindCssLogo },
    { name: "HTML", image: ReactLogo },
    { name: "Java", image: JavaScriptLogo },
    { name: "JavaScript", image: GsapLogo },
    { name: "Node.js", image: AnimeJsLogo },
    { name: "Python", image: BubbleLogo },
  ];

  const duplicatedTechnologies = [...technologies, ...technologies];

  useEffect(() => {
    if (containerRef.current && itemRef.current) {
      const itemWidth = itemRef.current.offsetWidth;
      const gap = 64;
      const total = (itemWidth + gap) * technologies.length;
      setTotalWidth(total);
    }

    // Update width on resize
    const handleResize = () => {
      if (containerRef.current && itemRef.current) {
        const itemWidth = itemRef.current.offsetWidth;
        const gap = window.innerWidth < 640 ? 16 : 64;
        const total = (itemWidth + gap) * technologies.length;
        setTotalWidth(total);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 sm:py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-6 sm:space-y-10" ref={containerRef}>
          {/* Top row */}
          <motion.div
            className="flex gap-4 sm:gap-16"
            animate={{ x: [0, -totalWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 20, // Faster speed
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                ref={index === 0 ? itemRef : null}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-[#ffffff] p-3 sm:p-4 rounded-lg border-4 border-gray-700 hover:border-[#00bcd4] transition-colors duration-300">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom row, opposite direction */}
          <motion.div
            className="flex gap-4 sm:gap-16"
            animate={{ x: [-totalWidth, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 20, // Faster speed
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-[#ffffff] p-3 sm:p-4 rounded-lg border-4 border-gray-700 hover:border-[#00bcd4] transition-colors duration-300">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
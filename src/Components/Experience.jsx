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
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef();

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
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCE
        </motion.h2>

        <div className="space-y-10" ref={containerRef}>
          {/* Top row */}
          <motion.div
            className="flex gap-16"
            animate={{ x: [0, -containerWidth] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-[#ffffff] p-4 rounded-lg border-4 border-gray-700 hover:border-[#00bcd4] transition-colors duration-300">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="w-16 h-16"
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bottom row, opposite direction */}
          <motion.div
            className="flex gap-16"
            animate={{ x: [-containerWidth, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 55,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center"
              >
                <div className="bg-[#ffffff] p-4 rounded-lg border-4 border-gray-700 hover:border-[#00bcd4] transition-colors duration-300">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="w-16 h-16"
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

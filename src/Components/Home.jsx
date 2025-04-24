import Navbar from "./NavBar";
import Button from "./Button";
import Avatar from "../assets/Avatar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};
const Home = () => {
  const scrollRef = useRef(null);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);
  return (
    <>
      <div className="relative z-50">
        <Navbar />
      </div>
      <div ref={scrollRef} className="relative overflow-hidden">
        <motion.h3
          style={{ y }}
          className="font-poppins absolute text-[14.5vw] font-black text-[#00bcd4] opacity-10 top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] pointer-events-none select-none z-[1] uppercase"
        >
          Developer
        </motion.h3>

        <div className="HomeLayout">
          <div className="lg:p-[50px] md:p-[50px] relative z-[2] text-left max-w-[800px] py-[250px] px-[50px]">
            <h2 className="text-[4vw] font-[Josefin+Sans] font-semibold leading-[1.2] text-[rgb(163,163,163)] my-4">
              I'm a
            </h2>
            <motion.h1
              className="text-[7vw] font-[Josefin+Sans] font-extrabold leading-[1.2] text-white my-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              FRONT END
              <br />
              REACT
              <br />
              DEVELOPER<span className="text-[#39bdf8]">.</span>
            </motion.h1>
            <Button text="My Recent Projects"></Button>
          </div>
          <motion.div className="absolute right-5 top-[70%] transform translate-y-[-50%] w-[350px] h-[350px] z-0 pointer-events-none">
            <div className="border-t-8 border-b-8 border-l-8 border-[#00bcd4] lg:h-[300px] lg:w-[350px] md:h-[300px] md:w-[350px] hidden md:block"></div>
            <motion.img
              src={Avatar}
              alt="Profile"
              className="relative lg:top-[-53%] lg:left-[55%] md:left-[55%] md:top-[-53%] top-[10%] left-[75%] transform -translate-x-1/2 -translate-y-1/2 lg:h-[500px] lg:w-[350px] md:h-[500px] md:w-[350px] h-[200px] w-[150px] object-contain shadow-[0_5px_15px_rgba(0,_0,_0,_0.2)] overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;

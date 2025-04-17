import Navbar from "./NavBar";
import Button from "./Button";
import Avatar from "../assets/Avatar.png";
import { motion } from "framer-motion";

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
  return (
    <>
      <Navbar />
      <h3 className="HomeBgText">Developer</h3>

      <div className="HomeLayout">
        <div className="homeContent">
          <h2>I'm a</h2>
          <motion.h1
            className="mainTitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            FRONT END
            <br />
            REACT
            <br />
            DEVELOPER<span className="dot">.</span>
          </motion.h1>
          <Button text="My Recent Projects" className="ProjectsButton"></Button>
        </div>
        <motion.div className="ImageContainer">
          <div className="BorederLines"></div>
          <motion.img
            src={Avatar}
            alt="Profile"
            className="homeImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Home;

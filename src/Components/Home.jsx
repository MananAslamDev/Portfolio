import Navbar from "./NavBar";
import Button from "./Button";
import Avatar from '../assets/Avatar.png'
const Home = () => {
  return (
    <>
      <Navbar />
      <h3 className="HomeBgText">Developer</h3>
      <div className="HomeLayout">
        <div className="homeContent">
          <h2>I'm a</h2>
          <h1 className="mainTitle">
            FRONT END
            <br />
            REACT
            <br />
            DEVELOPER<span className="dot">.</span>
          </h1>
          <Button text="My Recent Projects" className="ProjectsButton"></Button>
        </div>
        <div className="ImageContainer">
          <div className="BorederLines"></div>
          <img
            src={Avatar}
            alt="Profile"
            className="blobImage"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

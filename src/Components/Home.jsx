import Navbar from "./NavBar";
const Home = () => {
  return (
    <>
      <Navbar />
      <h3 className="HomeBgText">Developer</h3>
      <div className="homeContent">
        <h2>I'm a</h2>
        <h1 className="mainTitle">
          FULL STACK
          <br />
          SOFTWARE
          <br />
          DEVELOPER<span className="dot">.</span>
        </h1>
      </div>
    </>
  );
};

export default Home;

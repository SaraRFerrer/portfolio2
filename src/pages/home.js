import Intro from "../components/Intro";
import Icons from "../components/Icons";
import About from "../components/About";
import Projects from "../components/Projects";

function Home() {
  return (
    <html>
      <div>
        {" "}
        <Intro />
        <Icons />
        <About />
        <Projects />
      </div>
    </html>
  );
}

export default Home;

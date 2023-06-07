import Intro from "../components/Intro";
import Icons from "../components/Icons";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <html>
      <div>
        {" "}
        <Intro />
        <Icons />
        <About />
        <Projects />
        <Contact />
      </div>
    </html>
  );
}

export default Home;

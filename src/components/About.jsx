import { Link } from "react-router-dom";
import pdf from "../media/pdf.png";
import styles from "../Styles/about.module.css";

function About() {
  return (
    <div>
      <div>
        <h2 className={styles.h2}>About Me</h2>
      </div>
      <div className={styles.about}>
        <p>
          My name is Sara and I am a 24 year old newly graduated Front-End
          Developer. I am very interested in how UI/UX - design meets Front-End.
          I also have a degree in Marketing with a major in digital marketing.
          Trough my studies I have created a handful of projects from start to
          finish.{" "}
        </p>
        <Link to="/resume">
          <img src={pdf} alt="pdf icon" className={styles.pdf} /> Check out my
          resume
        </Link>
      </div>
    </div>
  );
}

export default About;

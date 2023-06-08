import linkedin from "../media/linkedin.png";
import email from "../media/email.png";
import styles from "../Styles/about.module.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2 className={styles.h2}>Contact me</h2>
      <div className={styles.contact}>
        <Link to="https://www.linkedin.com/in/sara-ring-ferrer-379690224/">
          <img src={linkedin} alt="linkedin icon" />
        </Link>
        <img src={email} alt="email icon" />
        sararferrer@hotmail.com
      </div>
    </div>
  );
}

export default Contact;

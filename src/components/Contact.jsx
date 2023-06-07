import linkedin from "../media/linkedin.png";
import email from "../media/email.png";
import styles from "../Styles/about.module.css";

function Contact() {
  return (
    <div>
      <h2 className={styles.h2}>Contact me</h2>
      <div className={styles.contact}>
        <img src={linkedin} alt="linkedin icon" />
        <img src={email} alt="email icon" />
        sararferrer@hotmail.com
      </div>
    </div>
  );
}

export default Contact;

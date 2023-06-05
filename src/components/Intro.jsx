import avatar from "../media/avatar.jpg";
import styles from "../Styles/intro.module.css";

function Intro() {
  return (
    <div className={styles.introContainer}>
      <div className={styles.image}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.yellowText}>
          <p>
            Hello my Name is Sara Ferrer and I am a Front-End Developer with
            focus on where UI/UX-design meets Front-End
          </p>
        </div>
        <div className={styles.infoText}>
          <p>
            I am 24 years old and just graduated from Noroff School og
            Technology with a major in Front-End Development. Prior to this I
            also have a bachelors degree in marketing with a major in digital
            marketing. I am currently based in Oslo, Norway.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;

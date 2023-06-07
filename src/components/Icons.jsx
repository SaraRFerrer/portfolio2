import js from "../media/js.png";
import browser from "../media/browser.png";
import sass from "../media/sass.png";
import react from "../media/react.png";
import github from "../media/github.png";
import ps from "../media/photoshop.png";
import lr from "../media/lightroom.png";
import xd from "../media/xd.png";
import figma from "../media/figma.png";
import bootstrap from "../media/bootstrap.png";
import styles from "../Styles/icons.module.css";

function Icons() {
  return (
    <div>
      <div>
        <h2 className={styles.h2}>Programs I use</h2>
      </div>
      <div className={styles.icons}>
        <img src={js} alt="javascript icon" />
        <img src={browser} alt="html and css icon" />
        <img src={sass} alt="sass icon" />
        <img src={react} alt="react icon" />
        <img src={bootstrap} alt="bootstrap icon" />
        <img src={github} alt="github icon" />
        <img src={ps} alt="photoshop icon" />
        <img src={lr} alt="lightroom icon" />
        <img src={xd} alt="adobe xd icon" />
        <img src={figma} alt="figma icon" />
      </div>
    </div>
  );
}

export default Icons;

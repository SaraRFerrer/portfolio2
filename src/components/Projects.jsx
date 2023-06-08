import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import semester from "../media/semesterproject.png";
import jsCa from "../media/jsCa.png";
import exam from "../media/exam.png";
import js from "../media/js.png";
import browser from "../media/browser.png";
import styles from "../Styles/projects.module.css";
import github from "../media/github.png";
import netlify from "../media/netlify.png";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <html>
      <div>
        <div>
          <h2 className={styles.h2}>My Projects</h2>
        </div>
        <Container className={styles.cardContainer}>
          <Row>
            <Col sm={4}>
              <Card className={styles.card}>
                <div>
                  <img src={semester} alt="" className={styles.project} />
                </div>
                <h3>Online auction site</h3>
                <div>
                  <p>
                    This is my second semester project at Noroff. We were given
                    a brief to create an online auction site using a provided
                    API.
                  </p>
                </div>
                <div className={styles.icon}>
                  <h4>Made with:</h4>
                  <h4>View On:</h4>
                </div>
                <div className={styles.icon}>
                  <img src={js} alt="javascript icon" />
                  <img src={browser} alt="html and css icon" />
                  <Link to="https://github.com/SaraRFerrer/Semester_Project_2">
                    <img src={github} alt="github icon" />
                  </Link>
                  <Link to="https://resplendent-puffpuff-10b198.netlify.app/">
                    <img src={netlify} alt="netlify" />{" "}
                  </Link>
                </div>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className={styles.card}>
                <div>
                  <img src={jsCa} alt="" className={styles.project} />
                </div>
                <h3>Online auction site</h3>
                <div>
                  <p>
                    This is the first project I built using React. We were
                    tasked to build an easy e-commerce website with an
                    implemented cart function.
                  </p>
                </div>
                <div className={styles.icon}>
                  <h4>Made with:</h4>
                  <h4>View On:</h4>
                </div>
                <div className={styles.icon}>
                  <img src={js} alt="javascript icon" />
                  <img src={browser} alt="html and css icon" />

                  <Link to="https://github.com/SaraRFerrer/js_frameworks_ca">
                    <img src={github} alt="github icon" />
                  </Link>
                  <Link to="https://beautiful-torrone-451d81.netlify.app">
                    <img src={netlify} alt="netlify" />{" "}
                  </Link>
                </div>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className={styles.card}>
                <div>
                  <img src={exam} alt="" className={styles.project} />
                </div>
                <h3>Online auction site</h3>
                <div>
                  <p>
                    For my last exam I built a accommodation website using
                    React. The site offers different features and is the project
                    that best shows what I can do.
                  </p>
                </div>
                <div className={styles.icon}>
                  <h4>Made with:</h4>
                  <h4>View On:</h4>
                </div>
                <div className={styles.icon}>
                  <img src={js} alt="javascript icon" />
                  <img src={browser} alt="html and css icon" />

                  <Link to="https://github.com/SaraRFerrer//Project-Exam-2">
                    <img src={github} alt="github icon" />
                  </Link>
                  <Link to="https://eloquent-gecko-1f29be.netlify.app">
                    <img src={netlify} alt="netlify" />{" "}
                  </Link>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </html>
  );
}

export default Projects;

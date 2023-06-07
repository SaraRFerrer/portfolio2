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

                  <img src={github} alt="github icon" />
                  <img src={netlify} alt="netlify" />
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

                  <img src={github} alt="github icon" />
                  <img src={netlify} alt="netlify" />
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

                  <img src={github} alt="github icon" />
                  <img src={netlify} alt="netlify" />
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

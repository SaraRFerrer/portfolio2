import styles from "../Styles/resume.module.css";
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
import netlify from "../media/netlify.png";
import jest from "../media/jest.png";
import wordpress from "../media/wordpress.png";
import xampp from "../media/xampp.png";
import cypress from "../media/cypress.svg";

function Resume() {
  return (
    <html>
      <div>
        <div>
          <h1>My Resume</h1>
        </div>
        <div>
          <h2 className={styles.h2}>Introduction</h2>
          <p>
            I am currently finishing my last semester at Noroff School of
            Technology and Digital Media with a major in Front-end Development.
            I also have a bachelor’s degree in markeEng from Bi Norwegian
            Business School with a major in digital markeEng. Other than that, I
            am a creaEve and posiEve person, with big interests in fashion,
            animals, and food. I have three years’ experience in sales and
            customer service, and my last job was with digital markeEng with a
            focus on social media.
          </p>
        </div>
        <div>
          <h2 className={styles.h2}>Work Experience</h2>
          <div>
            <h3 className={styles.h3}>Social Media Manager</h3>
            <p>
              Rock Denim – 2021-2022 At Rock Denim I worked as their Social
              Media manager, with a focus on Instagram and adverEsing. Here I
              oversaw running their Instagram-profile and created content for
              the profile as well as creaEng collaboraEons with Influencerers. I
              did this by managing shoots, publishing, and all other aspects of
              the digital markeEng. I had big responsibiliEes and enjoyed it
              very much.
            </p>
            <h3 className={styles.h3}>Sales Advisor</h3>
            <p>
              Cos – May 2019 – 2021 At COS I worked part-1me with a 20% posi1on
              as a sales advisor, working with sale and costumer service. I
              worked in a big team and executed a lot of different tasks.
            </p>
            <h3 className={styles.h3}>Store Worker</h3>
            <p>
              Norske Bunader – 2017 – 18 At Norske Bunader I worked in constumer
              scervice and costumer rela1ons where I was working close with
              costumers usually in forms of mee1ngs.
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>Education</h2>
          </div>
          <div>
            <h3 className={styles.h3}>
              Noroff School of Technology and Digital Media
            </h3>
            <p>Front-End development</p>
            <p>
              Currently am in my last semester at Noroff majoring in Front-End
              Development. This is a technology educaEon where visual design
              meets coding, web design and UX design. Here I am learning both
              technical and visual competence.
            </p>
            <h3 className={styles.h3}>BI Norwegian Business School</h3>
            <p>Bachelor - Marketing</p>
            <p>
              In the Fall of 2021, I graduated from BI with a bachelor’s degree
              in marke1ng with a major in digital marke1ng. This degree has
              given me knowledge business economics, communica1on, sta1s1cs,
              strategy, business development, consumer behavior, business
              marke1ng, among other things.
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>Certifications</h2>
          </div>
          <div>
            <h3 className={styles.h3}>Google Analytics</h3>
            <p>
              I completed a cerEficaEon in Google AnalyEcs as a part of my
              educaEon at BI Norwegian Business School. In my major I learned
              how to create and use different adverEsements through Google
              AnalyEcs.
            </p>
            <h3 className={styles.h3}>Facebook Blueprint</h3>
            <p>
              I completed a cerEficaEon in Facebook Blueprint as a part of my
              educaEon at BI Norwegian Business School. I created ads through
              Facebook and therefore completed this cerEficaEon.
            </p>
            <h3 className={styles.h3}>SAS JMP</h3>
            <p>
              I have uElized SAS JMP to complete analysis mulEple Emes both in
              my Bachelor’s thesis, but also throughout my educaton at BI.
            </p>
          </div>
          <div>
            <h2 className={styles.h2}>Other Information</h2>
          </div>
          <h3 className={styles.h3}>Coding Languages</h3>
          <div className={styles.icons}>
            <img src={js} alt="javascript icon" />
            <img src={browser} alt="html and css icon" />
            <img src={sass} alt="sass icon" />
            <img src={react} alt="react icon" />
            <img src={bootstrap} alt="bootstrap icon" />
          </div>
          <p>
            In my educaEon as a Front-End Developer, I have learned to use the
            coding languages menEoned above. I also use WordPress, Local Hosts
            as well as Server Hosts, API’s and more...
          </p>
          <h3 className={styles.h3}>Adobe</h3>
          <div className={styles.icons}>
            <img src={ps} alt="photoshop icon" />
            <img src={lr} alt="lightroom icon" />
            <img src={xd} alt="adobe xd icon" />
            <img src={figma} alt="figma icon" />
          </div>
          <h3 className={styles.h3}>Other</h3>
          <div className={styles.icons}>
            <img src={github} alt="github icon" />
            <img src={netlify} alt="netlify icon" />
            <img src={jest} alt="jest icon" />
            <img src={wordpress} alt="wordpress icon" />
            <img src={xampp} alt="xampp icon" />
            <img src={cypress} alt="cypress icon" />
          </div>

          <p>
            During my educaton at Noroff I am using the programs menEoned above
            a lot. I am also using these a lot in my current job. These are day
            to day programs that I use. I also use other Adobe programs and I
            would gladly take iniEaEve to raise my competence within these.
          </p>
        </div>
        <div>
          <h2 className={styles.h2}>Languages</h2>
        </div>
        <p>Norwegian: Native Language</p>
        <p>English: Second language. Fluent both orally and written</p>
        <p>Swedish: Fluent both orally and written</p>
        <p>Spanish: Second nationality. Fluent both orally and written</p>
      </div>
    </html>
  );
}

export default Resume;

import Card from "react-bootstrap/Card";
import semester from "../media/semesterproject.png";
import js from "../media/js.png";
import browser from "../media/browser.png";

function Projects() {
  return (
    <div>
      <div>
        <h2>My Projects</h2>
      </div>
      <Card>
        <div>
          <img src={semester} alt="" />
        </div>
        <h3>Online auction site</h3>
        <div>
          <p>
            This is my second semester project at Noroff. We were given a brief
            to create an online auction site using a provided API.
          </p>
        </div>
        <div>
          <img src={js} alt="javascript icon" />
          <img src={browser} alt="html and css icon" />
        </div>
      </Card>
    </div>
  );
}

export default Projects;

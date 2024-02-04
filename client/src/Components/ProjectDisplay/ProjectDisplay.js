import "./ProjectDisplay.css";
import ProjectCrousel from "./components/ProjectCrousel";
import Projecthead from "./components/Projecthead";
import ProjectAccordian from "./components/ProjectAccordian";
import { useLocation } from "react-router-dom";

const ProjectDisplay = ({ project }) => {
  const location = useLocation();
  console.log(location.state.project);
  project = location.state.project;
  return (
    <div class="overlay">
      <div class="mainContent">
        <Projecthead {...project} />

        <ProjectCrousel {...project} />
        <ProjectAccordian {...project} />
      </div>
    </div>
  );
};

export default ProjectDisplay;

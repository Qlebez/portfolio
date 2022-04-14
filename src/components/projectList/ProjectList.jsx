import "./ProjectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl" id="prjl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of my Projects</h1>
        <h2 className="pl-desc">
        Some of these projects were done at school, 
        while others were done on my own time.
        </h2>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} title={item.title} content={item.content} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

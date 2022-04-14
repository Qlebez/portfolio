import "./skills.css"
import java from "../../img/languages/java.png"
import python from "../../img/languages/python.png"
import c from "../../img/languages/csharp.png"
import bash from "../../img/languages/bash.png"
import html from "../../img/languages/html.png"
import css from "../../img/languages/css.png"
import js from "../../img/languages/js.png"
import react from "../../img/languages/react.png"
import sql from "../../img/languages/sql.png"



const Skills = () => {
  return (
    <div className="skills" id="skills">
        <h1>List of all my different skills</h1>
        <div className="known">
          <h2>Known</h2>
          <div className="kicons">
            <img src={java} alt="" />
            <img src={python} alt="" />
            <img src={bash} alt="" />
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={sql} alt="" />
          </div>
        </div>
        <div className="learning">
          <h2>Currently learning</h2>
          <div className="licons">
            <img src={c} alt="" />
            <img src={js} alt="" />
            <img src={react} alt="" />
          </div>
        </div>





    </div>
  );
};

export default Skills;
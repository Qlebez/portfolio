import {Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import Pong from "./components/pong/Pong";
import Lowatem from "./components/lowatem/Lowatem";
import Database from "./components/databasePJ/Database";
import Management from "./components/management/Management";
import Web from "./components/web/Web";
import Vm from "./components/vm/Vm";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element= {<><About /><ProjectList /> <Skills /> <Contact /></>} />
        <Route exact path="/pong" element={<Pong/>}/>
        <Route exact path="/lowatem" element={<Lowatem/>}/>
        <Route exact path="/database" element={<Database/>}/>
        <Route exact path="/Management" element={<Management/>}/>
        <Route path="/web" element={<Web/>}/>
        <Route path="/virtualMachine" element={<Vm/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
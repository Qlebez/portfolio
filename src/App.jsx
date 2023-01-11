import {Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import ProjectList from "./components/projectList/ProjectList";
import ProjectPage from "./components/projectPage/projectPage";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";
import Skills from "./components/skills/Skills";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element= {<><About /><ProjectList /> <Skills /> <Contact /></>} />
        <Route path="/project/:id" element={<ProjectPage />}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
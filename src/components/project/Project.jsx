import { Link } from 'react-router-dom';
import './project.css';

const Project = ({title, content,link}) => {
    return (
        <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <div className='window'>
          <h1>{title}</h1>
          <p>{content}</p>
          <button> <Link to={link} target="_blank">PDF Summary</Link></button>    
        </div>
      </div>
    );
  };

export default Project
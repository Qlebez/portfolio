import React from 'react'
import './projectPage.css'

import { useParams } from 'react-router-dom'
import data from '../../data.js'


const ProjectPage = () => {
  const { id } = useParams()
  const p = data.find(p => p.link === id)
  
  return (
    <div className="project-retex">
      <h1>{p.title}</h1>
      <div className="infos">
        <div className="image-project">
          <img src={require("../../img/" + p.image) } alt="Project illustration"/>
        </div>
        <div className="desc-project">
          <h4>Feedback from the project : </h4>
          <p>{p.description}</p>
          <h4>Specification of requirements :</h4>
          <p> {p.cahierDesCharges}</p>
          <h4>Delivered result :</h4>
          <p>{p.resultatLivre}</p>
          <h4>Methods / Tools used :</h4>
          <p>{p.methodeOutilsUtilise}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage

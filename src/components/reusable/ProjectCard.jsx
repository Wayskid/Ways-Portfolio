import { useContext } from "react"
import WaysPortfolioContext from "../../context/WaysPortContext"
import Button from "./Button"

export default function ProjectCard({project}) {

  const {handleProjectDetShown} = useContext(WaysPortfolioContext)

  return (
    <li className='projectCard' onClick={()=>handleProjectDetShown(project)}>
      <div className="siteImage">
         <img src={project.siteImgs[0]} alt=""/>
      </div>
      <div className="cardAnimation">
        <div className="topCard">
          <h2>{project.title}</h2>
          {project.lang}
        </div>
        <Button version="noBackgroundBtn bottomCard" >Learn More</Button>
      </div>
    </li>
  )
}

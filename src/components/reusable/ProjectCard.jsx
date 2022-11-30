import Button from "./Button"

export default function ProjectCard({project}) {
  return (
    <li className='projectCard'>
      <div className="siteImage">
         <img src={project.siteImg}/>
      </div>
      <div className="cardAnimation">
        <div className="topCard">
          <h2>{project.title}</h2>
          {project.lang}
        </div>
        <Button version="noBackgroundBtn bottomCard" link={project.github} target="_blank">Learn More</Button>
      </div>
    </li>
  )
}

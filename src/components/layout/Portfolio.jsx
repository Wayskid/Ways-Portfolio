import { useContext, useState } from "react"
import WaysPortfolioContext from "../../context/WaysPortContext"
import waysChat from "../../assets/site images/waysChat.png"
import noteApp from "../../assets/site images/noteApp.png"
import feedbackApp from "../../assets/site images/feedbackApp.png"
import devJobs from "../../assets/site images/devJobs.png"
import calc from "../../assets/site images/calc.png"
import memeGen from "../../assets/site images/memeGen.png"
import todoApp from "../../assets/site images/todoApp.png"
import flipCard from "../../assets/site images/flipCard.png"
import rpsGame from "../../assets/site images/rpsGame.png"
import ProjectCard from "../reusable/ProjectCard"

export default function Portfolio() {

    const {portfolioRef, portfolioInView} = useContext(WaysPortfolioContext)

    const [ projects, setProjects ] = useState([
      {
        id: 1,
        title: "Messanger App",
        siteImg: waysChat,
        description: "",
        github: "https://github.com/Wayskid/ways-chat-app",
        visitSite: "https://ways-chat-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 2,
        title: "Notes App",
        siteImg: noteApp,
        description: "",
        github: "https://github.com/Wayskid/ways-notes-app",
        visitSite: "https://ways-notes-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 3,
        title: "Feedback App",
        siteImg: feedbackApp,
        description: "",
        github: "https://github.com/Wayskid/ways-feedback-app",
        visitSite: "https://ways-feedback-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 4,
        title: "DevJobs Website",
        siteImg: devJobs,
        description: "",
        github: "https://github.com/Wayskid/ways-devjobs-app",
        visitSite: "https://ways-devjobs-site.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 5,
        title: "Simple Calculator",
        siteImg: calc,
        description: "",
        github: "https://github.com/Wayskid/ways-react-calculator-app",
        visitSite: "https://ways-simple-calculator.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 6,
        title: "Meme Generator",
        siteImg: memeGen,
        description: "",
        github: "https://github.com/Wayskid/ways-react-meme-generator",
        visitSite: "https://ways-meme-generator.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 7,
        title: "ToDo App",
        siteImg: todoApp,
        description: "",
        github: "https://github.com/Wayskid/ways-advanced-todolist",
        visitSite: "https://ways-todo-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 8,
        title: "Flip Card Memory Game",
        siteImg: flipCard,
        description: "",
        github: "https://github.com/Wayskid/Ways-Flip-Card-Memory-Game",
        visitSite: "https://waysflipcardgame.netlify.app/",
        lang: "HTML / CSS / JavaScript"
      },
      {
        id: 9,
        title: "Rock-Paper-Scissors Game", 
        siteImg: rpsGame,
        description: "",
        github: "https://github.com/Wayskid/Ways-Rock-Paper-Scissors",
        visitSite: "https://ways-rock-paper-scissors.netlify.app/",
        lang: "HTML / CSS / JavaScript"
      },
    ])

  return (
    <div id="portfolio" ref={portfolioRef}>
      <div className={`secHeader ${portfolioInView && "showSecHeaderAfter"}`}>
        <p>Here's my recent</p>
        <p>Projects</p>
      </div>
      <ul className="projectsGrid">
        {
          projects.map(project=>{
            return <ProjectCard 
              key={project.id}
              project= {project}
              projectImg= {project.siteImg}
            />
          })
        }
      </ul>
    </div>
  )
}

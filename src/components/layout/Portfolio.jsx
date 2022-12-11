import { useContext, useState } from "react"
import WaysPortfolioContext from "../../context/WaysPortContext"
import waysChat from "../../assets/project images/waysChat/waysChat.png"
import chat from "../../assets/project images/waysChat/chat.png"
import chatAddContact from "../../assets/project images/waysChat/chatAddContact.png"
import noteApp from "../../assets/project images/noteApp/noteApp.png"
import noteAppMenu from "../../assets/project images/noteApp/noteAppMenu.png"
import noteAppView from "../../assets/project images/noteApp/noteAppView.png"
import feedbackApp from "../../assets/project images/feedbackApp/feedbackApp.png"
import fbEdit from "../../assets/project images/feedbackApp/fbEdit.png"
import devJobs from "../../assets/project images/devjobs/devJobs.png"
import devjobDarkMode from "../../assets/project images/devjobs/devjobDarkMode.png"
import devjobLightMode from "../../assets/project images/devjobs/devjobLightMode.png"
import devjobSearch from "../../assets/project images/devjobs/devjobSearch.png"
import calc from "../../assets/project images/calculatorApp/calc.png"
import calcDarkMode from "../../assets/project images/calculatorApp/calcDarkMode.png"
import calcLightMode from "../../assets/project images/calculatorApp/calcLightMode.png"
import memeGen from "../../assets/project images/memeGen/memeGen.png"
import memeGenRed from "../../assets/project images/memeGen/memeGenRed.png"
import todoApp from "../../assets/project images/todoApp/todoApp.png"
import todoEmpty from "../../assets/project images/todoApp/todoEmpty.png"
import todoFilter from "../../assets/project images/todoApp/todoFilter.png"
import todoInput from "../../assets/project images/todoApp/todoInput.png"
import flipCard from "../../assets/project images/flipCardGame/flipCard.png"
import fcDisappear from "../../assets/project images/flipCardGame/fcDisappear.png"
import flipCardRotate from "../../assets/project images/flipCardGame/flipCardRotate.png"
import rpsGame from "../../assets/project images/rpsGame/rpsGame.png"
import rpsRules from "../../assets/project images/rpsGame/rpsRules.png"
import rpsYouWon from "../../assets/project images/rpsGame/rpsYouWon.png"
import ProjectCard from "../reusable/ProjectCard"
import ProjectPopup from "./ProjectPopup"

export default function Portfolio() {

    const {portfolioRef, portfolioInView, projectDetShown} = useContext(WaysPortfolioContext)

    const [ projects ] = useState([
      {
        id: 1,
        title: "Messanger App",
        siteImgs: [
          chat,
          waysChat,
          chatAddContact
        ],
        description: "Presenting WaysChat App (WhatsApp Web clone). This was made with the aim of further improving my React and CSS skills. Can add a new contact, search chat by contact name, send messages, and delete/archive/clear chats, all front end.",
        github: "https://github.com/Wayskid/ways-chat-app",
        visitSite: "https://ways-chat-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 2,
        title: "Notes App",
        siteImgs: [
          noteApp,
          noteAppMenu,
          noteAppView
        ],
        description: "Ways Notes App with SimpleMDE as Markdown Editor, to further improve my use of React Hooks. You can create a new note, which is then filtered by the last modified, and delete the note.",
        github: "https://github.com/Wayskid/ways-notes-app",
        visitSite: "https://ways-notes-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 3,
        title: "Feedback App",
        siteImgs: [
          feedbackApp,
          fbEdit
        ],
        description: "Feedback App with a beautiful UI (experimented on the color combination and came out really well). Add a rating, type in a comment, and then submit your comment with the Ways Feedback App.",
        github: "https://github.com/Wayskid/ways-feedback-app",
        visitSite: "https://ways-feedback-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 4,
        title: "DevJobs Website",
        siteImgs: [
          devJobs,
          devjobDarkMode,
          devjobLightMode,
          devjobSearch
        ],
        description: "Developer Jobs homepage, with new pseudo job openings; job title, company and location. Use the search bar to search and filter job title, location and contract.",
        github: "https://github.com/Wayskid/ways-devjobs-app",
        visitSite: "https://ways-devjobs-site.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 5,
        title: "Simple Calculator",
        siteImgs: [
          calc,
          calcDarkMode,
          calcLightMode
        ],
        description: "Simple react calculator with light and dark mode.",
        github: "https://github.com/Wayskid/ways-react-calculator-app",
        visitSite: "https://ways-simple-calculator.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 6,
        title: "Meme Generator",
        siteImgs: [
          memeGen,
          memeGenRed
        ],
        description: "Meme Generator app to show my ability to work with an API. ",
        github: "https://github.com/Wayskid/ways-react-meme-generator",
        visitSite: "https://ways-meme-generator.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 7,
        title: "ToDo App",
        siteImgs: [
          todoApp,
          todoEmpty,
          todoFilter,
          todoInput
        ],
        description: "The famous ToDo App for begginers. Built with a beautiful UI and ability to delete, edit and filter tasks just to spice things up a bit.",
        github: "https://github.com/Wayskid/ways-advanced-todolist",
        visitSite: "https://ways-todo-app.netlify.app/",
        lang: "HTML / CSS / ReactJS"
      },
      {
        id: 8,
        title: "Flip Card Memory Game",
        siteImgs: [
          flipCard,
          fcDisappear,
          flipCardRotate
        ],
        description: "Match all the cards to win the Ways Flip Card Memory game with easy, medium and hard difficulty levels.",
        github: "https://github.com/Wayskid/Ways-Flip-Card-Memory-Game",
        visitSite: "https://waysflipcardgame.netlify.app/",
        lang: "HTML / CSS / JavaScript"
      },
      {
        id: 9,
        title: "Rock-Paper-Scissors Game", 
        siteImgs: [
          rpsGame,
          rpsRules,
          rpsYouWon
        ],
        description: "Play the Ways Rock Papper Scissors game with computer and try to win with three trials.",
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
            />
          })
        }
      {projectDetShown && <ProjectPopup />}
      </ul>
    </div>
  )
}

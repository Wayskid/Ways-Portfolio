import Button from "../reusable/Button"
import { FaArrowRight } from "react-icons/fa"
import { useContext } from "react"
import WaysPortfolioContext from "../../context/WaysPortContext"
import CV from "../../assets/RICHARD-resume.pdf"
import IconBackground from "../reusable/iconBackground/IconBackground"

export default function Home() {

  const {homeRef} = useContext(WaysPortfolioContext)

  return (
    <div id='home' ref={homeRef}>
      <div className="homeIntro">
        <h1 className="name">Irinyemi Richard</h1>
        <p className="jobDes">Front-End Developer</p>
        <div className="introBtns">
           <a href="#" className="homeDownloadBtn" >Download CV</a>
           <Button version="backgroundBtn" link="#about">View my work<FaArrowRight className="arrowRight"/></Button>
        </div>
      </div>
      <IconBackground />
    </div>
  )
}

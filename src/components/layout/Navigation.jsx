import { useContext } from "react"
import WaysPortfolioContext from "../../context/WaysPortContext"

export default function Navigation() {

  const {activeNav} = useContext(WaysPortfolioContext)

  return (
    <div className='nav'>
      <a href="#home">
        <p>Home</p>
        <div className={`navBorder ${activeNav === "#home" ? "activeNav" : ""}`}></div>
      </a>
      <a href="#about">
        <p>About</p>
        <div className={`navBorder ${activeNav === "#about" ? "activeNav" : ""}`} ></div>
      </a>
      <a href="#portfolio">
        <p>Portfolio</p>
        <div className={`navBorder ${activeNav === "#portfolio" ? "activeNav" : ""}`} ></div>
      </a>
      <a href="#contact">
        <p>Contact</p>
        <div className={`navBorder ${activeNav === "#contact" ? "activeNav" : ""}`} ></div>
      </a>
    </div>
  )
}

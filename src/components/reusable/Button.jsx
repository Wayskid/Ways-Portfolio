import { useContext } from "react"
import WaysPortfolioContext from "../../context/WaysPortContext"

export default function Button({version, children, link, target}) {

  const {activeNav, setActiveNav} = useContext(WaysPortfolioContext)

  return (
    <a href={link}  target={target} 
    onClick={()=>setActiveNav(`${link}`)}
    >
      <button className={version}>
        {children}
      </button>
    </a>
  )
}


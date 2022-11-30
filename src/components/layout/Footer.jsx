import { FiGithub } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import WaysLogo from "../../assets/logo.png";

export default function Footer() {
   return (
      <footer>
         <img src={WaysLogo} alt="logo" />
         <div className="socials">
            <a
               href="https://github.com/Wayskid"
               className="backWrapper"
               target="_blank"
            >
               <FiGithub />
            </a>
            <a
               href="https://linkedin.com/in/alabi-irinyemi-8a75a6190"
               className="backWrapper"
               target="_blank"
            >
               <GrLinkedinOption />
            </a>
            <a 
               href="https://twitter.com/irinyemialabi" 
               className="backWrapper" 
               target="_blank"
            >
               <FiTwitter />
            </a>
         </div>
         <div className="copyRight">
            IRINYEMI RICHARD <span>&copy;2022</span>
         </div>
      </footer>
   );
}

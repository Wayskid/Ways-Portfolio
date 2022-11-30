import Button from "../reusable/Button";
import MyImage from "../../assets/myImg.png";
import { RiTerminalBoxLine } from "react-icons/ri";
import { BiLayerPlus } from "react-icons/bi";
import { useContext } from "react";
import WaysPortfolioContext from "../../context/WaysPortContext";

export default function About() {

   const {
      aboutRef, 
      aboutDetails, 
      aboutDetailsInView,
      aboutSkills, 
      aboutSkillsInView,
   } = useContext(WaysPortfolioContext)


   return (
      <div id="about" ref={aboutRef}>
         <div className="aboutMe" ref={aboutDetails} >
            <div className={`secHeader ${aboutDetailsInView && "showSecHeaderAfter"}`}>
               <p>Get To Know</p>
               <p>About Me</p>
            </div>
            <div className="aboutFlex">
               <div className="imageMid">
                  <img src={MyImage} alt="Me" className="myImg" />
                  <div className="imageBack"></div>
               </div>
               <div className={`aboutDetails ${aboutDetailsInView && "showAboutDetails"}`}>
                  <div className="details">
                     <span>Hi, I'm Irinyemi Richard, a front-end developer with UI/UX skills.  </span>
                     <br/>
                     <br/>
                     <span>My mission is focused on crafting artistic, eye-catching and scalable frontend products while writing clean codes, mostly because I enjoy it!</span>
                  </div>
                  <Button version="backgroundBtn" link="#contact">Let's Talk</Button>
               </div>
            </div>
         </div>
         <div className={`skills ${aboutSkillsInView && "showSkills"}`} ref={aboutSkills}>
            <div className="skill frontEnd">
               <RiTerminalBoxLine />
               <p className="skillTitle">Frontend Development</p>
               <p className="frontEndIntro">I love writing clean codes from scratch, and enjoy bringing beautiful, artistic ideas to life in the browser</p>
               <p className="designListHeader">Languages I speak:</p>
               <ul className="skillsGrid">
                  <li>
                     <h3>HTML</h3>
                     <p>Experienced</p>
                  </li>
                  <li>
                     <h3>CSS</h3>
                     <p>Experienced</p>
                  </li>
                  <li>
                     <h3>JavaScript</h3>
                     <p>Intermediate</p>
                  </li>
                  <li>
                     <h3>React</h3>
                     <p>Intermediate</p>
                  </li>
               </ul>
            </div>
            <div className="skill designer">
               <BiLayerPlus />
               <p className="skillTitle" >Designer</p>
               <p className="designIntro">I value clean, simple and beautiful design patterns and content structure, with meaningfull intaractions.</p>
               <p className="designListHeader">Things I enjoy designing:</p>
               <ul className="skillsGrid">
                  <li>
                     <h3>Web</h3>
                     <p>Experienced</p>
                  </li>
                  <li>
                     <h3>UX</h3>
                     <p>Intermediate</p>
                  </li>
                  <li>
                     <h3>UI</h3>
                     <p>Intermediate</p>
                  </li>
                  <li>
                     <h3>Apps</h3>
                     <p>Beginner</p>
                  </li>
                  <li>
                     <h3>Logos</h3>
                     <p>Experienced</p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

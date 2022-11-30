import { createContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const WaysPortfolioContext = createContext();

export function WaysPortfolioProvider({ children }) {

   //Nav Active Status
   const [activeNav, setActiveNav] = useState("");

   //Intersection Observer
   const [homeRef, homeInView] = useInView({
      threshold: 0.3
   })

   const [aboutRef, aboutInView] = useInView({
      threshold: 0.3,
   })

   const [aboutDetails, aboutDetailsInView] = useInView({
      threshold: 0.2,
      triggerOnce: true
   })

   const [aboutSkills, aboutSkillsInView] = useInView({
      threshold: 0.2,
      triggerOnce: true
   })

   const [portfolioRef, portfolioInView] = useInView({
      threshold: 0.1
   })

   const [contactRef, contactInView] = useInView({
      threshold: 0.01
   })

   //Active Nav Bar
   useEffect(()=>{
      if (homeInView) {
         setActiveNav("#home")
      }else if (aboutInView) {
         setActiveNav("#about")
         const myImg = document.querySelector(".myImg");
         myImg.classList.add("myImgAnimation")
      }else if (portfolioInView) {
         setActiveNav("#portfolio")
      }else if (contactInView) {
         setActiveNav("#contact")
      }
   },[homeInView, aboutInView, portfolioInView, contactInView])


   return (
      <WaysPortfolioContext.Provider value={{
         setActiveNav,
         activeNav,
         homeRef,
         aboutRef,
         aboutInView,
         aboutDetails,
         aboutDetailsInView,
         portfolioRef,
         portfolioInView,
         contactRef,
         contactInView,
         aboutSkills,
         aboutSkillsInView,
      }}>
         {children}
      </WaysPortfolioContext.Provider>
   );
}

export default WaysPortfolioContext;

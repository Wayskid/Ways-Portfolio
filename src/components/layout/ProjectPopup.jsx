import React, { useContext } from 'react'
import { Carousel } from "react-responsive-carousel"
import WaysPortfolioContext from '../../context/WaysPortContext'
import Button from '../reusable/Button'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImages from '../reusable/CarouselImages'
import { HiOutlineX } from "react-icons/hi"

export default function ProjectPopup() {

  const {activeProject, handleProjectDetShown} = useContext(WaysPortfolioContext)

  return (
    <div id='projectPopup'>
      <div className="overlay" onClick={handleProjectDetShown} ></div>
      <div className="projectPopupDet">
        <Carousel 
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
        >
          {activeProject.siteImgs.map(siteImg=>{
            return <CarouselImages 
              key={siteImg.length + 1}
              siteImg={siteImg}
            />
          })}
        </Carousel>
        <div className="projectDetails">
          <div className="topDet">
            <h1 className="projectTitle">{activeProject.title}</h1>
            <h4 className="projectLang">{activeProject.lang}</h4>
          </div>
          <div className="bottomDet">
            <p className="projectDes">{activeProject.description}</p>
          </div>
        </div>
        <div className="detBtns">
          <Button version="backgroundBtn" link={activeProject.visitSite} target="_blank" >Visit Site</Button>
          <Button version="noBackgroundBtn" link={activeProject.github} target="_blank">View Code</Button>
          <button onClick={handleProjectDetShown}>
            <HiOutlineX size="40" />
          </button>
        </div>
      </div>
    </div>
  )
}

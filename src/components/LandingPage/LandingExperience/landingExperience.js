import Image from "next/image"
import Link from "next/link"
import "./landingExperience.scss"
import tempImage from "../../../../public/2206481451.avif"
import leftArrow from "../../../../public/Symbols/left-arrow.png"
import rightArrow from "../../../../public/Symbols/right-arrow.png"
import localFont from 'next/font/local'

const excalifont = localFont({
  src: '../../../../public/fonts/Excalifont-Regular.woff2',
})

const LandingExperience = () => {
  return (
    <div className="landing-experience-parent-container">
      <div className="landing-experience-title">
        <p className={excalifont.className}>Our Experiences</p>
      </div>


        <PillLeft Image={tempImage} TitleText="Yellow Cup -- GT3" DescText="In the Yellow cup our team managed to place 1st I dont know how it was 100% by some miricle sumo crashed into 6 people and ashtons car was 95% broken 10% into the race it was incredible after this race I dont think we will ever be invited to another race again its wow like wtf im suprised we didnt dnf"/>
        <PillRight Image={tempImage} TitleText="Yellow Cup -- GT3" DescText="In the Yellow cup our team managed to place 1st I dont know how it was 100% by some miricle sumo crashed into 6 people and ashtons car was 95% broken 10% into the race it was incredible after this race I dont think we will ever be invited to another race again its wow like wtf im suprised we didnt dnf"/>
        <PillLeft Image={tempImage} TitleText="Yellow Cup -- GT3" DescText="In the Yellow cup our team managed to place 1st I dont know how it was 100% by some miricle sumo crashed into 6 people and ashtons car was 95% broken 10% into the race it was incredible after this race I dont think we will ever be invited to another race again its wow like wtf im suprised we didnt dnf"/>

  </div>
  )
}

const PillLeft = (props) => {
  return (
    <div className="left-pill-container-parent">
      <div className="left-pill-container">
        <div className="left-pill-image-container">
          <Image alt="temp image" className="left-pill-image" width={345} height={330} src={props.Image}/>
        </div>
        <div className="left-pill-shape"/>
        <div className="left-pill-text-container">
          <p className="left-pill-event-title">{props.TitleText}</p>
          <p className="left-pill-event-description">{props.DescText}</p>
        </div>
        <div className="left-pill-shape"/>
        <div className="left-pill-link-image-container">
          <Link href="/experience" className="left-pill-image-link">
            <Image alt="an arrow that leads to the experiences web page" className="left-pill-image-next" width={100} height={150}src={leftArrow}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

const PillRight = (props) => {
  return (
    <div className="right-pill-container-parent">
      <div className="right-pill-container">
        <div className="right-pill-image-container">
          <Image alt="temp image" className="right-pill-image" width={345} height={330} src={props.Image}/>
        </div>
        <div className="right-pill-shape"/>
        <div className="right-pill-text-container">
          <p className="right-pill-event-title">{props.TitleText}</p>
          <p className="right-pill-event-description">{props.DescText}</p>
        </div>
        <div className="right-pill-shape"/>
        <div className="right-pill-link-image-container">
          <Link href="/experience" className="right-pill-image-link">
            <Image alt="an arrow that leads to the experiences web page" className="right-pill-image-next" width={100} height={150}src={rightArrow}/>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default LandingExperience
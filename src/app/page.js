import LandingStart from "@/components/LandingPage/LandingStart/landing"
import LandingExperience from "@/components/LandingPage/LandingExperience/landingExperience"
import "./page.scss"

const HomePage = () => {


  return (
    <div>
    <LandingStart/>
    <div className="white-line"/>
    <LandingExperience/>
    <div className="white-line"/>
    </div>
  )
}

export default HomePage
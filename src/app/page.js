import LandingStart from "@/components/LandingPage/LandingStart/landing"
import LandingExperience from "@/components/LandingPage/LandingExperience/landingExperience"
import "./page.scss"
import LandingTeam from "@/components/LandingPage/LandingTeam/landingTeam"

const HomePage = () => {


  return (
    <div>
    <LandingStart/>
    <LandingTeam/>
    </div>
  )
}

export default HomePage
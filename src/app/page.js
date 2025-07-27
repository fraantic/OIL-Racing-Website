import LandingStart from "@/components/LandingPage/LandingStart/landing"
import LandingExperience from "@/components/LandingPage/LandingExperience/landingExperience"
import "./page.scss"
import LandingTeam from "@/components/LandingPage/LandingTeam/landingTeam"
import LandingLiveries from "@/components/LandingPage/LandingLiveries/landingLiveries"

const HomePage = () => {


  return (
    <div>
    <LandingStart/>
    <LandingTeam/>
    <LandingLiveries/>
    </div>
  )
}

export default HomePage
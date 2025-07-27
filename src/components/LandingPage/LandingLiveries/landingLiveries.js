import Link from "next/link"
import {  Lilita_One  } from 'next/font/google'
import "./landingLiveries.scss"

const lilitaOne = Lilita_One({
  weight: '400',
})

const LandingLiveries = () => {
  

  return (
    <div className="landing-liveries-parent-container">
      <div className="landing-liveries-title-container">
        <p className={lilitaOne.className}>Our Liveries</p>
      </div>

      <video preload="auto" autoPlay loop muted className="landing-liveries-video">
        <source src="https://res.cloudinary.com/dgsoem6f7/video/upload/v1753453233/Flyby2_cb1qfs.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="landing-liveries-button-container">

      </div>

      <div className="landing-liveries-button-container">
          <Link className="landing-liveries-decoration-team" href="/liveries">
            <p className="landing-liveries-link-pill-button">
              View All Liveries
            </p>
          </Link>
        </div>
    </div>
  )
}

export default LandingLiveries

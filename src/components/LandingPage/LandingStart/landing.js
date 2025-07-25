import {  Lilita_One  } from 'next/font/google'
import "./landing.scss"
const lilitaOne = Lilita_One({
  weight: '400',
})

const LandingStart = () => {
  return (
    <div className="landing-start-parent">

      <video preload="auto" autoPlay loop muted className="landing-start-video">
        <source src="https://res.cloudinary.com/dgsoem6f7/video/upload/v1753453233/Flyby2_cb1qfs.mp4" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className="landing-start-text-container">
        <div className='landing-start-text'><p className={lilitaOne.className}>You can never win if your goals are unreachable.</p></div>
      </div>

    </div>
  )
}

export default LandingStart
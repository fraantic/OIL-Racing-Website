'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useMotionValueEvent,useScroll } from "motion/react"
import * as motion from "motion/react-client"
import "./navBar.scss"

//Images
import githubIcon from "../../../public/CompanyIcons/github.svg"

const NavBar = () => {

  const [navBarVisible, setNavBarVisible] = useState(true)
  const { scrollY } = useScroll()

  const navBarVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setNavBarVisible(true)
    } else {
      setNavBarVisible(false)
    }
  })


  return (
    <motion.div
    className="navbar-parent"
    variants={navBarVariants}
    animate={navBarVisible ? "hidden" : "visible"}
    >
      <div className="navbar-left-parent">
        <Image src={githubIcon} width={40} height={40} alt="The logo of one inch of love racing otherly known as OIL Racing"  className="navbar-logo-image" />
        <div className="navbar-link-container">
          <Link href="/" className="navbar-link">Home</Link>
          <Link href="/team" className="navbar-link">Team</Link>
          <Link href="/liveries" className="navbar-link">Liveries</Link>
          <Link href="/experience" className="navbar-link">Experience</Link>
        </div>
      </div>
      <div className="navbar-right-parent">
        <div className="navbar-socials-container">
          <Link href="https://github.com/fraantic/OIL-Racing-Website" className="navbar-github-icon">
            <Image className="navbar-github-icon-image" src={githubIcon} width={32} height={32} alt="The github company logo that when clicked goes to the github link of the project"/>
          </Link>
          <Link href="https://github.com/fraantic/OIL-Racing-Website" className="navbar-github-icon">
            <Image src={githubIcon} width={32} height={32} alt="The github company logo that when clicked goes to the github link of the project"/>
          </Link>
          <Link href="https://github.com/fraantic/OIL-Racing-Website" className="navbar-github-icon">
            <Image src={githubIcon} width={32} height={32} alt="The github company logo that when clicked goes to the github link of the project"/>
          </Link>
          <Link href="https://github.com/fraantic/OIL-Racing-Website" className="navbar-github-icon">
            <Image src={githubIcon} width={32} height={32} alt="The github company logo that when clicked goes to the github link of the project"/>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default NavBar
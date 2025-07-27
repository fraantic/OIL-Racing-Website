'use client'
import {  Lilita_One  } from 'next/font/google'
import { useState, useRef } from "react"
import * as motion from "motion/react-client"
import Image from "next/image"
import Link from "next/link"

import "./landingTeam.scss"



const lilitaOne = Lilita_One({
  weight: '400',
})

const LandingTeam = () => {

  const [isDragging, setIsDragging] = useState("0")

  const [orderAndZindex, setOrderAndZindex] = useState({
    1: 1,
    2: 2,
    3 : 3
  })

  const ParentRef = useRef(null)

  const rotationVariant = {
    1: {rotate: "-20deg", top: "10px"},
    2: {rotate: "-5deg", top: "-50px"},
    3: {rotate: "15deg", top: "0px"}
  }

  const ashtonVariant = {
    "0": {},
    "1": {rotate: "0deg", top: "0px"},
    "2": {},
    "3": {}
  }

  const solusVariant = {
    "0": {},
    "1": {},
    "2": {rotate: "0deg", top: "0px"},
    "3": {rotate: "5deg", top: "0px"}
  }

  const sumoVariant = {
    "0": {},
    "1": {},
    "2": {},
    "3": {rotate: "0deg", top: "0px"}
  }

  const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  }

  const handleDragEnd = (event, info, id) => {
    setIsDragging("0")
    if (info.offset.x > 0) {
      if (orderAndZindex[id] < Math.max(...Object.values(orderAndZindex))) {
        let toChange = getKeyByValue(orderAndZindex, orderAndZindex[id]+1)
        setOrderAndZindex({
          ...orderAndZindex,
          [id]: orderAndZindex[id] + 1,
          [toChange]: orderAndZindex[toChange] - 1
        })
      }
    }
    if (info.offset.x < 0) {
      if (orderAndZindex[id] > Math.min(...Object.values(orderAndZindex))) {
        let toChange = getKeyByValue(orderAndZindex, orderAndZindex[id]-1)
        setOrderAndZindex({
          ...orderAndZindex,
          [id]: orderAndZindex[id] - 1,
          [toChange]: orderAndZindex[toChange] + 1
        })
      }
    }
  } 

  const handleDragStarting = (event, id) => {
    setIsDragging(id)
  }



  return (
    <div className="landing-team-container-parent" >
      <div className="landing-team-header-container">
        <p style={{margin: 0}} className={lilitaOne.className} >Our Drivers</p>
      </div>
      <div className="landing-team-container" >

        <div ref={ParentRef} className="card-container" >

            <motion.div
            drag
            animate={isDragging}
            variants={ashtonVariant}
            whileHover={{scale: 1.05}}
            dragConstraints={ParentRef}
            dragElastic={0.4}
            dragSnapToOrigin={true}
            onPointerDown={event => handleDragStarting(event,"1")}
            onDragEnd={(event, info) => {handleDragEnd(event, info, "1")}}
            className="ashton-card card-generic"
            style={{order: orderAndZindex[1], zIndex: orderAndZindex[1], ...rotationVariant[orderAndZindex[1]]}}
            >
              <Image draggable={false} src="/PersonalImages/ashton.png" width={392} height={637} alt="a picture of ashton"/>
              
              <div className="card-bottom-container">
                <p className="card-name-text">Ashton Low</p>

                <div className="card-stats-container">

                  <div className="card-stats-name-container">
                    <p className="stat-value-name">Speed:&nbsp;</p>
                    <p className="stat-value-name">Control:&nbsp;</p>
                    <p className="stat-value-name">Aggressiveness:&nbsp;</p>
                  </div>

                  <div className="card-stats-value-container">
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                    </div>
                  </div>

                </div>
              </div>
            
            </motion.div>


            <motion.div
            drag
            animate={isDragging}
            variants={solusVariant}
            dragConstraints={ParentRef}
            whileHover={{scale: 1.05}}
            dragElastic={0.4}
            dragSnapToOrigin={true}
            onDragStart={(e) => handleDragStarting(e,"2")}
            onDragEnd={(event, info) => handleDragEnd(event, info, "2")}
            className="solus-card card-generic"
            style={{order: orderAndZindex[2], zIndex: orderAndZindex[2], ...rotationVariant[orderAndZindex[2]]}}
            >
              <Image draggable={false} src="/PersonalImages/ZOU.png" width={392} height={637} alt="a picture of ashton"/>
              
              <div className="card-bottom-container">
                <p className="card-name-text">Zou Haocheng</p>

                <div className="card-stats-container">

                  <div className="card-stats-name-container">
                    <p className="stat-value-name">Speed:&nbsp;</p>
                    <p className="stat-value-name">Control:&nbsp;</p>
                    <p className="stat-value-name">Aggressiveness:&nbsp;</p>
                  </div>

                  <div className="card-stats-value-container">
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                  </div>

                </div>
              </div>
            
            </motion.div>

            <motion.div
            drag
            animate={isDragging}
            variants={sumoVariant}
            whileHover={{scale: 1.05}}
            dragConstraints={ParentRef}
            dragElastic={0.4}
            dragSnapToOrigin={true}
            onDragStart={(e) => handleDragStarting(e,"3")}
            onDragEnd={(event, info) => handleDragEnd(event, info, "3")}
            className="sumo-card card-generic"
            style={{order: orderAndZindex[3], zIndex: orderAndZindex[3], ...rotationVariant[orderAndZindex[3]]}}
            >
              <Image draggable={false} src="/PersonalImages/sumo.png" width={392} height={637} alt="a picture of ashton"/>
              
              <div className="card-bottom-container">
                <p className="card-name-text">Ben Waite</p>

                <div className="card-stats-container">

                  <div className="card-stats-name-container">
                    <p className="stat-value-name">Speed:&nbsp;</p>
                    <p className="stat-value-name">Control:&nbsp;</p>
                    <p className="stat-value-name">Aggressiveness:&nbsp;</p>
                  </div>

                  <div className="card-stats-value-container">
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>

                    </div>
                    <div className="card-stat-dash-container">
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                      <div className="stat-dashed-line"></div>
                    </div>
                  </div>

                </div>
              </div>
            
            </motion.div>

        </div>

        <div className="team-link-container">
          <Link className="link-decoration-team" href="/team">
            <p className="team-link-pill-button">
              Meet the Team
            </p>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LandingTeam
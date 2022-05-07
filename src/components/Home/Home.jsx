import React from "react"
import Hi from "../../assests/undraw_fireworks.svg"
import Wave from "../../assests/svg.png"
import "./Home.css"

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="homeTextContainer">
        <h4 className="intro">Hello there, my name is</h4>
        <h1 className="name">Raghavender Reddy Lonka.</h1>
        <h2 className="job">A Full Stack Developer.</h2>
        <img src={Hi} alt="profile" className="profile" />
      </div>
      <img src={Wave} alt="wave" className="wave" />
    </div>
  )
}

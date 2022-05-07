import React from "react"
import Logo from "../assests/R-logos/R-logos_white.png"
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navContainer">
      <img src={Logo} alt="Logo" className="logo" id="home" />
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

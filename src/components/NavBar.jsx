import React from "react"
import Logo from "../assests/R-logos/R-logos_white.png"
import "./navBar.css"

export default function NavBar() {
  return (
    <div className="navContainer">
      <img src={Logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

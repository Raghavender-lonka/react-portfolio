import React from "react"
// import SideBarComp from "./sideBar/SideBar"
import Logo from "../assests/R-logos/R-logos_white.png"
import "./navBar.css"
// import Example from "./sideBar/SideBar"

export default function NavBar() {
  // const [showSideBar, setShowSideBar] = useState(false)

  // useEffect(() => {
  //   if (window.innerWidth < 480) {
  //     setShowSideBar(true)
  //     // console.log(window.innerWidth)
  //   }
  // }, [])

  return (
    <div className="navContainer">
      <img src={Logo} alt="Logo" className="logo" id="home" />
      {/* <div className="side">
        <Example />
      </div> */}
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

import React, { useState, useEffect } from "react"
import "./About.css"
import AboutImg from "../../assests/undraw_freelancer.svg"
import Logo from "../../assests/R-logos/R-logos_white.png"

export default function About() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="aboutContainer" id="about">
      <div className="aboutTitle">
        <h1>About Me</h1>
      </div>
      <div className="abountContentContainer">
        <div className="aboutContent">
          <p>
            Hello there, I'm Raghavender Reddy Lonka. Dynamic and results-driven Software Engineer with 1.6+ Years of Experience @<a href="https://cloudeq.com/"> Cloudeq</a> and having strong background in cloud technologies, DevOps practices, and infrastructure monitoring. Adept at collaborating with cross-functional teams, ensuring streamlined resource creation, and optimizing system performance for diverse applications.
          </p>
          {/* <p>
            Fast-forward to today, As I was learing web i was enjoying turning
            complex problems into simple, beautiful and intuitive designs. When
            I'm not pushing pixels, you'll find me reading fiction or playing
            solitaire
          </p> */}
          <div className="skillsContainer">
            <h2>Languages/Libraries that i have hands-on experience</h2>
            <ul className="skills">
              <li>
                <i className="fa-brands fa-docker" title="Docker"></i>
              </li>
              <li>
                <i className="fa-brands fa-aws" title="Amazon Web Services"></i>
              </li>
              <li>
                <i className="fa-brands fa-github" title="GitHub Actions"></i>
              </li>
              <li>
                <i className="fa-brands fa-linux" title="Linux"></i>
              </li>
              <li>
                <i className="fa-brands fa-html5" title="Html5"></i>
              </li>
              <li>
                <i className="fa-brands fa-css3-alt" title="CSS3"></i>
              </li>
              <li>
                <i className="fa-brands fa-js" title="Javascript"></i>
              </li>
              
              <li>
                <i className="fa-brands fa-react" title="ReactJs"></i>
              </li>
              <li>
                <i class="fa-brands fa-node" title="NodeJs"></i>
              </li>
              {/* <li>
                <i className="fa-brands fa-github" title="Github"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap" title="Bootstrap"></i>
              </li> */}
              {/* <li>
                <i className="fa-brands fa-markdown" title="Markdown"></i>
              </li> */}
              <li>
                <i className="fa-brands fa-sass" title="Sass"></i>
              </li>
            </ul>
          </div>
        </div>

        <img src={AboutImg} alt="About me" className="about-me" />
      </div>
      <div className="footerLogo2">
        {showTopBtn && (
          <img
            src={Logo}
            alt="Logo"
            className="logo logo2 logo3"
            onClick={goToTop}
          />
        )}
      </div>
    </div>
  )
}

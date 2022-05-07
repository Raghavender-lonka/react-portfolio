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
            Hello there, I'm Raghavender Reddy Lonka. I am Aspiring full stack
            mern developer. I had graduated in civil engineering in 2020, At
            first i thought to became a civil engineer, but during COVID-19
            pandemic, I got interested in web development as i saw myself
            more-satisfied in working for web development, So I decided to learn
            Web Development from scratch.
          </p>
          <p>
            Fast-forward to today, I am currently learn NodeJs and MonogoDB. As
            I was learing web i was enjoying turning complex problems into
            simple, beautiful and intuitive designs. When I'm not pushing
            pixels, you'll find me reading fiction or playing solitaire
          </p>
          <div className="skillsContainer">
            <h2>
              Languages/Libraries/Technologies that i have hands-on experience
            </h2>
            <ul className="skills">
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
                <i className="fa-brands fa-git-alt" title="Git"></i>
              </li>
              <li>
                <i className="fa-brands fa-github" title="Github"></i>
              </li>
              <li>
                <i className="fa-brands fa-react" title="ReactJs"></i>
              </li>
              <li>
                <i className="fa-brands fa-bootstrap" title="Bootstrap"></i>
              </li>
              <li>
                <i className="fa-brands fa-markdown" title="Markdown"></i>
              </li>
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

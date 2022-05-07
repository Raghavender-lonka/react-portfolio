import React from "react"
import "./Contact.css"
import Logo from "../../assests/R-logos/R-logos_white.png"

export default function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <div className="contactHead">
        <h1>Get In Touch</h1>
        <p>
          I am always interested in working in web projects no matter whether
          its a big project or small project, if you need me just connect with
          me!
        </p>
        <button className="mailBtn">
          <a
            href="mailto:raghavenderreddylonka.1@gmail.com"
            className="mailLink"
          >
            Say Hello
          </a>
        </button>
      </div>
      <div className="contactLinks">
        <a href="mailto:raghavenderreddylonka.1@gmail.com" target="_blank">
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/raghavender-reddy-lonka-a34491203/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/raghurag00" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://github.com/Raghavender-lonka" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="tel:+918466001825">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      <div className="footer">
        <p>Designed & Built by Raghavender Reddy Lonka</p>
      </div>
    </div>
  )
}

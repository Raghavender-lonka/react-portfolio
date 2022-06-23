import React from "react"
import "./Resume.css"
import ResumePDF from "../../Resume.pdf"

export default function Resume() {
  return (
    <div className="resumeContainer" id="resume">
      <h1 className="resumeTitle">Resume</h1>
      <div className="resumeDownload">
        <button className="resumeBtn">
          <a href={ResumePDF}>Download My Resume</a>
        </button>
      </div>
      <div className="education">
        <h2>Education:</h2>
        <section>
          <h3>
            Avanthi Scientific Technological & Research Academy - Hyderabad,
            Telangana
          </h3>
          <p>Civil Engineering, 2016-2020</p>
        </section>
        <br />
        <section>
          <h3>SMT Kottam Manikyamma Junior College - Gadwal, Telangana</h3>
          <p>Intermediate(Class 12), 2014-2016</p>
        </section>
        <br />
        <section>
          <h3>Master Mind's Techno School - Pebbair, Telangana</h3>
          <p>Metriculation(Class 10), 2014</p>
        </section>
      </div>
      <div className="certificates">
        <h2 className="certificatesHead">Certifications:</h2>
        <div className="certificatesContainer">
          <div>
            <h3>
              React - The Complete Guide (incl Hooks, React Router, Redux)
            </h3>
            <p>Completed on: May 2022</p>
            <a
              href="https://www.udemy.com/certificate/UC-1a613759-3f82-4377-b098-bbe1dee2e559/?ranMID=39197&ranEAID=rl2xnKiLcHs&ranSiteID=rl2xnKiLcHs-L4uS6S2.oePh4pQo5l6etQ&LSNPUBID=rl2xnKiLcHs&utm_source=aff-campaign&utm_medium=udemyads&"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>Responsive Web Design - freeCodeCamp.org</h3>
            <p>Completed on: December 2021</p>
            <a
              href="https://www.freecodecamp.org/certification/Raghavender/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          {/* <div>
            <h3>
              JavaScript Algorithms and Data Structures - freeCodeCamp.org
            </h3>
            <p>Completed on: March 2022</p>
            <a
              href="https://www.freecodecamp.org/certification/Raghavender/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div>
          <div>
            <h3>Office 365 - LinkedIn Learning</h3>
            <p>Completed on: December 2021</p>
            <a
              href="https://www.linkedin.com/learning/certificates/afa9f4fa0553fcf83efd0a60fc4e32ff936bde27ef42bd06daee3eba5abeed3c?trk=share_certificate"
              target="_blank"
              rel="noreferrer"
            >
              Link Here
            </a>
          </div> */}
        </div>
      </div>
    </div>
  )
}

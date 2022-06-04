import React from "react"
import "./Projects.css"
import CovidProjectImg from "../../assests/projects/covid-19-tracker.png"
import MovieProjectImg from "../../assests/projects/movieapp3.jpg"
import BlogProjectImg from "../../assests/projects/blog.png"
import TodoProjectImg from "../../assests/projects/todo-list2.png"
import ClockProjectImg from "../../assests/projects/clock3.png"
import SplitProjectImg from "../../assests/projects/split.png"

export default function Projects() {
  return (
    <div className="projectsContainer" id="projects">
      <div className="projectsTitle">
        <h1>Some Things I've Built</h1>
      </div>
      <div className="projects">
        <div className="project blog">
          <a
            href="https://blog-raghus.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={BlogProjectImg}
              alt="covid-19 tracker"
              className="projectImg"
            />
          </a>
          <div className="projectDetails">
            <p className="featured">Featured Project</p>
            <h1 className="projectTitle">Blog </h1>
            <p className="projectInfo">
              Blog Project, Showing news articles about different topics like
              tech, cinema, && others. In this project for Frontend I've used
              React.JS and for Backend I've used Node.Js
            </p>
            <div className="usedTechno">
              <p>React</p>
              <p>Css</p>
              <p>Node.Js</p>
              <p>Git</p>
              <p>Netlify</p>
              <p>Heroku</p>
            </div>
            <div className="projectLinks">
              <a
                href="https://github.com/Raghavender-lonka/blog-page/tree/back-end"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://blog-raghus.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="project movieFinder">
          <div className="projectDetails projectDetails2">
            <p className="featured">Featured Project</p>
            <h1 className="projectTitle">Movie Finder</h1>
            <p className="projectInfo">
              A Live Movie Finder, showing popular movies currently in theatres,
              I have done this project using TMDB API
            </p>
            <div className="usedTechno usedTechno2">
              <p>Javascript</p>
              <p>Css</p>
              <p>Html</p>
              <p>API</p>
              <p>Git</p>
              <p>Github</p>
            </div>
            <div className="projectLinks projectLinks2">
              <a
                href="https://github.com/Raghavender-lonka/Movie-Finder"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://raghavender-lonka.github.io/Movie-Finder/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
          <a
            href="https://raghavender-lonka.github.io/Movie-Finder/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={MovieProjectImg}
              alt="movie finder"
              className="projectImg"
            />
          </a>
        </div>
        <div className="project covidTracker">
          <a
            href="https://raghavender-lonka-covid-19-tracker.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={CovidProjectImg}
              alt="covid-19 tracker"
              className="projectImg"
            />
          </a>
          <div className="projectDetails">
            <p className="featured">Featured Project</p>
            <h1 className="projectTitle">Covid-19 Tracker</h1>
            <p className="projectInfo">
              A Live Covid-19 Tracker, showing cases of countries wide, and
              states/provinces wide list, I have done this project using
              diseases.sh API
            </p>
            <div className="usedTechno">
              <p>React</p>
              <p>Css</p>
              <p>API</p>
              <p>Git</p>
              <p>Netlify</p>
            </div>
            <div className="projectLinks">
              <a
                href="https://github.com/Raghavender-lonka/covid-19-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://raghavender-lonka-covid-19-tracker.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="otherProjects">
          <h1>Other Noteworthy Projects</h1>
          <div className="otherProjectsContainer">
            <div className="otherProject">
              <a
                href="https://raghavender-lonka.github.io/Todo/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={TodoProjectImg}
                  alt="todo-list"
                  className="otherProjectsImg"
                />
              </a>
              <h2>Todo-List</h2>
              <p className="otherProjectInfo">
                A Simple Todo-List, with clean UI and Moblie responsive
              </p>
              <div className="usedTechno otherTechno">
                <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Github</p>
              </div>
              <div className="projectLinks">
                <a
                  href="https://raghavender-lonka.github.io/Todo/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="otherProject">
              <a
                href="https://raghavender-lonka.github.io/Digital_Clock2/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ClockProjectImg}
                  alt="clock"
                  className="otherProjectsImg"
                />
              </a>
              <h2>Digital CLock</h2>
              <p className="otherProjectInfo">
                A Simple Digital Clock, with clean UI and Moblie responsive
              </p>
              <div className="usedTechno otherTechno">
                <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Github</p>
              </div>
              <div className="projectLinks">
                <a
                  href="https://raghavender-lonka.github.io/Digital_Clock2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
            <div className="otherProject">
              <a
                href="https://raghavender-lonka.github.io/tip-calculator-app/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={SplitProjectImg}
                  alt="clock"
                  className="otherProjectsImg"
                />
              </a>
              <h2>Tip Calculator</h2>
              <p className="otherProjectInfo">
                A Simple Tip Calculator App, with clean UI and Moblie responsive
              </p>
              <div className="usedTechno otherTechno">
                <p>Html</p>
                <p>Css</p>
                <p>Javascript</p>
                <p>Github</p>
              </div>
              <div className="projectLinks">
                <a
                  href="https://raghavender-lonka.github.io/tip-calculator-app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-link"></i>
                </a>
              </div>
            </div>
          </div>
          <h2>These are some of the projects I've done,</h2>
          <h2>
            You can also checkout my other projects by clicking&nbsp;
            <a
              href="https://raghavender-lonka.github.io/Projects_Page/"
              target="_blank"
              rel="noreferrer"
              className="otherProjectsPageLink"
            >
              here!
            </a>
          </h2>
        </div>
      </div>
    </div>
  )
}

import { ReactComponent as AstronautImage } from "./main.svg"
import { ReactComponent as Planet } from "./planet.svg"
import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import "./styles.scss"

const Minimal1: React.FC = () => {
  return (
    <div className="minimal-1-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <Planet className="planet-1" />
      <Planet className="planet-2" />
      <Planet className="planet-3" />
      <AstronautImage className="astronaut" />
      <div className="content">
        <h1>OOPS!</h1>
        <p>Page not found</p>
        <div className="button-container">
          <button>GO HOME</button>
          <button>GO BACK</button>
        </div>
      </div>
      <span className="author">
        designed by{" "}
        <a target="_blank" href="https://www.figma.com/@seda">
          Seda
        </a>
      </span>
    </div>
  )
}

export default Minimal1

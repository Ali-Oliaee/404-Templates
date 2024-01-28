import GithubLogo from "../../../assets/icons/github-logo.svg?react"
import Image from "./main.svg?react"
import "./styles.scss"

const Minimal3: React.FC = () => {
  return (
    <div className="minimal-3-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <Image className="image" />
      <div className="content">
        <h1>Ooops....</h1>
        <p className="description">page not found</p>
        <p className="extra-description">page is not found plz go back</p>
        <button>Plz Go Back</button>
        <span className="author">
          designed by{" "}
          <a target="_blank" href="https://www.figma.com/@techdesign">
            tech.design
          </a>
        </span>
      </div>
    </div>
  )
}

export default Minimal3

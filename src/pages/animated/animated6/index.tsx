import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import animation from "./animation.webm"
import "./styles.scss"

const Animated6: React.FC = () => {
  return (
    <div className="animated-6-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>

      <video src={animation} className="animation" muted autoPlay loop />
      <div className="content">
        <h1>404 - PAGE NOT FOUND</h1>
        <p>We’ve dispatched a rescue murloc to guide you back to safety.</p>
        <button>Mmmrrgmgrrrgmmll!</button>
      </div>

      <span className="author">
        &copy; designed by{" "}
        <a target="_blank" href="https://www.blizzard.com/en-us/404">
          Blizzard
        </a>
      </span>
    </div>
  )
}

export default Animated6

import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import Image from "./main.png"
import "./styles.scss"

const Minimal4: React.FC = () => {
  return (
    <div className="minimal-4-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <img src={Image} alt="music" className="image" />
      <div className="content">
        <h1>404s and heartbreaks</h1>
        <p className="description">
          We couldn’t find the page you were looking for. Maybe our{" "}
          <a href="#">FAQ</a> or <a href="#">Community</a> can help?
        </p>
        <button>GO BACK</button>
        <span className="author">
          &copy; designed by{" "}
          <a target="_blank" href="https://www.spotify.com/us/404/">
            Spotify
          </a>
        </span>
      </div>
    </div>
  )
}

export default Minimal4

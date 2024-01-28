import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import SadGif from "./sad.gif"
import "./styles.scss"

const Animated1: React.FC = () => {
  return (
    <div className="animated-1-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <img src={SadGif} alt="sad girl" className="girl-gif" />
      <div className="content">
        <h1>Oops!</h1>
        <p className="description">
          We can't seem to find the page you're looking for.
        </p>
        <p className="error">Error code: 404</p>
        <p className="links-title">Here are some helpful links instead:</p>
        <a href="#">Home</a>
        <a href="#">Search</a>
        <a href="#">Help</a>
        <a href="#">Traveling on Airbnb</a>
        <a href="#">Hosting on Airbnb</a>
        <a href="#">Trust & Safety</a>
        <a href="#">Sitemap</a>
        <span className="author">
          designed by{" "}
          <a target="_blank" href="https://www.airbnb.com/404">
            Airbnb
          </a>
        </span>
      </div>
    </div>
  )
}

export default Animated1

import "./styles.scss"
import Spline from "@splinetool/react-spline"
import GithubLogo from "../../assets/icons/github-logo.svg?react"

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <Spline
        className="model"
        scene="https://prod.spline.design/mm9YnQNtqyXhPijJ/scene.splinecode"
      />
      <div className="content">
        <h1 className="title">404 Templates</h1>
        <h3 className="subtitle">Free And OpenSource</h3>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
    </div>
  )
}

export default HomePage

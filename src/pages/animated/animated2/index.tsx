import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import "./styles.scss"

const Animated2: React.FC = () => {
  return (
    <div className="animated-2-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <section className="page_404">
        <div className="four_zero_four_bg">
          <h1 className="title">404</h1>
        </div>
        <div className="content_box_404">
          <h3>Look like you're lost</h3>
          <p>the page you are looking for not available!</p>
          <a href="" className="link_404">
            Go to Home
          </a>
        </div>
        <span className="author">
          designed by{" "}
          <a target="_blank" href="https://codepen.io/affectionatelettuce">
            Jen
          </a>
        </span>
      </section>
    </div>
  )
}

export default Animated2

import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import Parallax from "parallax-js"
import "./styles.scss"
import { useEffect } from "react"

const Animated3: React.FC = () => {
  const fetchParallax = async () => {
    const scene = document.getElementById("scene")
    const parallax = new Parallax(scene)
  }

  useEffect(() => {
    fetchParallax()
  }, [])

  return (
    <div className="animated-3-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <section className="wrapper">
        <div className="container">
          <div id="scene" className="scene" data-hover-only="false">
            <div className="circle" data-depth="1.2"></div>

            <div className="one" data-depth="0.9">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two" data-depth="0.60">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three" data-depth="0.40">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404" data-depth="0.50">
              404
            </p>
            <p className="p404" data-depth="0.10">
              404
            </p>
          </div>

          <div className="text">
            <article>
              <p>
                Uh oh! Looks like you got lost. <br />
                Go back to the homepage if you dare!
              </p>
              <button>i dare!</button>
            </article>
          </div>
        </div>
      </section>
      <span className="author">
        &copy; designed by{" "}
        <a target="_blank" href="https://codepen.io/rafaelavlucas">
          Rafaela
        </a>
      </span>
    </div>
  )
}

export default Animated3

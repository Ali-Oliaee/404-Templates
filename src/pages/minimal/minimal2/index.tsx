import { ReactComponent as GithubLogo } from "@assets/icons/github-logo.svg"
import { ReactComponent as Image } from "./main.svg"
import "./styles.scss"

const Minimal2: React.FC = () => {
  return (
    <div className="minimal-2-page">
      <a
        href="https://github.com/Ali-Oliaee/404-Templates"
        className="github-link"
        target="_blank"
      >
        <GithubLogo className="github-logo" />
      </a>
      <div className="content">
        <Image className="image" />
        <h1>Opps! Page Not Found</h1>
        <button>BACK TO HOME</button>
        <span className="author">
          designed by{" "}
          <a target="_blank" href="https://www.figma.com/@vj_designz">
            Prabhatsinh
          </a>
        </span>
      </div>
    </div>
  )
}

export default Minimal2

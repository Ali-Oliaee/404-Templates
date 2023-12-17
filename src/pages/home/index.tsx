import GithubLogo from "../../assets/icons/github-logo.svg?react"
import "./styles.scss"

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      {/* <div className="header">
        <button>
          <GithubLogo />
          Github
        </button>
      </div> */}

      <div className="content">
        <h1 className="title">404 Templates</h1>
        <h3 className="subtitle">Free And OpenSource</h3>
        <h6 className="description">feel free to use</h6>
      </div>
    </div>
  )
}

export default HomePage

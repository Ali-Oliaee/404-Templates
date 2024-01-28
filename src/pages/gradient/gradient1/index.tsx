import "./styles.scss"

const Gradient1: React.FC = () => {
  return (
    <div className="gradient-1-page">
      <div className="content">
        <div className="circle">
          <h1 className="circle-header">404</h1>
          <p className="circle-text">[four-oh-four]</p>
        </div>
        <div className="preamble">
          <h2 className="info-header">
            Don't freak out, keep calm, we're on it!
          </h2>
          <p className="info-text">
            You have reached a so called 404 page which is a HTTP standard
            response code, that usually appears when a client was able to
            communicate with a given server, but the server couldn't find what
            was requested. Sounds complicated? Don't worry. Below follows a link
            back to your previous browsing page and experience. Or click on the
            'E-mail us' link for more info. Cheers and sorry for the
            inconvenience!
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="footer-decor"></div>
        <ul className="button-list">
          <li>
            <a href="#" className="btn-pink">
              Take me back
            </a>
          </li>
          <li>
            <a href="#" className="btn-pink">
              E-mail us
            </a>
          </li>
        </ul>
        <p className="copyright">
          404 page | Made with ♡ by{" "}
          <a href="https://hannaolsson.com">Hanna Olsson </a>
        </p>
      </div>
    </div>
  )
}

export default Gradient1

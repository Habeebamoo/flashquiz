import logo from "../assets/logo.png"

export default function Footer() {
  return (
    <footer>
      <div className="img-box">
        <img src={logo} />
      </div>
      <div className="info">
        <h3>Legal</h3>
        <small>Terms of use</small>
        <small>License agreement</small>
        <small>Privacy policy</small>
        <small>Cookies policy</small>
        <small>Copywright information</small>
      </div>
      <div className="info">
        <h3>Support</h3>
        <small>FAQ</small>
        <small>Search guide</small>
        <small>Events</small>
        <small>Subscriptions</small>
      </div>
      <div>
        <h3>Subscribe to our newsletter</h3>
        <div className="form">
          <input type="email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  )
}
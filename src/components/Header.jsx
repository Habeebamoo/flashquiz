import logo from "../assets/logo.png"

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} />
          <h2>FlashQuiz</h2>
        </div>
      </nav>
    </header>
  )
}
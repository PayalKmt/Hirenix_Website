import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">Hirenix</Link>
        <nav className="nav-links">
          <Link to="/#features">Features</Link>
          <Link to="/#how-it-works">How It Works</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </header>
  )
}

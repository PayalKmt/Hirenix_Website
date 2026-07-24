import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div>
          <Link to="/" className="logo">Hirenix</Link>
        </div>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/delete-account">Delete Account</Link>
          <a href="mailto:agrafuturedesks@gmail.com">Contact</a>
        </div>
        <div className="footer-copy">&copy; 2026 Hirenix. All rights reserved.</div>
      </div>
    </footer>
  )
}

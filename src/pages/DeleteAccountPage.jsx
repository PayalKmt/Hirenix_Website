import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function DeleteAccountPage() {
  return (
    <>
      <Nav />

      <main className="policy">
        <div className="container">
          <div className="policy-header">
            <Link to="/" className="back-link">&larr; Back to Home</Link>
            <h1>How to Delete Your Account</h1>
            <p className="updated">Last updated: July 24, 2026</p>
          </div>

          <div className="policy-body">
            <p>You can permanently delete your Hirenix account and all associated data directly from the app, in under a minute. This page explains exactly how, and what happens to your data when you do.</p>

            <h2>1. Delete Your Account In-App</h2>
            <ul>
              <li>Open the Hirenix app and sign in to your account.</li>
              <li>Go to the <strong>Profile</strong> tab (bottom navigation bar).</li>
              <li>Scroll down and tap <strong>Delete Account</strong>, below the Log Out button.</li>
              <li>If you signed up with email and password, enter your password to confirm. If you signed in with Google or LinkedIn, no password is needed.</li>
              <li>Tap <strong>Delete</strong> to permanently delete your account.</li>
            </ul>
            <p>Deletion happens immediately — you'll be signed out right away and returned to the sign-in screen.</p>

            <h2>2. What Gets Deleted</h2>
            <ul>
              <li>Your account profile — full name, email address, and password.</li>
              <li>Every resume you've uploaded, including the file itself.</li>
              <li>All resume analysis results, ATS scores, and improvement feedback tied to your account.</li>
            </ul>
            <p>This action is permanent and cannot be undone. Once deleted, this data cannot be recovered.</p>

            <h2>3. Can't Access the App?</h2>
            <p>If you're unable to sign in — for example, you forgot your password or uninstalled the app — email us at <a href="mailto:agrafuturedesks@gmail.com">agrafuturedesks@gmail.com</a> from the email address associated with your account, and we'll delete your account and data manually.</p>

            <h2>4. Questions</h2>
            <p>For anything else about your data, see our <Link to="/privacy-policy">Privacy Policy</Link>, or contact us at <a href="mailto:agrafuturedesks@gmail.com">agrafuturedesks@gmail.com</a>.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

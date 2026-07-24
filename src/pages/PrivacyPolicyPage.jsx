import { Link } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />

      <main className="policy">
        <div className="container">
          <div className="policy-header">
            <Link to="/" className="back-link">&larr; Back to Home</Link>
            <h1>Privacy Policy</h1>
            <p className="updated">Last updated: July 24, 2026</p>
          </div>

          <div className="policy-body">
            <p>This Privacy Policy explains how Hirenix ("we", "our", "us") collects, uses, and protects your information when you use the Hirenix mobile application (the "App"). By using the App, you agree to the practices described below.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <ul>
              <li><strong>Account information.</strong> When you register or sign in, we collect your full name, email address, and password. Your password is transmitted securely and never stored in plain text.</li>
              <li><strong>Resume data.</strong> When you upload a resume (PDF or DOCX), we process the file and the information it contains — such as work experience, education, skills, and contact details — to generate your ATS compatibility score and job recommendations.</li>
              <li><strong>Analysis &amp; activity data.</strong> We store your resume analysis history, ATS scores, and job-match results so you can view them again from within the App.</li>
              <li><strong>Local device data.</strong> A session token and basic profile details are stored locally on your device to keep you signed in between visits. You can clear this at any time by logging out.</li>
            </ul>
            <p>You can also browse the App as a guest without creating an account. In guest mode, we do not collect account, resume, or analysis data — this information is only collected once you sign in or register.</p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To create and manage your account and authenticate you when you sign in.</li>
              <li>To analyze your resume and generate an ATS score, grade, and improvement feedback.</li>
              <li>To match you with relevant, live job openings based on your resume content.</li>
              <li>To maintain your resume and analysis history so you can revisit past results.</li>
              <li>To maintain and improve the reliability and functionality of the App.</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <p>We do not sell your personal information. We may share limited information as follows:</p>
            <ul>
              <li><strong>Service providers.</strong> We use third-party infrastructure providers to host our backend and process resume analysis on our behalf, under obligations to protect your data.</li>
              <li><strong>Job listing sources.</strong> To find job matches, relevant details derived from your resume (such as skills and experience) may be used to query third-party job listing providers.</li>
              <li><strong>External links.</strong> When you tap "Apply Now" on a job listing, you are taken to the employer's or job board's website in your browser. Their own privacy policy governs any information you provide there.</li>
              <li><strong>Legal reasons.</strong> We may disclose information if required by law or to protect the rights, safety, or property of Hirenix or others.</li>
            </ul>

            <h2>4. Data Retention</h2>
            <p>We retain your account, resume, and analysis data for as long as your account remains active. You may request deletion of your account and associated data at any time by contacting us (see Section 9).</p>

            <h2>5. Your Choices &amp; Rights</h2>
            <ul>
              <li>You can review your profile and resume analysis history from within the App.</li>
              <li>You can log out at any time, which clears your session token from your device.</li>
              <li>You can request access to, correction of, or deletion of your personal data by contacting us.</li>
              <li>You can use the App in guest mode to explore its features before creating an account.</li>
            </ul>

            <h2>6. Security</h2>
            <p>We use reasonable technical and organizational measures to protect your information. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.</p>

            <h2>7. Children's Privacy</h2>
            <p>Hirenix is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it.</p>

            <h2>8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the App after changes are posted constitutes acceptance of the revised policy.</p>

            <h2>9. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at <a href="mailto:agrafuturedesks@gmail.com">agrafuturedesks@gmail.com</a>.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

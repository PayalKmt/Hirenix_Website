import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const FEATURES = [
  {
    icon: '📄',
    title: 'Upload Your Resume',
    description: 'Import your resume in PDF or DOCX format in seconds to kick off your personalized career analysis.',
  },
  {
    icon: '🤖',
    title: 'AI Feedback & ATS Score',
    description: 'Our AI analyzes your resume section by section and grades it against real ATS systems, with clear suggestions to improve it.',
  },
  {
    icon: '🎯',
    title: 'Discover Matching Jobs',
    description: 'Get curated, live job openings ranked by how closely they match your skills, experience, and resume score.',
  },
]

const STEPS = [
  { number: 1, title: 'Upload', description: 'Drop in your PDF or DOCX resume and pick your experience level.' },
  { number: 2, title: 'Analyze', description: 'Hirenix scores your resume and highlights exactly what to fix.' },
  { number: 3, title: 'Apply', description: 'Browse job matches built from your resume and apply directly.' },
]

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.querySelector(location.hash)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  return (
    <>
      <Nav />

      <main>
        <section className="hero">
          <div className="container">
            <span className="eyebrow">AI Career Co-Pilot</span>
            <h1>Get hired faster with an AI that reads resumes like a recruiter</h1>
            <p>Upload your resume, get an instant ATS compatibility score with actionable feedback, and discover job openings matched to your actual skills and experience.</p>
            <div className="hero-actions">
              <a href="#features" className="btn btn-primary">See What It Does</a>
              <Link to="/privacy-policy" className="btn btn-outline">Privacy Policy</Link>
            </div>
            <p className="hero-note">Mobile app for Android &amp; iOS · Built with Flutter</p>
          </div>
        </section>

        <section id="features">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Features</span>
              <h2>Everything you need to land the right job</h2>
              <p>Three steps stand between your resume and your next offer.</p>
            </div>
            <div className="features-grid">
              {FEATURES.map((feature) => (
                <div className="card" key={feature.title}>
                  <div className="card-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">How It Works</span>
              <h2>From resume to results in minutes</h2>
            </div>
            <div className="steps">
              {STEPS.map((step) => (
                <div className="step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="strip">
              <p><strong>Try before you sign up.</strong> Browse Hirenix as a guest to see how it works — creating a free account is only required when you're ready to upload, analyze, or apply.</p>
              <a href="#features" className="btn btn-outline">Learn More</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

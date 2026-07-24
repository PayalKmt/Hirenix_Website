import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
    </Routes>
  )
}

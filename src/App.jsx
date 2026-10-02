import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CategoryHome from './pages/CategoryHome'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'
import LegalPage from './pages/LegalPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/android/app/:id/privacy" element={<LegalPage doc="privacy" />} />
        <Route path="/android/app/:id/terms" element={<LegalPage doc="terms" />} />
        <Route path="/android/app/:id/delete-account" element={<LegalPage doc="delete-account" />} />
        <Route path="/android/app/:id" element={<AppDetail />} />
        <Route path="/android" element={<Home />} />
        <Route path="/" element={<CategoryHome />} />
      </Routes>
    </Layout>
  )
}

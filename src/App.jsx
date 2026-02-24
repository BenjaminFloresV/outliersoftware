import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CategoryHome from './pages/CategoryHome'
import Home from './pages/Home'
import AppDetail from './pages/AppDetail'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/android/app/:id/privacy" element={<Privacy />} />
        <Route path="/android/app/:id/terms" element={<Terms />} />
        <Route path="/android/app/:id" element={<AppDetail />} />
        <Route path="/android" element={<Home />} />
        <Route path="/" element={<CategoryHome />} />
      </Routes>
    </Layout>
  )
}

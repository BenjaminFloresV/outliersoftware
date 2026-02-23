import { useParams, Link } from 'react-router-dom'
import appsData from '../data/apps.json'

export default function AppDetail() {
  const { id } = useParams()
  const app = appsData.find((a) => a.id === id)

  if (!app) {
    return (
      <div>
        <p>App not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <>
      <p style={backStyle}>
        <Link to="/android">← Back to list</Link>
      </p>
      <h1 style={h1Style}>{app.name}</h1>
      <p style={descStyle}>{app.description}</p>
      {app.playStoreUrl && (
        <p>
          <a href={app.playStoreUrl} target="_blank" rel="noopener noreferrer">
            View on Google Play Store
          </a>
        </p>
      )}
      <nav style={navStyle}>
        <Link to={`/android/app/${app.id}/privacy`}>Privacy policy</Link>
        <span style={sepStyle}> · </span>
        <Link to={`/android/app/${app.id}/terms`}>Terms and conditions</Link>
      </nav>
    </>
  )
}

const backStyle = { marginBottom: '1rem', fontSize: '0.875rem' }
const h1Style = { margin: '0 0 0.75rem', fontSize: '1.5rem' }
const descStyle = { margin: '0 0 1rem', color: '#4b5563' }
const navStyle = { marginTop: '1.5rem' }
const sepStyle = { color: '#9ca3af' }

import { Link } from 'react-router-dom'
import appsData from '../data/apps.json'
import AppCard from '../components/AppCard'

export default function Home() {
  return (
    <>
      <p style={backStyle}>
        <Link to="/">← Back to home</Link>
      </p>
      <h1 style={h1Style}>Android Apps</h1>
      <p style={introStyle}>
        Mobile apps for Android developed by Outlier Software.
      </p>
      <section style={listStyle}>
        {appsData.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    </>
  )
}

const backStyle = { marginBottom: '1rem', fontSize: '0.875rem' }
const h1Style = { margin: '0 0 0.5rem', fontSize: '1.75rem' }
const introStyle = { margin: '0 0 1.5rem', color: '#6b7280' }
const listStyle = { marginTop: '1rem' }

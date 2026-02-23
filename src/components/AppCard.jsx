import { Link } from 'react-router-dom'

export default function AppCard({ app }) {
  return (
    <article style={cardStyle}>
      <div>
        <h2 style={titleStyle}>
          <Link to={`/android/app/${app.id}`} style={linkStyle}>
            {app.name}
          </Link>
        </h2>
        <p style={descStyle}>{app.shortDescription}</p>
        <Link to={`/android/app/${app.id}`} style={moreStyle}>
          View details →
        </Link>
      </div>
    </article>
  )
}

const cardStyle = {
  padding: '1.25rem',
  background: '#fff',
  borderRadius: 8,
  border: '1px solid #e5e7eb',
  marginBottom: '1rem',
}

const titleStyle = {
  margin: '0 0 0.5rem',
  fontSize: '1.25rem',
}

const linkStyle = {
  color: '#1a1a1a',
}

const descStyle = {
  margin: '0 0 0.75rem',
  color: '#4b5563',
  fontSize: '0.9375rem',
}

const moreStyle = {
  fontSize: '0.875rem',
}

import { Link } from 'react-router-dom'

export default function CategoryCard({ category }) {
  const cardContent = (
    <>
      <h2 style={titleStyle}>{category.name}</h2>
      <p style={descStyle}>{category.shortDescription}</p>
      {category.active ? (
        <Link to={`/${category.path}`} style={moreStyle}>
          View projects →
        </Link>
      ) : (
        <span style={soonStyle}>Coming soon</span>
      )}
    </>
  )

  if (category.active) {
    return (
      <Link to={`/${category.path}`} style={cardLinkStyle}>
        <article style={cardStyle}>{cardContent}</article>
      </Link>
    )
  }

  return (
    <article style={{ ...cardStyle, ...cardDisabledStyle }}>
      {cardContent}
    </article>
  )
}

const cardStyle = {
  padding: '1.25rem',
  background: '#fff',
  borderRadius: 8,
  border: '1px solid #e5e7eb',
  marginBottom: '1rem',
  display: 'block',
}

const cardLinkStyle = {
  textDecoration: 'none',
  color: 'inherit',
}

const cardDisabledStyle = {
  opacity: 0.8,
}

const titleStyle = {
  margin: '0 0 0.5rem',
  fontSize: '1.25rem',
}

const descStyle = {
  margin: '0 0 0.75rem',
  color: '#4b5563',
  fontSize: '0.9375rem',
}

const moreStyle = {
  fontSize: '0.875rem',
}

const soonStyle = {
  fontSize: '0.875rem',
  color: '#9ca3af',
}

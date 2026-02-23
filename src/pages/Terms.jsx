import { useParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { getMarkdown } from '../content/loadMarkdown'
import appsData from '../data/apps.json'

export default function Terms() {
  const { id } = useParams()
  const app = appsData.find((a) => a.id === id)
  const raw = getMarkdown(id, 'terms')

  if (!app) {
    return (
      <div>
        <p>App not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  const html = raw ? marked(raw, { gfm: true }) : '<p>Terms and conditions not available.</p>'

  return (
    <>
      <p style={backStyle}>
        <Link to={`/android/app/${id}`}>← Back to {app.name}</Link>
      </p>
      <article
        style={articleStyle}
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

const backStyle = { marginBottom: '1rem', fontSize: '0.875rem' }
const articleStyle = {
  maxWidth: '65ch',
  lineHeight: 1.6,
}

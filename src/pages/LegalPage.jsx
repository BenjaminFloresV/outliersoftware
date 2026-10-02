import { useParams, useSearchParams, Link } from 'react-router-dom'
import { marked } from 'marked'
import { getMarkdown } from '../content/loadMarkdown'
import { LANGUAGES, resolveLanguage } from '../content/languages'
import appsData from '../data/apps.json'

const NOT_AVAILABLE = {
  privacy: 'Privacy policy not available.',
  terms: 'Terms and conditions not available.',
  'delete-account': 'Account deletion instructions not available.',
}

const BACK_TO = { en: 'Back to', es: 'Volver a', pt: 'Voltar para' }

// doc is the markdown file name: privacy, terms or delete-account.
export default function LegalPage({ doc }) {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const app = appsData.find((a) => a.id === id)

  if (!app) {
    return (
      <div>
        <p>App not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  const lang = resolveLanguage(searchParams.get('lang'), navigator.languages ?? [navigator.language])
  const raw = getMarkdown(id, doc, lang)
  const html = raw ? marked(raw, { gfm: true }) : `<p>${NOT_AVAILABLE[doc]}</p>`

  return (
    <>
      <p style={backStyle}>
        <Link to={`/android/app/${id}`}>← {BACK_TO[lang]} {app.name}</Link>
      </p>
      <nav style={langNavStyle} aria-label="Language">
        {LANGUAGES.map((l, i) => (
          <span key={l.code}>
            {i > 0 && <span style={sepStyle}> · </span>}
            {l.code === lang ? (
              <strong>{l.label}</strong>
            ) : (
              <Link to={{ search: `?lang=${l.code}` }} lang={l.code}>
                {l.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <article
        lang={lang}
        style={articleStyle}
        className="markdown-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  )
}

const backStyle = { marginBottom: '1rem', fontSize: '0.875rem' }
const langNavStyle = { marginBottom: '1rem', fontSize: '0.875rem' }
const sepStyle = { color: '#9ca3af' }
const articleStyle = {
  maxWidth: '65ch',
  lineHeight: 1.6,
}

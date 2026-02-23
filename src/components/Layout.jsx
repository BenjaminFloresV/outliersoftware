import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <>
      <header style={headerStyle}>
        <Link to="/" style={logoLinkStyle}>
          <img
            src={`${import.meta.env.BASE_URL}outlier-software-logo-min.webp`}
            alt="Outlier Software"
            style={logoImgStyle}
          />
        </Link>
        <nav>
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </nav>
      </header>
      <main style={mainStyle}>
        {children}
      </main>
      <footer style={footerStyle}>
        <p>Outlier Software — Mobile and software development</p>
      </footer>
    </>
  )
}

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 1.5rem',
  background: '#fff',
  borderBottom: '1px solid #e5e7eb',
}

const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  color: 'inherit',
  textDecoration: 'none',
}
const logoImgStyle = {
  height: 40,
  width: 'auto',
  display: 'block',
}

const navLinkStyle = {
  marginLeft: '1rem',
}

const mainStyle = {
  maxWidth: 900,
  margin: '0 auto',
  padding: '1.5rem',
  minHeight: 'calc(100vh - 120px)',
}

const footerStyle = {
  padding: '1rem 1.5rem',
  textAlign: 'center',
  background: '#f3f4f6',
  color: '#6b7280',
  fontSize: '0.875rem',
}

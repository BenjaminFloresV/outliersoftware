import categoriesData from '../data/categories.json'
import CategoryCard from '../components/CategoryCard'

export default function CategoryHome() {
  return (
    <>
      <div style={heroStyle}>
        <img
          src={`${import.meta.env.BASE_URL}outlier-software-logo-min.webp`}
          alt="Outlier Software"
          style={heroLogoStyle}
        />
      </div>
      <h1 style={h1Style}>Outlier Software</h1>
      <p style={introStyle}>
        Types of software development we offer.
      </p>
      <section style={listStyle}>
        {categoriesData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </section>
    </>
  )
}

const heroStyle = { textAlign: 'center', marginBottom: '1.5rem' }
const heroLogoStyle = { height: 100, width: 'auto', maxWidth: '100%' }
const h1Style = { margin: '0 0 0.5rem', fontSize: '1.75rem' }
const introStyle = { margin: '0 0 1.5rem', color: '#6b7280' }
const listStyle = { marginTop: '1rem' }

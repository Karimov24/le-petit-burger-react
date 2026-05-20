import { useState, useEffect } from 'react'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import './Header.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

function Header({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = []
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <a href="#" className="header__logo">
          Le Petit Burger
        </a>

        <button
          className="header__hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`header__nav${menuOpen ? ' header__nav--open' : ''}`}>
          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? 'header__link--active' : ''}
              onClick={(e) => handleNavClick(e, id)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href="#menu" className="header__cta" onClick={(e) => handleNavClick(e, 'menu')}>
            Order Online
          </a>
          <button className="header__cart" onClick={onCartOpen} aria-label="Open cart">
            <FaShoppingCart />
            {totalItems > 0 && <span className="header__cart-badge">{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
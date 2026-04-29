import { useState, useEffect } from 'react'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import './Header.css'

function Header({ onCartOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
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
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a href="#menu" onClick={(e) => handleNavClick(e, 'menu')}>Menu</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
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
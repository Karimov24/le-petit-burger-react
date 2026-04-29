import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <h3 className="footer__logo">Le Petit Burger</h3>
          <p className="footer__tagline">
            Good food, good mood. Visit us at any of our four New York locations.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" className="footer__social" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" className="footer__social" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" className="footer__social" aria-label="TikTok"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>Home</a></li>
            <li><a href="#menu" onClick={(e) => { e.preventDefault(); scrollTo('menu') }}>Menu</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollTo('gallery') }}>Gallery</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Business Hours</h4>
          <ul className="footer__hours">
            <li>Mon – Thu: 10:00 AM – 10:00 PM</li>
            <li>Fri – Sat: 10:00 AM – 12:00 AM</li>
            <li>Sunday: 11:00 AM – 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 Le Petit Burger Restaurant. All rights reserved. | Designed with ❤️ in New York</p>
      </div>
    </footer>
  )
}

export default Footer
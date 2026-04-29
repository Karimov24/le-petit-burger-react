import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <p className="section-tag">Contact Us</p>
        <h2 className="section-heading">Get In Touch</h2>

        <div className="contact__grid">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />
            </div>
            <button type="submit" className="contact__submit">
              Send Message ✈
            </button>
            {sent && <p className="contact__success">Message sent successfully!</p>}
          </form>

          <div className="contact__info">
            <div className="contact__detail">
              <FaMapMarkerAlt className="contact__icon" />
              <span>123 Burger Lane, Inwood, NY 10034</span>
            </div>
            <div className="contact__detail">
              <FaPhone className="contact__icon" />
              <span>+1 (212) 555-0199</span>
            </div>
            <div className="contact__detail">
              <FaEnvelope className="contact__icon" />
              <span>hello@LePetitBurger.com</span>
            </div>

            <div className="contact__map">
              <iframe
                title="Le Petit Burger Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.9!2d-73.92!3d40.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUyJzEyLjAiTiA3M8KwNTUnMTIuMCJX!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: 'var(--radius)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
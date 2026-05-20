import { FaCheck } from 'react-icons/fa'
import './About.css'

const checks = [
  '100% Halal certified meat',
  'No artificial preservatives',
  'Locally sourced produce',
  'Family-friendly environment',
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__img-wrap">
          <img src="/gallery1.jpg" alt="Burger" className="about__img" />
          <span className="about__badge">Est. 2012</span>
        </div>
        <div className="about__text">
          <p className="section-tag">Our Story</p>
          <h2 className="section-heading">Passion on a Bun</h2>
          <p>
            Le Petit Burger was born in 2012 from a small street food stand tucked
            along a lively corner in New York. Inspired by the charm of French
            bistros, our founder, Antoine Laurent, had a simple vision: bring
            together the elegance of French flavors with the comfort of classic
            burgers.
          </p>
          <p>
            What began as a humble weekend stand quickly became a local favorite,
            growing into several cozy spots across the city. Every burger is
            carefully crafted with fresh ingredients, every bun is baked daily,
            and every sauce is prepared from Antoine's original recipes — first
            written in a small notebook that still sits proudly in our kitchen
            today.
          </p>
          <p>
            At Le Petit Burger, we believe great food doesn't need to be
            complicated — just honest ingredients, thoughtful preparation, and a
            touch of French passion in every bite.
          </p>
          <ul className="about__checks">
            {checks.map((c, i) => (
              <li key={i}>
                <FaCheck className="about__check-icon" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
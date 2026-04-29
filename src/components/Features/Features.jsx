import { FaUtensils, FaTruck, FaStar } from 'react-icons/fa'
import './Features.css'

const features = [
  {
    icon: <FaUtensils />,
    title: 'Fresh Ingredients',
    desc: 'We source locally every morning to keep your meal as fresh as it gets.',
  },
  {
    icon: <FaTruck />,
    title: 'Fast Delivery',
    desc: 'Hot food at your door in 30 minutes or your next order is free.',
  },
  {
    icon: <FaStar />,
    title: 'Top Rated',
    desc: '4.9 ⭐ on Google with over 2,000 happy customers and counting.',
  },
]

function Features() {
  return (
    <section className="features" id="features">
      <div className="features__inner">
        {features.map((f, i) => (
          <div className="features__card" key={i}>
            <div className="features__icon">{f.icon}</div>
            <h3 className="features__title">{f.title}</h3>
            <p className="features__desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
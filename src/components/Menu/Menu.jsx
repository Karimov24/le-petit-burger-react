import { useState } from 'react'
import { menuItems, categories, categoryLabels } from '../../data/menuData'
import MenuCard from './MenuCard'
import './Menu.css'

function Menu() {
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === active)

  return (
    <section className="menu" id="menu">
      <div className="menu__inner">
        <p className="section-tag">Our Menu</p>
        <h2 className="section-heading">Pick Your Favourite</h2>

        <div className="menu__tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`menu__tab${active === cat ? ' menu__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
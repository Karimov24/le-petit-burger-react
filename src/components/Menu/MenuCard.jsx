import { useState } from 'react'
import { useCart } from '../../context/CartContext'

function MenuCard({ item }) {
  const { addItem } = useCart()
  const [imgError, setImgError] = useState(false)

  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price })
  }

  return (
    <div className="menu-card">
      <div className="menu-card__img">
        {imgError ? (
          <div className="menu-card__placeholder">{item.name}</div>
        ) : (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__desc">{item.desc}</p>
        <div className="menu-card__footer">
          <span className="menu-card__price">${item.price.toFixed(2)}</span>
          <button className="menu-card__add" onClick={handleAdd}>
            Add +
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuCard
import { useCart } from '../../context/CartContext'

function CartItem({ item }) {
  const { increment, decrement, removeItem } = useCart()

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <h4 className="cart-item__name">{item.name}</h4>
        <p className="cart-item__price">
          ${item.price.toFixed(2)} × {item.quantity}
        </p>
      </div>
      <div className="cart-item__controls">
        <button className="cart-item__btn" onClick={() => decrement(item.id)}>-</button>
        <span className="cart-item__qty">{item.quantity}</span>
        <button className="cart-item__btn" onClick={() => increment(item.id)}>+</button>
      </div>
      <div className="cart-item__subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <button className="cart-item__remove" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </div>
  )
}

export default CartItem
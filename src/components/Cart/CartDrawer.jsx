import { FaTimes } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
import './Cart.css'

function CartDrawer({ open, onClose }) {
  const { items, totalPrice, clearCart } = useCart()

  return (
    <>
      {open && <div className="cart-overlay" onClick={onClose} />}
      <div className={`cart-drawer${open ? ' cart-drawer--open' : ''}`}>
        <div className="cart-drawer__header">
          <h3>Your Cart</h3>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">
            <FaTimes />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <p className="cart-drawer__empty">Your cart is empty</p>
          ) : (
            items.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total">
              <span>Total:</span>
              <span className="cart-drawer__total-price">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-drawer__actions">
              <button className="cart-drawer__clear" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="cart-drawer__checkout" onClick={() => alert('Checkout coming soon!')}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
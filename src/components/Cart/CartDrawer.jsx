import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'
import CartItem from './CartItem'
import './Cart.css'

function CartDrawer({ open, onClose }) {
  const { items, totalPrice, clearCart } = useCart()
  const [checkingOut, setCheckingOut] = useState(false)
  const [orderStatus, setOrderStatus] = useState(null)

  const handleCheckout = async () => {
    if (items.length === 0) return

    setCheckingOut(true)
    setOrderStatus(null)

    const cartId = localStorage.getItem('lpb_cart_id')

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(({ id, name, price, quantity }) => ({ name, price, quantity })),
          totalPrice,
          cartId,
        }),
      })

      if (!res.ok) throw new Error('Order failed')

      setOrderStatus('success')
      clearCart()
    } catch {
      setOrderStatus('error')
    } finally {
      setCheckingOut(false)
    }
  }

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

        {orderStatus === 'success' && (
          <p className="cart-drawer__success">Order placed successfully!</p>
        )}
        {orderStatus === 'error' && (
          <p className="cart-drawer__error">Something went wrong. Please try again.</p>
        )}

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
              <button className="cart-drawer__checkout" onClick={handleCheckout} disabled={checkingOut}>
                {checkingOut ? 'Placing Order...' : 'Checkout'}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
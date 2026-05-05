import { createContext, useContext, useReducer, useEffect, useCallback, useRef } from 'react';

const CartContext = createContext();

const CART_ID_KEY = 'lpb_cart_id';

function getCartId() {
  return localStorage.getItem(CART_ID_KEY);
}

function setCartId(id) {
  localStorage.setItem(CART_ID_KEY, id);
}

function clearCartId() {
  localStorage.removeItem(CART_ID_KEY);
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.payload),
      };
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case 'DECREMENT': {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity === 1) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.payload),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i
        ),
      };
    }
    case 'CLEAR':
      return { ...state, items: [] };
    case 'LOAD_ITEMS':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

async function syncCartToServer(cartId, items) {
  try {
    await fetch(`/api/cart/${cartId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
  } catch {
    // Silently fail — local state is the source of truth
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Load cart from server on mount
  useEffect(() => {
    const cartId = getCartId();
    if (cartId) {
      fetch(`/api/cart/${cartId}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.items?.length) {
            dispatch({ type: 'LOAD_ITEMS', payload: data.items });
          }
        })
        .catch(() => {});
    }
  }, []);

  const persistAndDispatch = useCallback((action) => {
    dispatch(action);
    // We need to compute the new items after the action is applied.
    // Instead of duplicating reducer logic, we sync on next tick via useEffect below.
  }, []);

  // Sync to server whenever items change (skip initial load)
  const itemsRef = useRef(state.items);
  useEffect(() => {
    const cartId = getCartId();
    if (!cartId || state.items === itemsRef.current) return;
    itemsRef.current = state.items;
    syncCartToServer(cartId, state.items);
  }, [state.items]);

  const ensureCartId = useCallback(async () => {
    let cartId = getCartId();
    if (!cartId) {
      cartId = crypto.randomUUID();
      setCartId(cartId);
      try {
        await fetch('/api/cart', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cartId, items: [] }),
        });
      } catch {}
    }
    return cartId;
  }, []);

  const addItem = useCallback(async (item) => {
    await ensureCartId();
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, [ensureCartId]);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const increment = useCallback((id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  }, []);

  const decrement = useCallback((id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  }, []);

  const clearCart = useCallback(async () => {
    dispatch({ type: 'CLEAR' });
    const cartId = getCartId();
    if (cartId) {
      try {
        await fetch(`/api/cart/${cartId}`, { method: 'DELETE' });
      } catch {}
    }
  }, []);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem,
        removeItem,
        increment,
        decrement,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
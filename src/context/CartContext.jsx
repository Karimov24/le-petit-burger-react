import { createContext, useContext, useReducer, useCallback, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'lpb_cart';

function loadCart() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage full or unavailable — local state still works
  }
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
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] }, () => ({
    items: loadCart(),
  }));

  useEffect(() => {
    saveCart(state.items);
  }, [state.items]);

  const addItem = useCallback((item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  }, []);

  const removeItem = useCallback((id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  }, []);

  const increment = useCallback((id) => {
    dispatch({ type: 'INCREMENT', payload: id });
  }, []);

  const decrement = useCallback((id) => {
    dispatch({ type: 'DECREMENT', payload: id });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
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
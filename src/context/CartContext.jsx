import { createContext, useState } from "react";

// context creation
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // cart will store array of items
  const [cart, setCart] = useState([]);

  // function to add item in cart
  const addToCart = (product) => {
    // check if product already exists
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      // if already exists increase quantity
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      // else add new item
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

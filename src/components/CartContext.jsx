import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
  });

   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
  setCart([]);
  localStorage.removeItem("cart"); 
  };
  const addToCart = (item) => {
    setCart((prev) => {
      const exist = prev.find((i) => i.name === item.name);
      if (exist) {
        return prev.map((i) =>
          i.name === item.name ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === item.name ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalAmount, totalItems,clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
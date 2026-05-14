// import { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(() => {
//   const savedCart = localStorage.getItem("cart");
//   return savedCart ? JSON.parse(savedCart) : [];
//   });

//    useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const clearCart = () => {
//   setCart([]);
//   localStorage.removeItem("cart"); 
//   };
//   const addToCart = (item) => {
//     setCart((prev) => {
//       const exist = prev.find((i) => i.name === item.name);
//       if (exist) {
//         return prev.map((i) =>
//           i.name === item.name ? { ...i, qty: i.qty + 1 } : i
//         );
//       }
//       return [...prev, { ...item, qty: 1 }];
//     });
//   };

//   const removeFromCart = (item) => {
//     setCart((prev) =>
//       prev
//         .map((i) =>
//           i.name === item.name ? { ...i, qty: i.qty - 1 } : i
//         )
//         .filter((i) => i.qty > 0)
//     );
//   };

//   const totalAmount = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, totalAmount, totalItems,clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);


//-------------------------------------------------------------------------------------------------------------------------------------//


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

  // const clearCart = () => {
  // setCart([]);
  // localStorage.removeItem("cart"); 
  // };

  // ADD TO CART
  const addToCart = (food) => {
    const existingItem = cart.find(
      (item) => item.name === food.name
    );

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === food.name
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  // INCREASE QTY
  const increaseQty = (name) => {
    setCart(
      cart.map((item) =>
        item.name === name
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (name) => {
    setCart(
      cart
        .map((item) =>
          item.name === name
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // TOTAL AMOUNT
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  // TOTAL ITEMS
  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        clearCart,
        totalAmount,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
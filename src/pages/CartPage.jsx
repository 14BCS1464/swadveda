// pages/CartPage.jsx
import React from 'react';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: 'Turmeric', price: 5.99, quantity: 2 },
    { id: 2, name: 'Cumin', price: 4.99, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price} x {item.quantity}</p>
          </div>
        ))}
      </div>
      <h2>Total: ${total.toFixed(2)}</h2>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
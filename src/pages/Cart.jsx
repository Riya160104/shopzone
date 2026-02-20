import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2 style={{ marginBottom: "30px", color: "#ec4899" }}>
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ color: "#e5e7eb" }}>No items added yet.</p>
      ) : (
        <>
          {cart.map(item => (
            <div
              key={item.id}
              style={{
                background: "#1e293b",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <div>
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>

              <h4>${item.price * item.quantity}</h4>
            </div>
          ))}

          <div style={{
            marginTop: "30px",
            padding: "20px",
            background: "#ec4899",
            borderRadius: "10px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "18px"
          }}>
            Total: ${totalPrice}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

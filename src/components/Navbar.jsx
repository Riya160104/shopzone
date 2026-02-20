import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 40px",
      background: "#1e293b"
    }}>
      <h2 style={{ color: "#ec4899" }}>ShopZone</h2>

      <div style={{ display: "flex", gap: "30px", fontSize: "16px" }}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
}

export default Navbar;

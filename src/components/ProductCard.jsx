import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div style={{
      background: "#1e293b",
      padding: "15px",
      borderRadius: "12px",
      transition: "0.3s"
    }}>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h3 style={{ marginTop: "10px" }}>{product.title}</h3>
      <p style={{ color: "#f59e0b" }}>${product.price}</p>

      <Link to={`/product/${product.id}`}>
        <button style={{ marginTop: "10px" }}>View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;

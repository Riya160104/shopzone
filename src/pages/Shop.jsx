import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);

  // fetching products from dummyjson API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;

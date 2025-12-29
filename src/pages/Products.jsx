import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../index.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fakestore = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    fakestore();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Fake API Store</h1>
      <div className="container">
        {data.map(item => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!product) {
      axios.get("https://fakestoreapi.com/products")
        .then(res => setProducts(res.data))
        .catch(err => console.error("Erro ao buscar produtos:", err));
    }
  }, [product]);

  const allProducts = product ? [product] : products;

  return (
    <div className="p-grid p-nogutter">
      {allProducts.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
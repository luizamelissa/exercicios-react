import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import { Panel } from "primereact/panel";

const App = () => {
  const [newProducts, setNewProducts] = useState([]);

  const handleAddProduct = (product) => {
    setNewProducts((prev) => [product, ...prev]);
  };

  return (
    <div className="p-m-4" style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      <div className="p-d-flex p-jc-center p-mb-4">
        <h1 style={{ color: "#007ad9", fontFamily: "'Segoe UI', sans-serif" }}>Loja Virtual</h1>
      </div>

      <Panel header="Adicionar Produto" className="p-mb-5" style={{ maxWidth: "1000px", margin: "auto" }}>
        <ProductForm onAddProduct={handleAddProduct} />
      </Panel>

      <div className="p-grid p-nogutter" style={{ maxWidth: "1200px", margin: "auto" }}>
        {newProducts.map((product) => (
          <ProductList key={product.id} product={product} />
        ))}
      </div>

      <div className="p-d-flex p-jc-center p-mt-5">
        <h2 style={{ color: "#333", fontFamily: "'Segoe UI', sans-serif" }}>Produtos da API</h2>
      </div>

      <ProductList />
    </div>
  );
};

export default App;
import React from "react";
import { Card } from "primereact/card";

const ProductCard = ({ product }) => {
  return (
    <div className="p-col-12 p-md-6 p-lg-4 p-p-2">
      <Card
        title={product.title}
        subTitle={`$ ${product.price}`}
        className="p-shadow-5"
        style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#fff" }}
      >
        <div className="p-d-flex p-jc-center p-mb-3">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "150px", height: "150px", objectFit: "contain", borderRadius: "8px" }}
          />
        </div>
        <p style={{ fontSize: "0.9rem", color: "#555", minHeight: "60px" }}>{product.description}</p>
        <button className="p-button p-component p-button-rounded p-button-success p-d-block p-mt-2" style={{ width: "100%" }}>
          Comprar
        </button>
      </Card>
    </div>
  );
};

export default ProductCard;
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const ProductForm = ({ onAddProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !price) return alert("Título e preço são obrigatórios!");

    onAddProduct({
      id: Date.now(),
      title,
      price,
      description,
      image: image || "https://via.placeholder.com/150",
    });

    setTitle("");
    setPrice("");
    setDescription("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-fluid p-formgrid p-grid">
      <div className="p-field p-col-12 p-md-3">
        <InputText placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="p-field p-col-12 p-md-2">
        <InputText type="number" placeholder="Preço" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div className="p-field p-col-12 p-md-4">
        <InputText placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="p-field p-col-12 p-md-3">
        <InputText placeholder="URL da imagem" value={image} onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className="p-field p-col-12">
        <Button label="Adicionar Produto" icon="pi pi-plus" className="p-button-success p-button-rounded" type="submit" />
      </div>
    </form>
  );
};

export default ProductForm;
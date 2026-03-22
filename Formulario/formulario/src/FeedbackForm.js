import { useState } from "react";
import "./Formulario.css";

function FeedbackForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !email || !comentario) {
      alert("Preencha todos os campos!");
      return;
    }

    alert(`Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`);

    setNome("");
    setEmail("");
    setComentario("");
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Formulário</h2>

        <input
          type="text"
          placeholder="Seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Seu comentário"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

import "../styles/login.css"; 

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert(`Usuário: ${username}\nSenha: ${password}`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <InputText
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Password
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          toggleMask
        />
        <Button label="Entrar" onClick={handleLogin} />
      </div>
    </div>
  );
}
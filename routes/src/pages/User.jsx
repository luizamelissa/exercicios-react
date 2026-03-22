import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>Perfil do usuário: {id}</h1>;
}

export default User;
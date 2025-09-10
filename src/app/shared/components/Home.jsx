import { Link } from "react-router-dom";

export default function Home() {
  const buttonStyle = {
    display: "inline-block",
    margin: "10px",
    padding: "15px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "0.3s",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>🎬 Bienvenido a la App de Películas</h1>
      <p>Selecciona un módulo para comenzar:</p>

      <div>
        <Link to="/generos" style={buttonStyle}>🎬 Géneros</Link>
        <Link to="/directores" style={buttonStyle}>🎥 Directores</Link>
        <Link to="/productoras" style={buttonStyle}>🏢 Productoras</Link>
        <Link to="/tipos" style={buttonStyle}>📺 Tipos</Link>
        <Link to="/media" style={buttonStyle}>🍿 Media</Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Navbar() {
  const style = { padding: "10px", background: "#222", color: "#fff" };
  const linkStyle = { marginRight: "15px", color: "#fff", textDecoration: "none" };

  return (
    <nav style={style}>
      <Link to="/" style={linkStyle}>🏠 Home</Link>
      <Link to="/generos" style={linkStyle}>🎬 Géneros</Link>
      <Link to="/directores" style={linkStyle}>🎥 Directores</Link>
      <Link to="/productoras" style={linkStyle}>🏢 Productoras</Link>
      <Link to="/tipos" style={linkStyle}>📺 Tipos</Link>
      <Link to="/media" style={linkStyle}>🍿 Media</Link>
    </nav>
  );
}

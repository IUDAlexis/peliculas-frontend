import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar fijo a la izquierda */}
      <Sidebar />
      
      {/* Contenido principal */}
      <main className="main-content" style={{
        flex: 1,
        backgroundColor: "#f8f9fa",
        padding: "2rem",
        marginLeft: "260px", // Espacio para el sidebar fijo
        overflow: "auto",
        minHeight: "100vh"
      }}>
        {children}
      </main>
    </div>
  );
}

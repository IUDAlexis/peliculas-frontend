import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", label: "Inicio", icon: "🏠" },
    { path: "/media", label: "Películas", icon: "🎬" },
    { path: "/generos", label: "Géneros", icon: "🎭" },
    { path: "/productoras", label: "Productoras", icon: "🏢" },
    { path: "/directores", label: "Directores", icon: "🎥" },
    { path: "/tipos", label: "Tipos", icon: "📺" }
  ];

  const sidebarStyle = {
    width: "260px",
    backgroundColor: "#ffffff",
    color: "#2c3e50",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px 0 10px rgba(0,0,0,0.1)",
    position: "fixed",
    height: "100vh",
    left: "0",
    top: "0",
    zIndex: 1000,
    transition: "transform 0.3s ease",
    borderRight: "1px solid #e1e8ed"
  };

  const headerStyle = {
    padding: "1.5rem",
    borderBottom: "1px solid #e1e8ed",
    marginBottom: "1rem"
  };

  const titleStyle = {
    margin: "0",
    fontSize: "1.4rem",
    fontWeight: "600",
    color: "#2c3e50"
  };

  const menuStyle = {
    flex: 1,
    padding: "0 1rem"
  };

  const menuItemStyle = (isActive) => ({
    display: "flex",
    alignItems: "center",
    padding: "0.75rem 1rem",
    color: isActive ? "#3498db" : "#5a6c7d",
    textDecoration: "none",
    borderRadius: "6px",
    margin: "0.25rem 0",
    transition: "all 0.3s ease",
    backgroundColor: isActive ? "#f0f8ff" : "transparent",
    fontSize: "0.95rem",
    fontWeight: isActive ? "500" : "400"
  });

  const iconStyle = {
    marginRight: "0.75rem",
    fontSize: "1.1rem",
    width: "20px",
    textAlign: "center"
  };

  const configSectionStyle = {
    borderTop: "1px solid #e1e8ed",
    padding: "1rem"
  };

  return (
    <div className="sidebar" style={sidebarStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h2 style={titleStyle}>Panel de Control</h2>
      </div>

      {/* Menu Items */}
      <nav style={menuStyle}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={menuItemStyle(isActive)}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.target.style.backgroundColor = "#f5f7fa";
                  e.target.style.color = "#2c3e50";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#5a6c7d";
                }
              }}
            >
              <span style={iconStyle}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Configuration Section */}
      <div style={configSectionStyle}>
        <div style={{
          display: "flex",
          alignItems: "center",
          padding: "0.75rem 1rem",
          color: "#5a6c7d",
          fontSize: "0.95rem",
          cursor: "pointer",
          borderRadius: "6px",
          transition: "all 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#f5f7fa";
          e.target.style.color = "#2c3e50";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "#5a6c7d";
        }}>
          <span style={iconStyle}>⚙️</span>
          Configuración
        </div>
      </div>
    </div>
  );
}

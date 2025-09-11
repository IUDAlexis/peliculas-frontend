import { Link } from "react-router-dom";

export default function Home() {
  const statsCards = [
    { title: "Películas", count: "1200", color: "#3498db" },
    { title: "Series", count: "800", color: "#9b59b6" },
    { title: "Géneros", count: "20", color: "#e74c3c" },
    { title: "Productoras", count: "50", color: "#2ecc71" }
  ];

  const quickAccessItems = [
    {
      title: "Gestionar Películas",
      description: "Añadir, editar o eliminar películas de la base de datos.",
      link: "/media",
      category: "PELÍCULAS",
      color: "#3498db",
      icon: "🎬"
    },
    {
      title: "Gestionar Series",
      description: "Añadir, editar o eliminar series de la base de datos.",
      link: "/media",
      category: "SERIES", 
      color: "#9b59b6",
      icon: "📺"
    },
    {
      title: "Gestionar Géneros",
      description: "Añadir, editar o eliminar géneros de la base de datos.",
      link: "/generos",
      category: "GÉNEROS",
      color: "#2ecc71",
      icon: "🎭"
    },
    {
      title: "Gestionar Productoras",
      description: "Añadir, editar o eliminar productoras de la base de datos.",
      link: "/productoras",
      category: "PRODUCTORAS",
      color: "#e67e22",
      icon: "🏢"
    }
  ];

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    margin: "1rem",
    minWidth: "200px",
    textAlign: "center",
    border: "1px solid #e1e8ed"
  };

  const quickAccessStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    margin: "1rem",
    textDecoration: "none",
    color: "inherit",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    display: "block",
    border: "1px solid #e1e8ed"
  };

  return (
    <div>
      <header style={{ marginBottom: "2rem" }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "600", 
          color: "#2c3e50", 
          marginBottom: "0.5rem" 
        }}>
          Panel de Control
        </h1>
      </header>

      {/* Stats Cards */}
      <section style={{ marginBottom: "3rem" }}>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "1rem",
          justifyContent: "space-between" 
        }}>
          {statsCards.map((stat, index) => (
            <div key={index} style={{
              ...cardStyle,
              borderTop: `4px solid ${stat.color}`,
              flex: "1",
              minWidth: "200px"
            }}>
              <h3 style={{ 
                margin: "0 0 0.5rem 0", 
                color: "#7f8c8d", 
                fontSize: "1rem",
                textTransform: "uppercase",
                fontWeight: "500"
              }}>
                {stat.title}
              </h3>
              <p style={{ 
                margin: "0", 
                fontSize: "2.5rem", 
                fontWeight: "600", 
                color: stat.color 
              }}>
                {stat.count}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section>
        <h2 style={{ 
          fontSize: "1.8rem", 
          fontWeight: "600", 
          color: "#2c3e50",
          marginBottom: "1.5rem"
        }}>
          Accesos Rápidos
        </h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem"
        }}>
          {quickAccessItems.map((item, index) => (
            <Link 
              key={index}
              to={item.link}
              style={quickAccessStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  backgroundColor: item.color,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginRight: "1rem",
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: "0.75rem",
                    color: item.color,
                    fontWeight: "600",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem"
                  }}>
                    {item.category}
                  </div>
                  <h3 style={{
                    margin: "0 0 0.5rem 0",
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#2c3e50"
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    margin: "0",
                    color: "#7f8c8d",
                    fontSize: "0.9rem",
                    lineHeight: "1.4"
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Muebles a Medida
      </h1>

      <p style={{ fontSize: "1.1rem", maxWidth: "600px", marginBottom: "2rem" }}>
        Diseñamos y fabricamos muebles personalizados según tus necesidades.
        Elige medidas, madera y acabados, y solicita tu presupuesto sin
        compromiso.
      </p>

      <Link
        href="/muebles"
        style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#000",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "4px",
          fontSize: "1rem",
        }}
      >
        Ver muebles
      </Link>
    </main>
  );
}
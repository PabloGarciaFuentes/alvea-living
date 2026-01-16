import Link from "next/link";
import { MUEBLES } from "@muebles/domain";


export default function MueblesPage() {
  return (
    <main
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Nuestros muebles
      </h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {MUEBLES.map((mueble) => (
          <li
            key={mueble.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "1.5rem",
              marginBottom: "1rem",
            }}
          >
            <h2 style={{ marginBottom: "0.5rem" }}>{mueble.nombre}</h2>

            <p style={{ marginBottom: "1rem" }}>
              {mueble.descripcion}
            </p>

            <Link
              href={`/configurador/${mueble.id}`}
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "#000",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px",
              }}
            >
              Configurar
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
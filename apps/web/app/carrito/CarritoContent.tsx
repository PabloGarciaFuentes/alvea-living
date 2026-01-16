"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";

export default function CarritoContent() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "3rem" }}>
        <h2>Tu carrito está vacío</h2>
        <p style={{ color: "#666", marginTop: "1rem" }}>
          Añade muebles desde el configurador para solicitar presupuesto
        </p>
        <Link
          href="/muebles"
          style={{
            display: "inline-block",
            marginTop: "2rem",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#000",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          Ver muebles disponibles
        </Link>
      </div>
    );
  }

  const handleSolicitarPresupuesto = () => {
    // TODO: Implementar envío por email
    console.log("Solicitar presupuesto:", items);
    alert("Funcionalidad de envío pendiente de implementar");
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <h1>Tu carrito ({items.length} {items.length === 1 ? "mueble" : "muebles"})</h1>
        <button
          onClick={clearCart}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#fff",
            color: "#dc2626",
            border: "1px solid #dc2626",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Vaciar carrito
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
              padding: "1.5rem",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>{item.nombre}</h3>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginTop: "1rem" }}>
                  <div>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                      Medidas (cm)
                    </p>
                    <p style={{ fontWeight: "500" }}>
                      {item.medidas.ancho} × {item.medidas.alto} × {item.medidas.fondo}
                    </p>
                  </div>
                  
                  <div>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                      Madera
                    </p>
                    <p style={{ fontWeight: "500" }}>{item.madera}</p>
                  </div>
                  
                  <div>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                      Color
                    </p>
                    <p style={{ fontWeight: "500" }}>{item.color}</p>
                  </div>
                  
                  <div>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem", marginBottom: "0.25rem" }}>
                      Cantidad
                    </p>
                    <p style={{ fontWeight: "500" }}>{item.cantidad}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#fff",
                  color: "#dc2626",
                  border: "1px solid #dc2626",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginLeft: "1rem",
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
        }}
      >
        <p style={{ color: "#6b7280", marginBottom: "1rem" }}>
          Los precios se calcularán según tus especificaciones y te enviaremos un presupuesto detallado.
        </p>
        <button
          onClick={handleSolicitarPresupuesto}
          style={{
            width: "100%",
            padding: "1rem",
            backgroundColor: "#000",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          Solicitar presupuesto
        </button>
      </div>
    </div>
  );
}

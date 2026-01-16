"use client";

import { useState } from "react";
import type { MuebleBase } from "@/domain/muebles";

type Props = {
  mueble: MuebleBase;
};

export default function ConfiguradorForm({ mueble }: Props) {
  // Estado de inputs
  const [ancho, setAncho] = useState(mueble.limitesMedidas.ancho.min);
  const [alto, setAlto] = useState(mueble.limitesMedidas.alto.min);
  const [fondo, setFondo] = useState(mueble.limitesMedidas.fondo.min);
  const [madera, setMadera] = useState("");
  const [color, setColor] = useState("");

  // Validación básica
  const medidasValidas =
    ancho >= mueble.limitesMedidas.ancho.min &&
    ancho <= mueble.limitesMedidas.ancho.max &&
    alto >= mueble.limitesMedidas.alto.min &&
    alto <= mueble.limitesMedidas.alto.max &&
    fondo >= mueble.limitesMedidas.fondo.min &&
    fondo <= mueble.limitesMedidas.fondo.max;

  const formularioValido = medidasValidas && madera && color;

  function handleAddToCart() {
    if (!formularioValido) return;

    const configuracion = {
      muebleId: mueble.id,
      nombre: mueble.nombre,
      medidas: { ancho, alto, fondo },
      madera,
      color,
    };

    console.log("Añadido al carrito:", configuracion);
    alert("Mueble añadido al carrito (simulado)");
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h1>{mueble.nombre}</h1>
      <p>{mueble.descripcion}</p>

      <section>
        <h3>Medidas (cm)</h3>
        <label>
          Ancho:
          <input
            type="number"
            value={ancho}
            onChange={(e) => setAncho(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Alto:
          <input
            type="number"
            value={alto}
            onChange={(e) => setAlto(Number(e.target.value))}
          />
        </label>
        <br />
        <label>
          Fondo:
          <input
            type="number"
            value={fondo}
            onChange={(e) => setFondo(Number(e.target.value))}
          />
        </label>
        {!medidasValidas && <p style={{ color: "red" }}>Medidas fuera de rango</p>}
      </section>

      <section>
        <h3>Madera</h3>
        <select value={madera} onChange={(e) => setMadera(e.target.value)}>
          <option value="">Selecciona una madera</option>
          {mueble.maderasDisponibles.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </section>

      <section>
        <h3>Color</h3>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">Selecciona un color</option>
          {mueble.coloresDisponibles.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </section>

      <button
        disabled={!formularioValido}
        onClick={handleAddToCart}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: formularioValido ? "#000" : "#999",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: formularioValido ? "pointer" : "not-allowed",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
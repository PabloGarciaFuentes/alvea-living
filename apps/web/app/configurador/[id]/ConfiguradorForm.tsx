"use client";

import { useState } from "react";
import type { MuebleBase } from "@muebles/domain";
import { useCartStore } from "@/stores/cartStore";
import styles from "./ConfiguradorForm.module.css";

type Props = {
  mueble: MuebleBase;
};

export default function ConfiguradorForm({ mueble }: Props) {
  // Zustand store
  const addItem = useCartStore((state) => state.addItem);

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

    addItem({
      muebleId: mueble.id,
      nombre: mueble.nombre,
      medidas: { ancho, alto, fondo },
      madera,
      color,
    });

    alert("✅ Mueble añadido al carrito");
  }

  return (
    <div className={styles.configuradorContainer}>
      <h1>{mueble.nombre}</h1>
      <p>{mueble.descripcion}</p>

      <section className={styles.section}>
        <h3>Medidas (cm)</h3>
        <label className={styles.formLabel}>
          Ancho:
          <input
            type="number"
            value={ancho}
            onChange={(e) => setAncho(Number(e.target.value))}
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          Alto:
          <input
            type="number"
            value={alto}
            onChange={(e) => setAlto(Number(e.target.value))}
            className={styles.formInput}
          />
        </label>
        <label className={styles.formLabel}>
          Fondo:
          <input
            type="number"
            value={fondo}
            onChange={(e) => setFondo(Number(e.target.value))}
            className={styles.formInput}
          />
        </label>
        {!medidasValidas && <p className={styles.errorMessage}>Medidas fuera de rango</p>}
      </section>

      <section className={styles.section}>
        <h3>Madera</h3>
        <select value={madera} onChange={(e) => setMadera(e.target.value)} className={styles.formSelect}>
          <option value="">Selecciona una madera</option>
          {mueble.maderasDisponibles.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </section>

      <section className={styles.section}>
        <h3>Color</h3>
        <select value={color} onChange={(e) => setColor(e.target.value)} className={styles.formSelect}>
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
        className={styles.submitButton}
      >
        Añadir al carrito
      </button>
    </div>
  );
}
"use client";

import { useState } from "react";
import type { MuebleBase } from "@muebles/domain";
import { useCartStore } from "@/stores/cartStore";
import styles from "./ConfiguradorForm.module.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type Props = {
  mueble: MuebleBase;
};

export default function ConfiguradorForm({ mueble }: Props) {
  // Zustand store
  const addItem = useCartStore((state) => state.addItem);

  // Estado de inputs
  const [ancho, setAncho] = useState(160);
  const [alto, setAlto] = useState(75);
  const [profundo, setProfundo] = useState(45);
  const [madera, setMadera] = useState("Roble");
  const [color, setColor] = useState("Natural");

  function handleAddToCart() {
    addItem({
      muebleId: mueble.id,
      nombre: mueble.nombre,
      medidas: { ancho, alto, fondo: profundo },
      madera,
      color,
    });

    alert("✅ Mueble añadido al carrito");
  }

  return (
    <div className={styles.configuratorForm}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Configura tu mueble</h1>
        <p className={styles.description}>Personaliza las dimensiones de tu aparador modular para que encaje perfectamente en tu espacio.</p>
      </div>
      
      <div className={styles.contentWrapper}>
        <div className={styles.dimensionsSection}>
          {/* Ancho */}
          <div className={styles.dimensionControl}>
            <div className={styles.dimensionHeader}>
              <label className={styles.dimensionLabel}>Ancho</label>
              <span className={styles.dimensionValue}>
                <span id="valAncho">{ancho}</span> 
                <span className={styles.dimensionUnit}>cm</span>
              </span>
            </div>
            <input
              className={styles.rangeInput}
              max="240"
              min="80"
              onChange={(e) => setAncho(Number(e.target.value))}
              step="1"
              type="range"
              value={ancho}
            />
            <div className={styles.rangeLimits}>
              <span>80cm</span>
              <span>240cm</span>
            </div>
          </div>

          {/* Alto */}
          <div className={styles.dimensionControl}>
            <div className={styles.dimensionHeader}>
              <label className={styles.dimensionLabel}>Alto</label>
              <span className={styles.dimensionValue}>
                <span id="valAlto">{alto}</span> 
                <span className={styles.dimensionUnit}>cm</span>
              </span>
            </div>
            <input
              className={styles.rangeInput}
              max="120"
              min="40"
              onChange={(e) => setAlto(Number(e.target.value))}
              step="1"
              type="range"
              value={alto}
            />
            <div className={styles.rangeLimits}>
              <span>40cm</span>
              <span>120cm</span>
            </div>
          </div>

          {/* Profundo */}
          <div className={styles.dimensionControl}>
            <div className={styles.dimensionHeader}>
              <label className={styles.dimensionLabel}>Profundo</label>
              <span className={styles.dimensionValue}>
                <span id="valProfundo">{profundo}</span> 
                <span className={styles.dimensionUnit}>cm</span>
              </span>
            </div>
            <input
              className={styles.rangeInput}
              max="60"
              min="30"
              onChange={(e) => setProfundo(Number(e.target.value))}
              step="1"
              type="range"
              value={profundo}
            />
            <div className={styles.rangeLimits}>
              <span>30cm</span>
              <span>60cm</span>
            </div>
          </div>
        </div>

        {/* Tipo de madera */}
        <div className={styles.optionSection}>
          <label className={styles.optionLabel}>Tipo de madera</label>
          <div className={styles.buttonGroup}>
            <button
              className={`${styles.optionButton} ${madera === "Roble" ? styles.optionButtonActive : ""}`}
              onClick={() => setMadera("Roble")}
            >
              Roble
            </button>
            <button
              className={`${styles.optionButton} ${madera === "Haya" ? styles.optionButtonActive : ""}`}
              onClick={() => setMadera("Haya")}
            >
              Haya
            </button>
            <button
              className={`${styles.optionButton} ${madera === "Pino" ? styles.optionButtonActive : ""}`}
              onClick={() => setMadera("Pino")}
            >
              Pino
            </button>
          </div>
        </div>

        {/* Color */}
        <div className={styles.optionSection}>
          <label className={styles.optionLabel}>Color</label>
          <div className={styles.colorGroup}>
            <div 
              className={`${styles.colorOption} ${color === "Natural" ? styles.colorOptionActive : ""}`}
              onClick={() => setColor("Natural")}
            >
              <div className={`${styles.colorCircle} ${color === "Natural" ? styles.colorNaturalActive : styles.colorNatural}`}></div>
              <span className={`${styles.colorLabel} ${color === "Natural" ? styles.colorLabelActive : ""}`}>Natural</span>
            </div>
            <div 
              className={`${styles.colorOption} ${color === "Blanco" ? styles.colorOptionActive : ""}`}
              onClick={() => setColor("Blanco")}
            >
              <div className={`${styles.colorCircle} ${color === "Blanco" ? styles.colorBlancoActive : styles.colorBlanco}`}></div>
              <span className={`${styles.colorLabel} ${color === "Blanco" ? styles.colorLabelActive : ""}`}>Blanco</span>
            </div>
            <div 
              className={`${styles.colorOption} ${color === "Nogal" ? styles.colorOptionActive : ""}`}
              onClick={() => setColor("Nogal")}
            >
              <div className={`${styles.colorCircle} ${color === "Nogal" ? styles.colorNogalActive : styles.colorNogal}`}></div>
              <span className={`${styles.colorLabel} ${color === "Nogal" ? styles.colorLabelActive : ""}`}>Nogal</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerSection}>
        <div className={styles.priceInfo}>
          <div>
            <p className={styles.priceLabel}>Precio estimado</p>
            <p className={styles.priceValue}>845,00€</p>
          </div>
          <div className={styles.deliveryInfo}>
            <p className={styles.deliveryLabel}>Entrega</p>
            <p className={styles.deliveryTime}>3-4 semanas</p>
          </div>
        </div>
        <button onClick={handleAddToCart} className={styles.addToCartButton}>
          <AddShoppingCartIcon sx={{ marginRight: '0.5rem' }} />
          <span>Añadir al carrito</span>
        </button>
        <p className={styles.brandText}>Diseñado con amor en Cádiz</p>
      </div>
    </div>
  );
}
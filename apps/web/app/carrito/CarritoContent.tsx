"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import styles from "./CarritoContent.module.css";

export default function CarritoContent() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Tu carrito está vacío</h2>
        <p className={styles.emptyMessage}>
          Añade muebles desde el configurador para solicitar presupuesto
        </p>
        <Link
          href="/muebles"
          className={styles.emptyCartLink}
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
      <div className={styles.cartHeader}>
        <h1 className={styles.cartTitle}>Tu carrito ({items.length} {items.length === 1 ? "mueble" : "muebles"})</h1>
        <button
          onClick={clearCart}
          className={styles.clearCartButton}
        >
          Vaciar carrito
        </button>
      </div>

      <div className={styles.cartItems}>
        {items.map((item) => (
          <div
            key={item.id}
            className={styles.cartItem}
          >
            <div className={styles.cartItemHeader}>
              <div className={styles.cartItemContent}>
                <h3 className={styles.cartItemTitle}>{item.nombre}</h3>
                
                <div className={styles.cartItemDetails}>
                  <div className={styles.detailSection}>
                    <p className={styles.detailLabel}>
                      Medidas (cm)
                    </p>
                    <p className={styles.detailValue}>
                      {item.medidas.ancho} × {item.medidas.alto} × {item.medidas.fondo}
                    </p>
                  </div>
                  
                  <div className={styles.detailSection}>
                    <p className={styles.detailLabel}>
                      Madera
                    </p>
                    <p className={styles.detailValue}>{item.madera}</p>
                  </div>
                  
                  <div className={styles.detailSection}>
                    <p className={styles.detailLabel}>
                      Color
                    </p>
                    <p className={styles.detailValue}>{item.color}</p>
                  </div>
                  
                  <div className={styles.detailSection}>
                    <p className={styles.detailLabel}>
                      Cantidad
                    </p>
                    <p className={styles.detailValue}>{item.cantidad}</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className={styles.removeButton}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        className={styles.cartSummary}
      >
        <p>
          Los precios se calcularán según tus especificaciones y te enviaremos un presupuesto detallado.
        </p>
        <button
          onClick={handleSolicitarPresupuesto}
          className={styles.quoteButton}
        >
          Solicitar presupuesto
        </button>
      </div>
    </div>
  );
}

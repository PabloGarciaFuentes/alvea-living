"use client";

import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/stores/cartStore";
import styles from "./CarritoContent.module.css";

// Mapeo de imágenes por tipo de mueble
const FURNITURE_IMAGES: Record<string, string> = {
  aparador: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7JKojzpuAEKF2j-J-Pi7N6Pcm5Oc6LoU3N5lOJaSKos29xB05Fsg4pYa67ggELVCwaO3W05iEaNk3ppuagK8dQysZjwmsBy0uJ57ZnnloUFfRjU4gqS_6WZuUx0E6k2krgJxIjhg_bhHIJBtPBtTjs08ZvUwBU0G3ikkatlxDOT4aFz4K14WOutcYIrVeWszbytZtD16HkiL8yObDbAlaDpaoa_4vkFWItdhDBDo4lltSS-JmvZAwwF5SzAkPuCzmUbfx5X-x_zRk",
  libreria: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFWduIiQHUXhFKiZ_xQUgo2EC0-gDatO4tTqPH74GilVd1mmihuhsGFtoyZ5GMyXGwD0TO5yJ2iOKqLccZh73PnlYcQbVg0ZxgfpGn9arLjBlUK3AIa4DF0VKYMYXQuif3Z_9GFdm0zFytCtG1stS5XqiaK0FjV3b9cML3JD-v2gotVjnn1gbO8SbFEiEgR-FmnwhhwpAV1K8z7dwQoqW2pQrYkv4QFnP2L4rYTBGlMJHCqqou63_4qXlgleP26M_w6of6LVXkn4s",
  "mueble-tv": "https://lh3.googleusercontent.com/aida-public/AB6AXuCXYfWmI46Qr1ul2FLWZGm3XDwdD9hDNKHJM8_gsOoNLUYDKuMtuLbFJzF4cereYDfklU--p7URXGQf9XxeqBVJoSn17WODbaFiR5j3x7BAMuvf5vKVK8FafBvDNZ5P61F3tYU4AxdRtbN8X3jEcIDxKn1BtY8rxIIBuN6mHQwzqKFpxTK9HuPA_BQua46QBLEw1kaLoR8TJaoKU_WdfSw5rfBx5DY94NbaBv3pR2WKmp2UEHF5eg5NM42ktV4pzNfb_NKXjbnu39D9",
  armario: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC5hvMeIDTB1SWNaD8raYRfJGyUD36J703_P0sI3-5gjR4GhS-oiFpuN9OSOWzQj0cxcUfB7CTLZKpvVNiYLexnS2xQ3obOhqZ-CFofS4XHjd6bVoRm1rpWIJ3-qFlpqr9qLSnQNZxSEasWJKLjELwDpn40y8hDTPQLLMjdRcc1JQ8R_VchZg2uzOF84Ed4Kxy2JTzdVUARThcKwKK66QttiNsMwzFVoerpljwV-Cc0RtlEJBmxYpuTTa5FvN0OOONC_YVN9t0F5u_"
};

export default function CarritoContent() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) {
    return (
      <main className={styles.emptyCartMain}>
        <div className={styles.emptyCartContainer}>
          <div className={styles.iconContainer}>
            <div className={styles.iconWrapper}>
              <span className="material-symbols-outlined">
                shopping_cart_off
              </span>
            </div>
            <div className={styles.decorativeCircle1}></div>
            <div className={styles.decorativeCircle2}></div>
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.emptyTitle}>
              Tu carrito está vacío
            </h2>
            <p className={styles.emptyDescription}>
              Parece que aún no has añadido nada a tu selección. <br />
              Explora nuestros diseños modulares y naturales para empezar.
            </p>
          </div>
          <div className={styles.actionContainer}>
            <Link
              className={styles.productsButton}
              href="/muebles"
            >
              Ir a Productos
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleSolicitarPresupuesto = () => {
    // TODO: Implementar envío por email
    const resumen = items.map(item => 
      `${item.nombre} (${item.medidas.ancho}x${item.medidas.alto}x${item.medidas.fondo}cm) - ${item.color}/${item.madera} - Cantidad: ${item.cantidad}`
    ).join('\n');
    
    console.log("Solicitar presupuesto:", items);
    alert(`Presupuesto solicitado para:\n\n${resumen}\n\nFuncionalidad de envío pendiente de implementar`);
  };

  return (
    <main className={styles.cartMain}>
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <h1 className={styles.pageTitle}>Tu selección</h1>
        </div>
        <button
          onClick={clearCart}
          className={styles.clearButton}
        >
          <span className="material-symbols-outlined">
            delete_sweep
          </span>
          Vaciar Carrito
        </button>
      </div>

      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <div key={item.id} className={styles.cartItemCard}>
            <div className={styles.itemImageContainer}>
              <Image
                alt={item.nombre}
                className={styles.itemImage}
                src={FURNITURE_IMAGES[item.muebleId] || "/images/placeholder-furniture.svg"}
                width={200}
                height={200}
              />
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemDetails}>
                <h3 className={styles.itemTitle}>{item.nombre}</h3>
                <p className={styles.itemDimensions}>
                  Dimensiones: {item.medidas.ancho} x {item.medidas.alto} x {item.medidas.fondo} cm
                </p>
                <div className={styles.itemColorContainer}>
                  <div 
                    className={`${styles.itemColorCircle} ${
                      item.color === "Natural" ? styles.colorNatural :
                      item.color === "Blanco" ? styles.colorBlanco :
                      item.color === "Nogal" ? styles.colorNogal :
                      ""
                    }`}
                  ></div>
                  <span className={styles.itemColorLabel}>
                    {item.color} / {item.madera}
                  </span>
                </div>
              </div>
              <div className={styles.itemActions}>
                <div className={styles.quantityControls}>
                  <button 
                    className={styles.quantityButton}
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className={styles.quantityValue}>{item.cantidad}</span>
                  <button 
                    className={styles.quantityButton}
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className={styles.deleteButton}
                >
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.quoteSection}>
        <div className={styles.quoteContainer}>
          <h2 className={styles.quoteTitle}>Solicitud de Presupuesto</h2>
          <p className={styles.quoteDescription}>
            Al solicitar un presupuesto, nuestro equipo revisará tus configuraciones y dimensiones para darte una
            valoración exacta incluyendo gastos de envío y montaje si fuera necesario.
          </p>
          <div className={styles.quoteButtonContainer}>
            <button onClick={handleSolicitarPresupuesto} className={styles.quoteButton}>
              Solicitar Presupuesto
            </button>
          </div>
          <p className={styles.responseTime}>
            Respuesta estimada: 24-48 horas laborables
          </p>
        </div>
      </div>
    </main>
  );
}

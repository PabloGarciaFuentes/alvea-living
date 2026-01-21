import Link from "next/link";
import Image from "next/image";
import { MUEBLES } from "@muebles/domain";
import styles from "./page.module.css";

// Mapeo de imágenes por tipo de mueble
const FURNITURE_IMAGES: Record<string, string> = {
  aparador: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7JKojzpuAEKF2j-J-Pi7N6Pcm5Oc6LoU3N5lOJaSKos29xB05Fsg4pYa67ggELVCwaO3W05iEaNk3ppuagK8dQysZjwmsBy0uJ57ZnnloUFfRjU4gqS_6WZuUx0E6k2krgJxIjhg_bhHIJBtPBtTjs08ZvUwBU0G3ikkatlxDOT4aFz4K14WOutcYIrVeWszbytZtD16HkiL8yObDbAlaDpaoa_4vkFWItdhDBDo4lltSS-JmvZAwwF5SzAkPuCzmUbfx5X-x_zRk",
  libreria: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFWduIiQHUXhFKiZ_xQUgo2EC0-gDatO4tTqPH74GilVd1mmihuhsGFtoyZ5GMyXGwD0TO5yJ2iOKqLccZh73PnlYcQbVg0ZxgfpGn9arLjBlUK3AIa4DF0VKYMYXQuif3Z_9GFdm0zFytCtG1stS5XqiaK0FjV3b9cML3JD-v2gotVjnn1gbO8SbFEiEgR-FmnwhhwpAV1K8z7dwQoqW2pQrYkv4QFnP2L4rYTBGlMJHCqqou63_4qXlgleP26M_w6of6LVXkn4s",
  "mueble-tv": "https://lh3.googleusercontent.com/aida-public/AB6AXuCXYfWmI46Qr1ul2FLWZGm3XDwdD9hDNKHJM8_gsOoNLUYDKuMtuLbFJzF4cereYDfklU--p7URXGQf9XxeqBVJoSn17WODbaFiR5j3x7BAMuvf5vKVK8FafBvDNZ5P61F3tYU4AxdRtbN8X3jEcIDxKn1BtY8rxIIBuN6mHQwzqKFpxTK9HuPA_BQua46QBLEw1kaLoR8TJaoKU_WdfSw5rfBx5DY94NbaBv3pR2WKmp2UEHF5eg5NM42ktV4pzNfb_NKXjbnu39D9",
  armario: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC5hvMeIDTB1SWNaD8raYRfJGyUD36J703_P0sI3-5gjR4GhS-oiFpuN9OSOWzQj0cxcUfB7CTLZKpvVNiYLexnS2xQ3obOhqZ-CFofS4XHjd6bVoRm1rpWIJ3-qFlpqr9qLSnQNZxSEasWJKLjELwDpn40y8hDTPQLLMjdRcc1JQ8R_VchZg2uzOF84Ed4Kxy2JTzdVUARThcKwKK66QttiNsMwzFVoerpljwV-Cc0RtlEJBmxYpuTTa5FvN0OOONC_YVN9t0F5u_",
};

export default function MueblesPage() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Elige tu base de diseño
        </h2>
        <p className={styles.description}>
          Selecciona la tipología de mueble que mejor se adapte a tu espacio y empieza a personalizar cada detalle.
        </p>
      </div>
      <div className={styles.grid}>
        {MUEBLES.map((mueble) => (
          <div key={mueble.id} className={styles.card}>
            <Link href={`/configurador/${mueble.id}`} className={styles.imageContainer}>
              <Image
                alt={`${mueble.nombre} de diseño minimalista`}
                className={styles.image}
                src={FURNITURE_IMAGES[mueble.id] || "/images/placeholder-furniture.svg"}
                width={400}
                height={500}
                priority={false}
              />
              <div className={styles.overlay}></div>
            </Link>
            <Link href={`/configurador/${mueble.id}`} className={styles.cardTitle}>
              {mueble.nombre}
            </Link>
            <Link
              href={`/configurador/${mueble.id}`}
              className={styles.configureButton}
            >
              Configurar
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
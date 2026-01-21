// app/configurador/[id]/page.tsx
import Image from "next/image";
import { getMuebleById } from "@muebles/domain";
import ConfiguradorForm from "./ConfiguradorForm";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

// Mapeo de imágenes por tipo de mueble
const FURNITURE_IMAGES: Record<string, string> = {
  aparador: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7JKojzpuAEKF2j-J-Pi7N6Pcm5Oc6LoU3N5lOJaSKos29xB05Fsg4pYa67ggELVCwaO3W05iEaNk3ppuagK8dQysZjwmsBy0uJ57ZnnloUFfRjU4gqS_6WZuUx0E6k2krgJxIjhg_bhHIJBtPBtTjs08ZvUwBU0G3ikkatlxDOT4aFz4K14WOutcYIrVeWszbytZtD16HkiL8yObDbAlaDpaoa_4vkFWItdhDBDo4lltSS-JmvZAwwF5SzAkPuCzmUbfx5X-x_zRk",
  libreria: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbFWduIiQHUXhFKiZ_xQUgo2EC0-gDatO4tTqPH74GilVd1mmihuhsGFtoyZ5GMyXGwD0TO5yJ2iOKqLccZh73PnlYcQbVg0ZxgfpGn9arLjBlUK3AIa4DF0VKYMYXQuif3Z_9GFdm0zFytCtG1stS5XqiaK0FjV3b9cML3JD-v2gotVjnn1gbO8SbFEiEgR-FmnwhhwpAV1K8z7dwQoqW2pQrYkv4QFnP2L4rYTBGlMJHCqqou63_4qXlgleP26M_w6of6LVXkn4s",
  "mueble-tv": "https://lh3.googleusercontent.com/aida-public/AB6AXuCXYfWmI46Qr1ul2FLWZGm3XDwdD9hDNKHJM8_gsOoNLUYDKuMtuLbFJzF4cereYDfklU--p7URXGQf9XxeqBVJoSn17WODbaFiR5j3x7BAMuvf5vKVK8FafBvDNZ5P61F3tYU4AxdRtbN8X3jEcIDxKn1BtY8rxIIBuN6mHQwzqKFpxTK9HuPA_BQua46QBLEw1kaLoR8TJaoKU_WdfSw5rfBx5DY94NbaBv3pR2WKmp2UEHF5eg5NM42ktV4pzNfb_NKXjbnu39D9",
  armario: "https://lh3.googleusercontent.com/aida-public/AB6AXuCC5hvMeIDTB1SWNaD8raYRfJGyUD36J703_P0sI3-5gjR4GhS-oiFpuN9OSOWzQj0cxcUfB7CTLZKpvVNiYLexnS2xQ3obOhqZ-CFofS4XHjd6bVoRm1rpWIJ3-qFlpqr9qLSnQNZxSEasWJKLjELwDpn40y8hDTPQLLMjdRcc1JQ8R_VchZg2uzOF84Ed4Kxy2JTzdVUARThcKwKK66QttiNsMwzFVoerpljwV-Cc0RtlEJBmxYpuTTa5FvN0OOONC_YVN9t0F5u_"
};

export default async function ConfiguradorPage({ params }: PageProps) {
  const { id } = await params; // ✅ desempaquetamos la promesa
  const mueble = getMuebleById(id);

  if (!mueble) {
    return (
      <main className={styles.notFoundMain}>
        <h1>Mueble no encontrado</h1>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <Image
              alt={`${mueble.nombre} Hero`}
              className={styles.image}
              src={FURNITURE_IMAGES[mueble.id] || "/images/placeholder-furniture.svg"}
              width={800}
              height={800}
              priority={true}
            />
          </div>
        </div>
        <ConfiguradorForm mueble={mueble} />
      </div>
    </main>
  );
}
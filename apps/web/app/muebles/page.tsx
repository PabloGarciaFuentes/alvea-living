import Link from "next/link";
import { MUEBLES } from "@muebles/domain";
import styles from "./page.module.css";

export default function MueblesPage() {
  return (
    <main className={styles.mueblesMain}>
      <h1 className={styles.mueblesTitle}>
        Nuestros muebles
      </h1>

      <ul className={styles.mueblesList}>
        {MUEBLES.map((mueble) => (
          <li
            key={mueble.id}
            className={styles.muebleCard}
          >
            <h2>{mueble.nombre}</h2>

            <p>
              {mueble.descripcion}
            </p>

            <Link
              href={`/configurador/${mueble.id}`}
              className={styles.muebleConfigureButton}
            >
              Configurar
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
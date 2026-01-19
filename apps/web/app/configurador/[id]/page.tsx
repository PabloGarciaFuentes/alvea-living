// app/configurador/[id]/page.tsx
import { getMuebleById } from "@muebles/domain";
import ConfiguradorForm from "./ConfiguradorForm";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ConfiguradorPage({ params }: PageProps) {
  const { id } = await params; // ✅ desempaquetamos la promesa
  const mueble = getMuebleById(id);

  if (!mueble) {
    return (
      <main className={styles.configuradorNotFound}>
        <h1>Mueble no encontrado</h1>
      </main>
    );
  }

  return (
    <main className={styles.configuradorMain}>
      <ConfiguradorForm mueble={mueble} />
    </main>
  );
}
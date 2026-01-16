// app/configurador/[id]/page.tsx
import { getMuebleById } from "@muebles/domain";
import ConfiguradorForm from "./ConfiguradorForm";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ConfiguradorPage({ params }: PageProps) {
  const { id } = await params; // ✅ desempaquetamos la promesa
  const mueble = getMuebleById(id);

  if (!mueble) {
    return (
      <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1>Mueble no encontrado</h1>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <ConfiguradorForm mueble={mueble} />
    </main>
  );
}
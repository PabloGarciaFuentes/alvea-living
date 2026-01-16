// domain/muebles.ts

export type LimitesMedidas = {
  ancho: { min: number; max: number };
  alto: { min: number; max: number };
  fondo: { min: number; max: number };
};

export type MuebleBase = {
  id: string;
  nombre: string;
  descripcion: string;
  limitesMedidas: LimitesMedidas;
  maderasDisponibles: string[];
  coloresDisponibles: string[];
};

/**
 * Catálogo mock de muebles (Sprint 1)
 * Más adelante esto vendrá de backend o CMS
 */
export const MUEBLES: MuebleBase[] = [
  {
    id: "armario",
    nombre: "Armario a medida",
    descripcion:
      "Armario personalizado con medidas, madera y acabado a elegir.",
    limitesMedidas: {
      ancho: { min: 80, max: 300 },
      alto: { min: 180, max: 260 },
      fondo: { min: 40, max: 80 },
    },
    maderasDisponibles: ["Roble", "Haya", "Pino"],
    coloresDisponibles: ["Natural", "Blanco", "Nogal"],
  },
];

/**
 * Helper para obtener un mueble por id
 */
export function getMuebleById(id: string): MuebleBase | undefined {
  return MUEBLES.find((mueble) => mueble.id === id);
}
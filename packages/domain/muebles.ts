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
    id: "aparador",
    nombre: "Aparadores",
    descripcion:
      "Aparador personalizado con medidas, madera y acabado a elegir.",
    limitesMedidas: {
      ancho: { min: 100, max: 250 },
      alto: { min: 70, max: 120 },
      fondo: { min: 35, max: 60 },
    },
    maderasDisponibles: ["Roble", "Haya", "Nogal"],
    coloresDisponibles: ["Natural", "Blanco", "Nogal"],
  },
  {
    id: "libreria",
    nombre: "Librerías",
    descripcion:
      "Librería modular personalizada con medidas, madera y acabado a elegir.",
    limitesMedidas: {
      ancho: { min: 80, max: 300 },
      alto: { min: 150, max: 250 },
      fondo: { min: 25, max: 50 },
    },
    maderasDisponibles: ["Roble", "Haya", "Pino"],
    coloresDisponibles: ["Natural", "Blanco", "Nogal"],
  },
  {
    id: "mueble-tv",
    nombre: "Muebles TV",
    descripcion:
      "Mueble para TV personalizado con medidas, madera y acabado a elegir.",
    limitesMedidas: {
      ancho: { min: 100, max: 200 },
      alto: { min: 40, max: 80 },
      fondo: { min: 30, max: 50 },
    },
    maderasDisponibles: ["Roble", "Haya", "Nogal"],
    coloresDisponibles: ["Natural", "Blanco", "Nogal"],
  },
  {
    id: "armario",
    nombre: "Armarios",
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
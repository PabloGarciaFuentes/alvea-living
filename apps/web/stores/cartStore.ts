import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
  id: string;              // uuid o timestamp
  muebleId: string;
  nombre: string;
  medidas: {
    ancho: number;
    alto: number;
    fondo: number;
  };
  madera: string;
  color: string;
  cantidad: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "id" | "cantidad">) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

// Crear el store con persistencia en localStorage
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => ({
          items: [
            ...state.items,
            {
              ...item,
              id: crypto.randomUUID(),
              cantidad: 1,
            },
          ],
        })),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: "alvea-cart-storage", // nombre único para localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
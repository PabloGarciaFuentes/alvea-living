"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";

export default function CartBadge() {
  const itemCount = useCartStore((state) => state.items.length);

  return (
    <Link
      href="/carrito"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.5rem 1rem",
        textDecoration: "none",
        color: "#000",
        fontWeight: "500",
      }}
    >
      <span>🛒</span>
      <span>Carrito</span>
      {itemCount > 0 && (
        <span
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            backgroundColor: "#dc2626",
            color: "#fff",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.75rem",
            fontWeight: "700",
          }}
        >
          {itemCount}
        </span>
      )}
    </Link>
  );
}

"use client";

import Link from "next/link";
import CartBadge from "./CartBadge";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            textDecoration: "none",
            color: "#000",
          }}
        >
          Alvea Living
        </Link>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link
            href="/muebles"
            style={{
              textDecoration: "none",
              color: "#000",
              fontWeight: "500",
            }}
          >
            Muebles
          </Link>
          <CartBadge />
        </div>
      </nav>
    </header>
  );
}

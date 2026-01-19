"use client";

import Link from "next/link";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart } from '@mui/icons-material';
import styles from "./CartBadge.module.css";

export default function CartBadge() {
  const itemCount = useCartStore((state) => state.items.length);

  return (
    <Link href="/carrito" className={styles.cartLink}>
      <ShoppingCart className={styles.cartIcon} />
      {itemCount > 0 && (
        <span className={styles.badge}>{itemCount}</span>
      )}
    </Link>
  );
}

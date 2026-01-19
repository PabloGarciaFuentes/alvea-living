"use client";

import Link from "next/link";
import CartBadge from "./CartBadge";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.leftSection}></div>
        
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoAlvea}>ALVEA</span>
            <span className={styles.logoLiving}>LIVING</span>
          </Link>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.rightSection}>
          <Link href="/muebles" className={styles.navLink}>
            PRODUCTOS
          </Link>
          <Link href="/nosotros" className={styles.navLink}>
            NOSOTROS
          </Link>
          <CartBadge />
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartBadge from "./CartBadge";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.leftSection}></div>
        
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <span className={styles.logoAlvea}>ALVEA</span>
            <span className={styles.logoLiving}>LIVING</span>
          </Link>
          <div className={styles.underline}></div>
        </div>
        
        <div className={styles.rightSection}>
          {/* Desktop Navigation */}
          <Link href="/muebles" className={styles.navLink}>
            PRODUCTOS
          </Link>
          <Link href="/nosotros" className={styles.navLink}>
            NOSOTROS
          </Link>
          <CartBadge />
          
          {/* Mobile Hamburger Button */}
          <button 
            className={styles.hamburgerButton} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <CloseIcon sx={{ fontSize: '1.5rem', color: '#44403c' }} />
            ) : (
              <MenuIcon sx={{ fontSize: '1.5rem', color: '#44403c' }} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileMenuContent}>
          <Link href="/muebles" className={styles.mobileNavLink} onClick={closeMenu}>
            PRODUCTOS
          </Link>
          <Link href="/nosotros" className={styles.mobileNavLink} onClick={closeMenu}>
            NOSOTROS
          </Link>
          {/* <div className={styles.mobileCartContainer}>
            <CartBadge />
          </div> */}
        </div>
      </div>
      
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div className={styles.mobileMenuBackdrop} onClick={closeMenu}></div>
      )}
    </nav>
  );
}

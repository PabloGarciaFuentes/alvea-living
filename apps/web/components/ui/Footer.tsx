import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © 2024 ALVEA LIVING. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div className={styles.links}>
          <a 
            className={styles.link} 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a 
            className={styles.link} 
            href="https://pinterest.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Pinterest
          </a>
          <a 
            className={styles.link} 
            href="#"
          >
            Contacto
          </a>
        </div>
      </div>
    </footer>
  );
}
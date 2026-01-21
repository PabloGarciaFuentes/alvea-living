import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <p className={styles.copyright}>
            Copyright © 2026 ALVEA LIVING. All rights reserved.
          </p>
          <p className={styles.credit}>
            Designed & Built by{' '}
            <a 
              href="https://pablogf.dev/" 
              className={styles.creditLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              PablogfDev
            </a>
          </p>
        </div>
        <div className={styles.links}>
          <a 
            className={styles.link} 
            href="https://www.instagram.com/alvealiving/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
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
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <Image 
            alt="Alvea Living Room Scene" 
            className={styles.heroImage}
            src="/images/hero/hero_img.png"
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Muebles modulares <br /> 
              a medida para vivir mejor
            </h1>
            <p className={styles.heroDescription}>
              Diseño modular y natural inspirado en la vida camper, pensado para tu hogar.
            </p>
            <Link href="/muebles" className={styles.ctaButton}>
              Diseña el tuyo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className={styles.materialIcon}>widgets</span>
              </div>
              <h3 className={styles.featureTitle}>Diseño modular</h3>
              <div className={styles.featureLine}></div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className={`${styles.materialIcon} ${styles.ecoIcon}`}>eco</span>
              </div>
              <h3 className={styles.featureTitle}>Eco & natural</h3>
              <div className={styles.featureLine}></div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <span className={styles.materialIcon}>tune</span>
              </div>
              <h3 className={styles.featureTitle}>A tu medida</h3>
              <div className={styles.featureLine}></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
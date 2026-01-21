import styles from "./Features.module.css";
import WidgetsIcon from '@mui/icons-material/Widgets';
import TuneIcon from '@mui/icons-material/Tune';
import ForestIcon from '@mui/icons-material/Forest';

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <WidgetsIcon />
            </div>
            <h3 className={styles.featureTitle}>Diseño modular</h3>
            <div className={styles.featureLine}></div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <ForestIcon />
            </div>
            <h3 className={styles.featureTitle}>Eco & natural</h3>
            <div className={styles.featureLine}></div>
          </div>
          
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <TuneIcon />
            </div>
            <h3 className={styles.featureTitle}>A tu medida</h3>
            <div className={styles.featureLine}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
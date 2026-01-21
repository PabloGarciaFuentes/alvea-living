
import ForestIcon from '@mui/icons-material/Forest';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TuneIcon from '@mui/icons-material/Tune';
import styles from './page.module.css';

export default function NosotrosPage() {
    return (
        <main>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroGrid}>
                        <div className={styles.imageContainer}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.heroImage} />
                            </div>
                            {/* Subtle Badge */}
                            <div className={styles.badge}>
                                <p className={styles.badgeYear}>Fundada en 2026</p>
                                <p className={styles.badgeText}>Excelencia en cada corte.</p>
                            </div>
                        </div>
                        <div className={styles.contentContainer}>
                            <h1 className={styles.heroTitle}>
                                Inspirados por el <span className={styles.heroTitleSpan}>diseño modular</span> y la vida en movimiento.
                            </h1>
                            <p className={styles.heroDescription}>
                                En <span className={styles.underline}><span className={styles.heroDescriptionSpan1}>ALVEA</span> <span className={styles.heroDescriptionSpan2}>LIVING</span></span>, no solo creamos muebles; diseñamos ecosistemas para el hogar moderno. Creemos que tu espacio debe evolucionar contigo, manteniendo siempre un vínculo honesto con la naturaleza.
                            </p>
                            <div className={styles.divider} />
                            <div className={styles.promiseContainer}>
                                <p className={styles.promiseLabel}>Nuestra Promesa</p>
                                <p className={styles.promiseText}>Artesanía de ayer, soluciones para mañana.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className={styles.philosophySection}>
                <div className={styles.philosophyContainer}>
                    <div className={styles.philosophyHeader}>
                        <h2 className={styles.philosophyTitle}>Nuestra Filosofía</h2>
                        <div className={styles.philosophyDivider} />
                        <p className={styles.philosophyDescription}>
                            Un compromiso inquebrantable con la pureza de los materiales y la funcionalidad intuitiva.
                        </p>
                    </div>
                    <div className={styles.cardsGrid}>
                        {/* Card 1 */}
                        <div className={styles.card}>
                            <div className={styles.cardIconContainer}>
                                <div className={styles.cardIcon}>
                                    <ForestIcon sx={{ fontSize: '3rem' }} />
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Sostenibilidad</h3>
                            <p className={styles.cardDescription}>
                                Solo trabajamos con maderas de bosques certificados y acabados naturales libres de tóxicos. Respetamos el ciclo de vida de cada recurso.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className={styles.card}>
                            <div className={styles.cardIconContainer}>
                                <div className={styles.cardIcon}>
                                    <WidgetsIcon sx={{ fontSize: '3rem' }} />
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Artesanía modular</h3>
                            <p className={styles.cardDescription}>
                                Entendemos que no hay dos hogares iguales. Nuestras piezas modulares se adaptan y crecen junto a tus necesidades cambiantes.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className={styles.card}>
                            <div className={styles.cardIconContainer}>
                                <div className={styles.cardIcon}>
                                    <TuneIcon sx={{ fontSize: '3rem' }} />
                                </div>
                            </div>
                            <h3 className={styles.cardTitle}>Diseño a Medida</h3>
                            <p className={styles.cardDescription}>
                                Cada unión, cada veta y cada acabado es supervisado por manos expertas. La tecnología nos asiste, pero el corazón es puramente artesanal.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
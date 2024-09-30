import styles from '../styles/Google.module.scss';
import Link from 'next/link';

export default function Google() {

    return (
        <div className={styles.container}>
            <p className={styles.texto}>Somos o escritório<br /><span className={styles.destaque}>5 estrelas</span> de avaliação<br />pelo público do Google.</p>
            <Link href="https://maps.app.goo.gl/V6DRu7i6nqmMVKpd8" className={styles.link}>
                <img src="/Google.svg" alt="Google Avaliação 5 estrelas" className={styles.img} />
            </Link>                    
        </div>
    )
}
import styles from '../styles/Topico.module.scss';

export default function Topico(props) {
    return (
        <div className={styles.container}>
            <p className={styles.descricao}><span className={styles.topico}>{props.topico}</span>{props.descricao}</p>
        </div>
    )
}
import styles from '../styles/Card.module.scss';

export default function Card(props) {
    return (
       <div className={styles.container}>
        <div className={styles.card}>
            <img className={styles.icone} src={props.icone} alt={props.alt} />
            <div className={styles.conteudo}>
                <p className={styles.titulo}>{props.titulo}</p>
                <p className={styles.descricao}>{props.descricao}</p>
            </div>
        </div>
       </div>
    )
}
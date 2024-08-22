import styles from '../styles/Perfil.module.scss';

export default function Card(props) {
    return (
       <div className={styles.card}>
        <img className={styles.foto} src={props.foto} alt={props.alt} />
        <p className={styles.nome}>{props.nome}</p>
        <p className={styles.descricao}>{props.descricao}</p>
       </div>
    )
}
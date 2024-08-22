import styles from '../styles/Titulo.module.scss';

export default function Titulo(props) {
    return (
       <h2 className={styles[props.cor]}>{props.titulo}</h2>
    )
}
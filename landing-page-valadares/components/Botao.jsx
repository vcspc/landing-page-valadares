import styles from '../styles/Botao.module.scss';

import Link from 'next/link';

export default function Botao(props) {
    return (
        <Link href={props.link} className={styles.link}>
            <button className={styles[props.cor]}>{props.texto}</button>
        </Link>
    )
}
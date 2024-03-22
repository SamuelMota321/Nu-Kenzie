import styles from './styles.module.css'

export const FinanceCard = ({ description, valor, valorType, onDelete }) => {

    return (
        <li className={valorType === 'Saída' ? styles.cardGray : styles.cardGreen}>
            <div>
                <h1 className="title sm padding">{description}</h1>
                <p className="paragraph padding">{valorType}</p>
            </div>
            <div>
                <p className="paragraph padding"> R$ {valor}</p>
                <button onClick={onDelete} className={` ${styles.btn} btn secondary`}>Excluir</button>
            </div>
        </li>
    )
}
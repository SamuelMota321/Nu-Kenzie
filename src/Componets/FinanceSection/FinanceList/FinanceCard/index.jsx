export const FinanceCard = ({description, valor, valorType , onDelete}) => {

    return (
        <li>
            <h1>{description}</h1>
            <p>{valor}</p>
            <p>{valorType}</p>
            <button onClick={onDelete}>Excluir</button>
        </li>
    )
}
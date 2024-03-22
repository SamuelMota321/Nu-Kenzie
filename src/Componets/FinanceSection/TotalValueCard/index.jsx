import styles from './styles.module.css'

export const TotalValue = ({ financeData }) => {
    const entrada = financeData.filter(item => item.valorType === 'Entrada')
    const saida = financeData.filter(item => item.valorType === 'Saída')

    const totalEntrada = entrada.reduce((acc, curr) => Number(acc) + Number(curr.valor), 0)
    const totalSaida = saida.reduce((acc, curr) => Number(acc) + Number(curr.valor), 0)

    const saldoTotal = totalEntrada - totalSaida

    return (
        <div className={`${styles.totalValueCard} grid-position-1 `}>
            <h1 className={`${styles.title} title sm`} >Valor Total: <span className="highlight"> R$ {saldoTotal}</span></h1>
            <p className="paragraph">O Valor se refere ao saldo</p>
        </div>
    )
}
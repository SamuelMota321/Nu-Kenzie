export const TotalValue = ({ financeData }) => {
    // Filtrar os valores de entrada e de saída
    const entrada = financeData.filter(item => item.valorType === 'Entrada')
    const saida = financeData.filter(item => item.valorType === 'Saída')

    // Somar os valores de entrada
    const totalEntrada = entrada.reduce((acc, curr) => acc + curr.valor, 0)
    // Subtrair os valores de saída
    const totalSaida = saida.reduce((acc, curr) => acc + curr.valor, 0)

    // Calcular o saldo total
    const saldoTotal = totalEntrada - totalSaida

    return (
        <div>

            <p>Valor Total: <span> R$ {saldoTotal}</span></p>
            <p>O Valor se refere ao saldo</p>
        </div>
    )
}
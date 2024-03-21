import React, { useState, useEffect } from 'react'
import { FinanceCard } from './FinanceCard'

export const FinanceList = ({ financeData }) => {
    const [financeList, setFinanceList] = useState([])

    useEffect(() => {
        setFinanceList(financeData)
    }, [financeData])
    
    const handleDelete = (index) => {
        const newList = [...financeList]
        newList.splice(index, 1)
        setFinanceList(newList)
    }

    return (
        <div>
            <h1>Resumo financeiro</h1>
            
            {financeList.map((data, index) => (
                <FinanceCard
                    key={index}
                    description={data.description}
                    valor={data.valor}
                    valorType={data.valorType}
                    onDelete={() => handleDelete(index)}
                />
            ))}
        </div>
    )
}

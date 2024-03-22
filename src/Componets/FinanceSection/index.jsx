import React, { useState } from "react"
import { FinanceForm } from "./FinanceForm/index.jsx"
import { FinanceList } from "./FinanceList/index.jsx"
import { TotalValue } from "./TotalValueCard/index.jsx"

export const FinanceSection = () => {
    const [financeData, setFinanceData] = useState([])

    const handleSubmit = (data) => {
        setFinanceData([...financeData, data])
    }

    return (
        <section className="container grid">
            <FinanceForm onSubmit={handleSubmit} />
            <TotalValue financeData={financeData} />
            <FinanceList financeData={financeData} setFinanceData={setFinanceData}/>
        </section>
    )
}
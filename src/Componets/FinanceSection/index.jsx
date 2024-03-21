import React, { useState } from "react"
import { FinanceForm } from "./FinanceForm/index.jsx"
import { FinanceList } from "./FinanceList/index.jsx"

export const FinanceSection = () => {
    const [financeData, setFinanceData] = useState([])

    const handleSubmit = (data) => {
        setFinanceData([...financeData, data])
    }

    return (
        <>
            <FinanceForm onSubmit={handleSubmit} />
            <FinanceList financeData={financeData} />
        </>
    )
}
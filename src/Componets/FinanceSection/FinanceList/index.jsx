import { FinanceCard } from './FinanceCard';

export const FinanceList = ({ financeData, setFinanceData }) => {
    
    const handleDelete = (index) => {
        setFinanceData(prevData => prevData.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Resumo financeiro</h1>
            {financeData.length === 0 ? (
                <p>Você ainda não possui lançamentos</p>
            ) : (
                financeData.map((data, index) => (
                    <FinanceCard
                        key={index}
                        description={data.description}
                        valor={data.valor}
                        valorType={data.valorType}
                        onDelete={() => handleDelete(index)}
                    />
                ))
            )}
        </div>
    );
};

import { FinanceCard } from './FinanceCard';

export const FinanceList = ({ financeData, setFinanceData }) => {
    
    const handleDelete = (index) => {
        setFinanceData(prevData => prevData.filter((_, i) => i !== index));
    };

    return (
        <div className='grid-position-2'>
            <h1 className='title sm padding' >Resumo financeiro</h1>
            {financeData.length === 0 ? (
                <h1 className='title md'>Você ainda não possui lançamentos</h1>
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

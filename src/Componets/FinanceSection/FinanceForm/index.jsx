import { useState } from "react";



export const FinanceForm = ({ onSubmit = event => event }) => {
    const [description, setDescription] = useState('');
    const [valor, setValue] = useState('');
    const [valorType, setValueType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({ description, valor, valorType })
        setDescription("")
        setValue("")
        setValueType("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description">Descrição</label>
                <input type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)}  placeholder="Digite aqui sua descrição" />
                <p> Ex: compra de roupas</p>

                <label htmlFor="valor">Valor (R$) </label>
                <input type="number" name="valor" value={valor} onChange={(event) => setValue(event.target.value)}  placeholder="1" />

                <label htmlFor="valorType">Tipo de valor</label>
                <select name="valorType" value={valorType} onChange={(event) => setValueType(event.target.value)} >
                    <option value="">Selecione uma opção</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saída</option>
                </select>
                <button type="submit">Inserir valor</button>
            </form>
        </>
    );
};


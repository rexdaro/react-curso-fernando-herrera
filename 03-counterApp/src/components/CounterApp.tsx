import { useState } from "react"


export const CounterApp = ({value}: any) => {

    

    const [numero, setNumero] = useState(value);

    const sumar = () => {

        setNumero(numero + 1);


    }

    const restar = () => {
        setNumero(numero - 1);
    }
    

    const reset = () => {

        setNumero(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {numero} </h2>
            <button onClick={restar}>-1</button>
            <button onClick={reset}>reset</button>
            <button onClick={sumar}>+1</button>
            
            
            
        </>
    )
}
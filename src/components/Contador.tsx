import React, { useState } from 'react'
export const Contador = () => {

    const [valor, setValor] = useState(0);// 0 es el valor inicial

    const acumular = (numero: number) => {// numero es el valor que se le pasa a la función
        setValor(valor + numero);// valor es el valor que se le pasa a la función
        // setValor(valor + 1);
    }

    return (
        <>
            <h3>Contador: <small> {valor} </small> </h3>

            <button
                className='btn btn-primary'
                onClick={() => acumular(1)}
            >
                +1
            </button>
            &nbsp;
            <button
                className='btn btn-primary'
                onClick={() => acumular(-1)}
            >
                -1
            </button>

        </>
    )
}

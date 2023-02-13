import { useState } from "react";

export const useCounter = (numero: number= 10 ) => {// numero es el valor que se le pasa a la función
    //number es el tipo de dato que se le pasa a la función
    //numero es el valor por defecto que se le pasa a la función
    const [valor, setValor] = useState(numero);

    const acumular = (numero: number) => {// numero es el valor que se le pasa a la función
        setValor(valor + numero);// valor es el valor que se le pasa a la función
        // setValor(valor + 1);
    }

    return {//retorna un objeto
        valor,
        acumular
    }
}

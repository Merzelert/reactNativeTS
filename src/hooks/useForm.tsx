import { useState } from 'react';

export const useForm = <T extends Object>( formulario: T ) => {
    const [state, setState] = useState(formulario);//maneja el estado del formulario

    const onChange = (value: string, campo: keyof T) => {//funcion para manejar los cambios en el formulario que recibe el valor y el campo
        setState({
            ...state,//copia del formulario
            [campo]: value//cambio del campo
        })
    }

    return {
        ...state,//retorna el formulario
        formulario: state,
        onChange
    }
}

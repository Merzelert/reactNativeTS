import { useState } from 'react';

export const useForm = () => {
    const [formulario, setFormulario] = useState({//manejo de estado para el formulario
        email: 'correo@correo.com',
        password: '123456'
    });

    const onChange = (value: string, campo: string) => {//funcion para manejar los cambios en el formulario que recibe el valor y el campo
        setFormulario({
            ...formulario,//copia del formulario
            [campo]: value//cambio del campo
        })
    }

    return {
        formulario,
        onChange
    }
}

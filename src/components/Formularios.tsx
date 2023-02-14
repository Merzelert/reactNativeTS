import { useForm } from '../hooks/useForm';

export const Formularios = () => {

    const {formulario, email, password, onChange} = useForm({
        email: 'correo@correo.com',
        password: '123456'
    });//desestructuracion del formulario, email y password, asi como la funcion onChange

    return (
        <>
            <h3>Formularios</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={email}//valores por defecto del formulario desde el estado
                onChange={({ target }) => onChange(target.value, 'email')}//cambio de valores del formulario
            />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={password}
                onChange={({ target }) => onChange(target.value, 'password')}
            />
            {/* //imprime el formulario */}
            <code>
                <pre>
                    {JSON.stringify(formulario, null, 2)}
                </pre>
            </code>
        </>
    )
}

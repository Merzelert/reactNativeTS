import { useCounter } from '../hooks/useCounter';
export const ContadorConHook = () => {

    const { valor, acumular } = useCounter();//valor y acumular son los valores que retorna el objeto desde el hook useCounter

    return (
        <>
            <h3>Contador con hook: <small> {valor} </small> </h3>

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
